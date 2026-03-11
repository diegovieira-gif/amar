import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Link from "next/link";
import CategoryChip from "@/components/CategoryChip";
import HomeHighlightsCarousel from "@/components/home/HomeHighlightsCarousel";

export const revalidate = 60;

export default async function Home() {
  const categorias = await directus.request(
    readItems("amar_categorias", {
      filter: { status: { _eq: "published" } },
      sort: ["sort"] as any,
    })
  ).catch(() => []);

  const campanhas = await directus.request(
    readItems("amar_campanhas", {
      filter: { status: { _eq: "published" } },
    })
  ).catch(() => []);

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--bg-app)]">
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
        
        {/* Categorias */}
        <section className="mt-2 mb-6">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
            Categorias
          </h2>
          <div className="flex flex-wrap gap-3">
            {categorias.length > 0 ? (
              categorias.map((cat) => (
                <Link key={cat.id} href={`/categorias/${cat.id}`}>
                  <CategoryChip label={cat.nome || "Categoria"} />
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
