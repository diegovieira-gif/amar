import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Link from "next/link";
import CategoryChip from "@/components/CategoryChip";
import HomeHighlightsCarousel from "@/components/home/HomeHighlightsCarousel";
import ProjetosCarousel from "@/components/home/ProjetosCarousel";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Home() {
  let categorias: any[] = [];
  let campanhas: any[] = [];
  let projetos: any[] = [];

  try {
    // Fetch das categorias (amar_categorias) ordenando pelo campo ordem e filtrando por status: 'published'
    categorias = await directus.request(
      readItems("amar_categorias", {
        filter: { status: { _eq: "published" } },
        sort: ["ordem"] as any,
      })
    );
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }

  try {
    // Fetch das campanhas (amar_campanhas) filtrando por status: 'published'
    campanhas = await directus.request(
      readItems("amar_campanhas", {
        filter: { status: { _eq: "published" } },
        fields: ["*", "imagem_capa.*"] as any,
      })
    );
  } catch (error) {
    console.error('Erro ao buscar campanhas:', error);
  }

  try {
    // Fetch dos projetos (amar_projetos) filtrando por status: 'published'
    projetos = await directus.request(
      readItems("amar_projetos", {
        filter: { status: { _eq: "published" } },
        sort: ["ordem"] as any,
      })
    );
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
  }

  const isErrorOrEmpty = categorias.length === 0;

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--bg-app)]">
      {isErrorOrEmpty && (
        <div className="bg-red-500 text-white p-4 font-bold text-center">
          Nenhum dado vindo da API! Verifique o Terminal.
        </div>
      )}
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-20 px-4">
        <Hero />

        {/* Campanhas em Destaque */}
        <section className="mt-4">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
            Campanhas em Destaque
          </h2>
          <HomeHighlightsCarousel campanhas={campanhas} />
        </section>

        {/* Projetos */}
        {projetos.length > 0 && (
          <section className="mt-2">
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
              Projetos
            </h2>
            <ProjetosCarousel projetos={projetos} />
          </section>
        )}

        {/* Banner Instagram */}
        <section className="mt-2">
          <a
            href="https://www.instagram.com/sermulheraju"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            className="flex items-center gap-4 rounded-3xl p-6 transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white no-underline"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <h3 className="text-base font-bold">Siga a SERMULHER</h3>
              <p className="text-sm opacity-90 leading-tight">Fique por dentro de nossos projetos e ações.</p>
            </div>
            <div className="shrink-0">
              <span className="material-symbols-outlined">open_in_new</span>
            </div>
          </a>
        </section>
        
        {/* Categorias */}
        <section className="mt-2 mb-6">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
            Categorias
          </h2>
          <div className="flex flex-wrap gap-3">
            {categorias.length > 0 ? (
              categorias.map((cat) => (
                <Link key={cat.id} href={`/servicos/${cat.slug || cat.id}`}>
                  <CategoryChip label={cat.nome || "Categoria"} icone={cat.icone} />
                </Link>
              ))
            ) : (
              <p className="text-sm text-[var(--text-secondary)]">
                Nenhuma categoria encontrada.
              </p>
            )}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
