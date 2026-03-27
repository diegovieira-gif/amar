import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as Blob | null;
    const nome = formData.get("nome") as string || "";
    const telefone = formData.get("telefone") as string || "";
    const cpf = formData.get("cpf") as string || "";

    if (!file) {
      return NextResponse.json({ error: "Áudio não fornecido" }, { status: 400 });
    }

    const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
    const directusToken = process.env.DIRECTUS_TOKEN;

    if (!directusUrl || !directusToken) {
      throw new Error("Configurações do Directus ausentes no servidor.");
    }

    // 1. Upload do arquivo para o Directus
    const fileFormData = new FormData();
    fileFormData.append("file", file, "sonho.webm");
    fileFormData.append("title", `Sonho de ${nome || "Anônimo"}`);

    const uploadRes = await fetch(`${directusUrl}/files`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${directusToken}`,
      },
      body: fileFormData,
    });

    if (!uploadRes.ok) {
      const errorData = await uploadRes.text();
      throw new Error(`Falha no upload do áudio: ${errorData}`);
    }
    
    const uploadData = await uploadRes.json();
    const fileId = uploadData.data.id;

    // 2. Criar item na coleção amar_sonhos
    const itemRes = await fetch(`${directusUrl}/items/amar_sonhos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${directusToken}`,
      },
      body: JSON.stringify({
        nome,
        telefone,
        cpf,
        audio: fileId,
      }),
    });

    if (!itemRes.ok) {
      const errorData = await itemRes.text();
      // Opcional: deletar o arquivo que acabou de subir se der erro aqui
      throw new Error(`Falha ao salvar o sonho: ${errorData}`);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erro na API de Sonho:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor ao processar o sonho." },
      { status: 500 }
    );
  }
}
