import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import { directus } from '@/lib/directus';
import type { ChaveIa } from '@/lib/directus';
import { readItems } from '@directus/sdk';

// Função utilitária mockada para buscar arquivos no Drive
// Em produção, usar: import { google } from 'googleapis';
async function fetchGoogleDriveContext(): Promise<string> {
  /*
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  const drive = google.drive({ version: 'v3', auth });
  
  // Exemplo de como extrair texto de um Google Doc ou arquivo texto:
  const res = await drive.files.export({
    fileId: 'ID_DO_ARQUIVO_AQUI',
    mimeType: 'text/plain'
  });
  return res.data;
  */
  return "Contexto: O aplicativo AMAR apoia mulheres em situação de vulnerabilidade. A ouvidoria acolhe denúncias e dúvidas, oferecendo orientação jurídica e psicológica via nossa rede.";
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Fetch Gemini API key and model from Directus (chaves_ia collection)
    let apiKey = '';
    let modelName = 'gemini-2.5-flash';

    try {
      const activeKeys = await directus.request(
        readItems('chaves_ia', {
          filter: {
            provedor: { _eq: 'Gemini' },
            status: { _eq: 'ativo' },
            ativa: { _eq: true },
          },
          limit: 1,
        })
      ) as ChaveIa[];

      if (activeKeys && activeKeys.length > 0) {
        apiKey = activeKeys[0].chave;
        if (activeKeys[0].modelo) {
          modelName = activeKeys[0].modelo;
        }
      }
    } catch (dbError) {
      console.error('Erro ao buscar a chave do Gemini no Directus:', dbError);
    }

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key do Gemini não configurada no Directus' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const contextText = await fetchGoogleDriveContext();

    // Construção mais simplificada do prompt baseada no histórico de mensagens
    const conversation = messages.map((m: any) => `${m.role === 'user' ? 'Cidadã' : 'IA'}: ${m.content}`).join('\n');
    const promptContext = `
Instrução do Sistema:
Você é um assistente atencioso do App AMAR focado em ajudar as mulheres a encontrarem os serviços do Sermulher. Responda as dúvidas com base neste contexto oficial: 
"${contextText}"

Histórico da conversa:
${conversation}
IA:`;

    const resultStream = await ai.models.generateContentStream({
      model: modelName,
      contents: promptContext,
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of resultStream) {
            if (chunk.text) {
              controller.enqueue(new TextEncoder().encode(chunk.text));
            }
          }
          controller.close();
        } catch (e) {
          controller.error(e);
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error: any) {
    console.error('Erro na rota de Chat:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
