import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

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

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API Key do Gemini não configurada' }, { status: 500 });
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
      model: 'gemini-2.5-flash',
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
