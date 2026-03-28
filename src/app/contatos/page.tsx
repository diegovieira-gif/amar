import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

function IconPhone() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default async function ContatosPage() {
  let contatosDeRede: any[] = [];

  try {
    const url = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/amar_contatos?sort=-id`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
    });

    if (res.ok) {
      const data = await res.json();
      contatosDeRede = data.data || [];
    }
  } catch (error) {
    console.error("Erro ao carregar contatos extras:", error);
  }

  const fixedEmergencies = [
    {
      id: "fixed-180",
      nome: "Central de Atendimento à Mulher",
      telefone: "180",
      descricao: "Atendimento especializado a mulheres em todo o país.",
      isHot: true,
    },
    {
      id: "fixed-190",
      nome: "Polícia Militar",
      telefone: "190",
      descricao: "Para situações de risco imediato e emergência policial.",
      isHot: true,
    },
    {
      id: "fixed-192",
      nome: "SAMU",
      telefone: "192",
      descricao: "Serviço de Atendimento Móvel de Urgência em saúde.",
    },
    {
      id: "fixed-153",
      nome: "Guarda Municipal",
      telefone: "153",
      descricao: "Patrulha Maria da Penha e apoio em ocorrências locais.",
    },
  ];

  const dbEmergencias = contatosDeRede.filter((contato) => {
    const tipo = String(
      contato?.tipo || contato?.categoria || "",
    ).toLowerCase();
    const telefone = String(contato?.telefone || "").replace(/\D/g, "");
    const isStandardNum = ["180", "190", "153", "192", "100"].includes(
      telefone,
    );
    return !isStandardNum && tipo.includes("emerg");
  });

  const allEmergencias = [...fixedEmergencies, ...dbEmergencias];

  const outrosContatos = contatosDeRede.filter((contato) => {
    const telefone = String(contato?.telefone || "").replace(/\D/g, "");
    const isStandardNum = ["180", "190", "153", "192", "100"].includes(
      telefone,
    );
    const tipo = String(
      contato?.tipo || contato?.categoria || "",
    ).toLowerCase();
    return !isStandardNum && !tipo.includes("emerg");
  });

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-app)" }}
    >
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-8 pb-32 pt-24 px-4 overflow-y-auto w-full max-w-lg mx-auto">
        <div className="flex flex-col gap-2">
          <h1
            className="text-3xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Rede de Apoio
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Contatos importantes e de emergência para a sua proteção e
            bem-estar.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 px-1">
            <span className="text-rose-500">
              <IconShield />
            </span>
            <h2
              className="text-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Emergência
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allEmergencias.map((em) => (
              <a
                key={em.id}
                href={`tel:${em.telefone}`}
                className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform active:scale-95 border-b-4 ${em.isHot ? "border-rose-500/20" : "border-transparent"}`}
                style={{ backgroundColor: "var(--bg-surface)" }}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-rose-600">
                    {em.nome || "Contato de emergência"}
                  </h3>
                  <p
                    className="text-[11px] leading-tight"
                    style={{ color: "var(--surface-text-secondary)" }}
                  >
                    {em.descricao || "Sem descrição."}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 bg-rose-50 text-rose-600 rounded-full w-14 h-14 shadow-sm border border-rose-100">
                  <span className="font-extrabold text-lg">
                    {em.telefone || "-"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-2 px-1">
            <h2
              className="text-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Outros Contatos Úteis
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {outrosContatos.length === 0 ? (
              <p
                className="text-sm text-center py-6 border border-dashed rounded-2xl"
                style={{
                  borderColor: "var(--border-soft)",
                  color: "var(--text-muted)",
                }}
              >
                Nenhum contato adicional cadastrado no momento.
              </p>
            ) : (
              outrosContatos.map((contato: any) => (
                <div
                  key={contato.id}
                  className="flex flex-col gap-3 rounded-2xl px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  style={{ backgroundColor: "var(--bg-surface)" }}
                >
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "var(--surface-text-primary)" }}
                    >
                      {contato.nome || "Não informado"}
                    </h3>
                    {contato.descricao && (
                      <p
                        className="text-sm"
                        style={{ color: "var(--surface-text-secondary)" }}
                      >
                        {contato.descricao}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    {contato.telefone && (
                      <a
                        href={`tel:${contato.telefone}`}
                        className="flex items-center gap-2 text-sm text-blue-500 font-medium w-fit"
                      >
                        <IconPhone />
                        <span>{contato.telefone}</span>
                      </a>
                    )}

                    {contato.endereco && (
                      <div
                        className="flex items-start gap-2 mt-1 text-sm pt-2 border-t"
                        style={{
                          borderColor: "var(--border-soft)",
                          color: "var(--surface-text-secondary)",
                        }}
                      >
                        <div className="mt-0.5">
                          <IconMapPin />
                        </div>
                        <span className="leading-relaxed">
                          {contato.endereco}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
