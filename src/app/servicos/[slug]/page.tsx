import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { getServiceBySlug, getPillarById } from "@/lib/amar-mocks";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pillar = getPillarById(service.pillarId);

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/servicos" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-800 via-slate-900 to-neutral-950 px-6 pb-12 pt-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/70" />
          </div>
          <div className="relative flex flex-col gap-3 text-white">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {pillar?.title || "Serviço"}
            </span>
            <h1 className="text-2xl font-semibold leading-tight">{service.title}</h1>
            <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
          </div>
        </section>

        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <h2 className="text-lg font-semibold">Sobre este serviço</h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            {service.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <h2 className="text-lg font-semibold">Como funciona</h2>
          <p className="text-sm leading-relaxed text-neutral-700">{service.howItWorks}</p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <h2 className="text-lg font-semibold">Próximos passos</h2>
          <p className="text-sm leading-relaxed text-neutral-700">{service.contact}</p>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-white px-6 py-4 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Continuar
        </button>
      </main>
      <BottomNav activeItem="Serviços" />
    </div>
  );
}
