import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import ServiceListClient from "./ServiceListClient";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

type PageProps = {
  params: Promise<{ categoria: string }>;
};

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function CategoryServicesPage({ params }: PageProps) {
  const { categoria: categoriaSlug } = await params;

  let category = null;
  let services: any[] = [];
  let debugError = "";

  try {
    const categories = await directus.request(
      readItems("amar_categorias", {
        filter: { slug: { _eq: categoriaSlug } },
        limit: 1,
      })
    );
    category = categories[0] || null;
  } catch (error) {
    console.error("Error fetching category:", error);
    debugError = String((error as any).message || error);
  }

  if (category) {
    try {
      services = await directus.request(
        readItems("amar_servicos", {
          filter: {
            categoria_id: { slug: { _eq: categoriaSlug } },
            status: { _eq: "published" },
          },
          fields: ["*"],
          limit: -1,
        })
      );
    } catch (error) {
      console.error("Error fetching services:", error);
      debugError = String((error as any).message || error);
    }
  }

  if (!category) {
    return (
      <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
        <TopBar />
        <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
          <Link href="/servicos" className="inline-flex w-fit items-center gap-2 transition" style={{ color: 'var(--text-secondary)' }}>
            <IconArrowLeft />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <div className="flex flex-col gap-4 rounded-2xl border px-5 py-8 text-center" style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--accent-soft)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Categoria não encontrada.
            </p>
            {debugError && (
              <div className="mt-4 text-left text-xs text-red-500 bg-red-100 p-4 rounded-lg overflow-auto">
                <p><strong>Erro Técnico:</strong> {debugError}</p>
                <p><strong>URL Directus:</strong> {process.env.NEXT_PUBLIC_DIRECTUS_URL || 'AUSENTE'}</p>
                <p><strong>Token:</strong> {process.env.DIRECTUS_TOKEN ? 'PRESENTE' : 'AUSENTE'}</p>
              </div>
            )}
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  const categoryData = {
    id: category.id as string,
    slug: category.slug as string,
    nome: category.nome as string,
    title: category.nome as string | undefined,
    descricao: (category as any).descricao as string | undefined,
    description: (category as any).descricao as string | undefined,
  };

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/servicos" className="inline-flex w-fit items-center gap-2 transition hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            {categoryData.nome || categoryData.title || categoryData.slug}
          </h1>
          {categoryData.descricao && (
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {categoryData.descricao}
            </p>
          )}
        </div>

        <ServiceListClient category={categoryData} services={services} />
      </main>
      <BottomNav />
    </div>
  );
}
