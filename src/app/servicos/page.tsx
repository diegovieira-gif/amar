import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type CategoryItem = {
  id: string;
  slug?: string;
  nome?: string;
  descricao?: string;
  icone?: string;
};

function IconChevron() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getIconComponent(iconKey: string | undefined) {
  const safeIconKey = iconKey || "shield";
  const icons: Record<string, React.JSX.Element> = {
    shield: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    alert: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
      </svg>
    ),
    briefcase: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path
          d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
          strokeLinecap="round"
        />
      </svg>
    ),
    book: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
        <path d="M9 10h6" strokeLinecap="round" />
      </svg>
    ),
    users: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          strokeLinecap="round"
        />
      </svg>
    ),
    star: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heart: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M12 19s-6-3.7-6-8.2C6 8 7.8 6.2 10 6.2c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4.6 0 4.5-6 8.2-6 8.2Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  return icons[safeIconKey] ? (
    icons[safeIconKey]
  ) : (
    <span className="material-symbols-outlined">{safeIconKey}</span>
  );
}

export default async function ServicesPage() {
  let categories: CategoryItem[] = [];

  try {
    const url = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/amar_categorias?filter[status][_eq]=published&sort=ordem&fields=id,slug,nome,icone`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Falha ao buscar categorias: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();
    categories = data.data || [];
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Erro ao buscar categorias de serviços:", message);
  }

  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--bg-app)" }}
    >
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1
            className="text-3xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Serviços
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Escolha uma categoria para acessar os serviços
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            {categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/servicos/${category.slug || category.id}`}
                >
                  <div
                    className="flex items-center gap-4 rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    style={{ backgroundColor: "var(--bg-surface)" }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: "var(--button-primary-bg)" }}
                    >
                      {getIconComponent(category.icone)}
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--surface-text-primary)" }}
                      >
                        {category.nome || "Categoria"}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "var(--surface-text-secondary)" }}
                      >
                        {category.descricao ||
                          "Toque para ver os serviços disponíveis."}
                      </p>
                    </div>
                    <div style={{ color: "var(--surface-text-secondary)" }}>
                      <IconChevron />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div
                className="flex flex-col gap-4 rounded-2xl border px-5 py-8 text-center"
                style={{
                  borderColor: "var(--border-soft)",
                  backgroundColor: "var(--accent-soft)",
                }}
              >
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Nenhuma categoria publicada encontrada no banco de dados.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
