import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

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
  let debugError = "";

  try {
    const catUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/amar_categorias?filter[slug][_eq]=${categoriaSlug}&limit=1`;
    const catRes = await fetch(catUrl, {
      headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
    });
    if (!catRes.ok) throw new Error(`Category fetch failed: ${catRes.statusText}`);
    const catData = await catRes.json();
    category = catData.data?.[0] || null;

    if (category) {
      const srvUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/amar_servicos?filter[slug][_eq]=${serviceSlug}&filter[status][_eq]=published&fields=*&limit=1`;
      const srvRes = await fetch(srvUrl, {
        headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
      });
      if (!srvRes.ok) throw new Error(`Service fetch failed: ${srvRes.statusText}`);
      const srvData = await srvRes.json();
      service = srvData.data?.[0] || null;
    }
  } catch (error) {
    console.error("Error fetching service details:", error);
    debugError = String((error as any).message || error);
  }

  if (!category || !service) {
    if (debugError) {
      return (
        <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
          <TopBar />
          <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24 px-4">
            <Link href={`/servicos/${categoriaSlug}`} className="inline-flex w-fit items-center gap-2 transition" style={{ color: 'var(--text-secondary)' }}>
              <IconArrowLeft />
              <span className="text-sm font-medium">Voltar</span>
            </Link>
            <div className="flex flex-col gap-4 rounded-2xl border px-5 py-8 text-center" style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--accent-soft)' }}>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Serviço não encontrado.
              </p>
              <div className="mt-4 text-left text-xs text-red-500 bg-red-100 p-4 rounded-lg overflow-auto">
                <p><strong>Erro Técnico:</strong> {debugError}</p>
                <p><strong>URL Directus:</strong> {process.env.NEXT_PUBLIC_DIRECTUS_URL || 'AUSENTE'}</p>
                <p><strong>Token:</strong> {process.env.DIRECTUS_TOKEN ? 'PRESENTE' : 'AUSENTE'}</p>
              </div>
            </div>
          </main>
          <BottomNav />
        </div>
      );
    }
    notFound();
  }

  const title = (service as any).titulo || (service as any).nome || "Serviço";
  const desc = (service as any).descricao_curta || (service as any).descricao || "";
  const sobre = (service as any).sobre || desc;
  const catTitle = (category as any).nome || (category as any).slug;
  const documentos = (service as any).documentos_necessarios || "Nenhum documento específico informado.";
  const horario = (service as any).horario_atendimento || "Horário não informado.";
  const endereco = (service as any).endereco_mapa || "Endereço não informado.";
  const linkAcao = (service as any).link_externo_acao || null;

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
          <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--surface-text-secondary)' }}>
            {sobre}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Documentos Necessários
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {documentos}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Horário de Atendimento
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {horario}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Endereço
          </h2>
          {endereco.includes('<iframe') ? (
            <div 
              className="w-full overflow-hidden rounded-2xl [&_iframe]:w-full [&_iframe]:h-[250px] [&_iframe]:border-0"
              dangerouslySetInnerHTML={{ __html: endereco }}
            />
          ) : endereco.startsWith('http') ? (
            <div className="flex flex-col gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--bg-app)' }}>
                <iframe 
                  width="100%" 
                  height="220" 
                  style={{ border: 0, display: 'block' }}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`}
                  allowFullScreen
                  title="Mapa"
                />
              </div>
              <a
                href={endereco}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold transition-all active:scale-[0.98] shadow-sm"
                style={{ 
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-600 shadow-sm border border-rose-100">
                  <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>Como chegar</span>
              </a>
            </div>
          ) : (
            <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
              {endereco}
            </p>
          )}
        </div>

        {linkAcao ? (
          <a
            href={linkAcao}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full rounded-full px-6 py-4 text-base font-semibold shadow-lg transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ 
              backgroundColor: 'var(--button-primary-bg)', 
              color: 'var(--button-primary-text)',
              outlineColor: 'var(--button-primary-bg)'
            }}
          >
            Continuar
          </a>
        ) : (
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
        )}
      </main>
      <BottomNav />
    </div>
  );
}
