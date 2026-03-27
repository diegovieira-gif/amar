import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function NovidadesPage() {
  let novidades: any[] = [];

  try {
    novidades = await directus.request(
      readItems("amar_campanhas", {
        filter: { status: { _eq: "published" } },
        sort: ["-data_inicio"] as any,
        fields: [
          "id",
          "titulo",
          "link_destino",
          "data_inicio",
          "data_fim",
        ] as any,
        limit: 20,
      }),
    );
  } catch (error) {
    console.error("Erro ao buscar novidades:", error);
  }

  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--bg-app)" }}
    >
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-20 px-4">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 transition"
            style={{ color: "var(--text-secondary)" }}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <h1
            className="text-3xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Novidades no AMAR
          </h1>
          <p
            className="text-sm opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Fique por dentro das últimas atualizações, recursos e melhorias da
            plataforma.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {novidades.length > 0 ? (
            novidades.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl p-6 shadow-sm ring-1"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--surface-text-primary)",
                  borderColor: "var(--border-soft)",
                }}
              >
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">
                    {item.titulo || "Novidade"}
                  </h2>
                  <p className="text-sm opacity-80">
                    Publicado em{" "}
                    {item.data_inicio
                      ? new Date(item.data_inicio).toLocaleDateString("pt-BR")
                      : "data não informada"}
                  </p>
                  {item.data_fim && (
                    <p className="text-xs opacity-70">
                      Vigência até{" "}
                      {new Date(item.data_fim).toLocaleDateString("pt-BR")}
                    </p>
                  )}
                  {item.link_destino ? (
                    <a
                      href={item.link_destino}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
                      style={{
                        backgroundColor: "var(--button-primary-bg)",
                        color: "var(--button-primary-text)",
                      }}
                    >
                      Ver novidade
                    </a>
                  ) : null}
                </div>
              </article>
            ))
          ) : (
            <div
              className="rounded-2xl p-6 shadow-sm ring-1"
              style={{
                backgroundColor: "var(--bg-surface)",
                color: "var(--surface-text-primary)",
                borderColor: "var(--border-soft)",
              }}
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">
                  Sem novidades publicadas
                </h2>
                <p className="text-sm leading-relaxed opacity-80">
                  Não encontramos registros publicados no banco de dados para
                  esta seção.
                </p>
                <div
                  className="mt-2 pt-4 border-t"
                  style={{ borderColor: "var(--border-soft)" }}
                >
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
                    style={{
                      backgroundColor: "var(--button-primary-bg)",
                      color: "var(--button-primary-text)",
                    }}
                  >
                    Voltar para Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
