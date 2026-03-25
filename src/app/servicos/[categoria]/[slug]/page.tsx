import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ categoria: string; slug: string }>;
};

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { categoria: categoriaSlug, slug: serviceSlug } = await params;

  let category = null;
  let service = null;

  try {
    const categories = await directus.request(
      readItems("amar_categorias", {
        filter: { slug: { _eq: categoriaSlug } },
        limit: 1,
      })
    );
    category = categories[0] || null;

    if (category) {
      const services = await directus.request(
        readItems("amar_servicos", {
          filter: {
            slug: { _eq: serviceSlug },
            status: { _eq: "published" },
          },
          fields: ["*"],
          limit: 1,
        })
      );
      service = services[0] || null;
    }
  } catch (error) {
    console.error("Error fetching service details:", error);
  }

  if (!category || !service) {
    notFound();
  }

  const title = (service as any).titulo || (service as any).nome || (service as any).title || "Serviço";
  const desc = (service as any).descricao_curta || (service as any).descricao || (service as any).description || "";
  const catTitle = (category as any).nome || (category as any).title || (category as any).slug;
  const howItWorks = (service as any).documentos_necessarios || (service as any).como_funciona || (service as any).howItWorks || "Entre em contato para saber como funciona este serviço.";
  const contact = (service as any).endereco_mapa || (service as any).horario_atendimento || (service as any).contato || (service as any).contact || "Clique em continuar para prosseguir ou contatar nossa central.";

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link 
          href={`/servicos/${categoriaSlug}`} 
          className="inline-flex w-fit items-center gap-2 transition hover:opacity-80" 
          style={{ color: 'var(--text-secondary)' }}
        >
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <section className="relative overflow-hidden rounded-3xl px-6 pb-12 pt-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]" style={{ 
          background: 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-mid), var(--gradient-end))' 
        }}>
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, var(--gradient-overlay))' }} />
          </div>
          <div className="relative flex flex-col gap-3" style={{ color: 'var(--text-primary)' }}>
            <span className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
              {catTitle}
            </span>
            <h1 className="text-2xl font-semibold leading-tight">{title}</h1>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {desc}
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Sobre este serviço
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {desc}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Como funciona
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {howItWorks}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Próximos passos
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {contact}
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-full px-6 py-4 text-base font-semibold shadow-lg transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ 
            backgroundColor: 'var(--button-primary-bg)', 
            color: 'var(--button-primary-text)',
            outlineColor: 'var(--button-primary-bg)'
          }}
        >
          Continuar
        </button>
      </main>
      <BottomNav />
    </div>
  );
}
