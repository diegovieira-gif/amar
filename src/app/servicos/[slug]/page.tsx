import BottomNav from "@/components/BottomNav";
import SurfaceCard from "@/components/SurfaceCard";
import TopBar from "@/components/TopBar";
import { getServiceBySlug } from "@/lib/services-mock";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-800 via-slate-900 to-neutral-950 px-6 pb-12 pt-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/70" />
          </div>
          <div className="relative flex flex-col gap-3 text-white">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {service.category}
            </span>
            <h1 className="text-2xl font-semibold leading-tight">{service.title}</h1>
            <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
          </div>
        </section>

        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <h2 className="text-lg font-semibold">Sobre o serviço</h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Este serviço oferece suporte completo com profissionais altamente qualificados, garantindo
            qualidade, agilidade e total conformidade com os mais altos padrões do mercado.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <h2 className="text-lg font-semibold">Como funciona</h2>
          <ol className="flex flex-col gap-3 text-sm leading-relaxed text-neutral-700">
            <li className="flex gap-3">
              <span className="font-semibold text-neutral-900">1.</span>
              <span>Escolha o serviço desejado e forneça os detalhes da solicitação.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-neutral-900">2.</span>
              <span>Nossa equipe analisa e seleciona o profissional mais adequado.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-neutral-900">3.</span>
              <span>Receba confirmação, acompanhe o progresso e aproveite o resultado.</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <h2 className="text-lg font-semibold">Contato e suporte</h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Dúvidas ou necessidades especiais? Nossa equipe está disponível para atendê-lo via chat,
            e-mail ou telefone de segunda a sexta, das 8h às 20h.
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-white px-6 py-4 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Começar agora
        </button>
      </main>
      <BottomNav activeItem="Serviços" />
    </div>
  );
}
