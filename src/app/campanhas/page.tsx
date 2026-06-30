import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { InstagramEmbedCard } from "./InstagramEmbedCard";

// Add url_instagram to the schema locally since it seems to not be in the global types yet
interface CampanhaList {
  id: string;
  titulo: string;
  url_instagram?: string;
  status: string;
  date_created?: string;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CampanhasPage() {
  let campanhas: CampanhaList[] = [];

  try {
    const response = await directus.request(
      readItems("amar_campanhas", {
        filter: {
          status: {
            _eq: "published",
          },
        },
        sort: ["-date_created"],
      })
    );
    campanhas = response as unknown as CampanhaList[];
  } catch {
    console.error("Erro ao buscar campanhas");
  }

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-20 px-4">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="inline-flex w-fit items-center gap-2 transition" style={{ color: 'var(--text-secondary)' }}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Campanhas para Mulheres
          </h1>
          <p className="text-sm opacity-80" style={{ color: 'var(--text-secondary)' }}>
            Conscientização, apoio e ações de impacto social.
          </p>
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-col gap-6">
          {campanhas.length > 0 ? (
            campanhas.map((campanha) => (
              <div
                key={campanha.id}
                className="rounded-2xl shadow-sm ring-1 overflow-hidden flex flex-col"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--surface-text-primary)',
                  borderColor: 'var(--border-soft)',
                }}
              >
                <div className="p-4" style={{ backgroundColor: 'var(--bg-surface-muted)' }}>
                  <h2 className="text-lg font-semibold">{campanha.titulo}</h2>
                </div>
                {campanha.url_instagram && (
                  <InstagramEmbedCard url={campanha.url_instagram} />
                )}
                {!campanha.url_instagram && (
                   <div className="p-4">
                     <p className="text-sm opacity-80">Mais detalhes em breve.</p>
                   </div>
                )}
              </div>
            ))
          ) : (
            <div
              className="rounded-2xl p-6 shadow-sm ring-1"
              style={{
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--surface-text-primary)',
                borderColor: 'var(--border-soft)',
              }}
            >
              <div className="flex flex-col gap-4 text-center">
                <p className="text-sm opacity-80">Nenhuma campanha disponível no momento.</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
