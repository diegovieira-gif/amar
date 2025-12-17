import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { assistanceServices } from "@/lib/amar-mocks";
import Link from "next/link";

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getIconComponent(iconKey: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "shield-alert": (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2s-8 3.5-8 9.5c0 6 8 8.5 8 8.5s8-2.5 8-8.5c0-6-8-9.5-8-9.5z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heart: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19s-6-3.7-6-8.2C6 8 7.8 6.2 10 6.2c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4.6 0 4.5-6 8.2-6 8.2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    package: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return iconMap[iconKey] || iconMap.heart;
}

const timeline = [
  { step: "1", label: "Solicitação", description: "Você solicita o apoio" },
  { step: "2", label: "Avaliação", description: "Análise de sua situação" },
  { step: "3", label: "Aprovação", description: "Confirmação do benefício" },
  { step: "4", label: "Entrega", description: "Recebimento do apoio" },
];

export default function AssistenciaDeliveryPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/menu" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Assistência & Delivery Solidário</h1>
          <p className="text-sm text-white/60">
            Apoio integral e entrega de benefícios
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {assistanceServices.map((service) => (
            <div key={service.id} className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 text-white/80">
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-sm text-white/60">{service.description}</p>
                <button className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
                  Solicitar apoio
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-neutral-900">Acompanhamento</h2>
              <p className="text-sm text-neutral-600">Como funciona o processo</p>
            </div>

            <div className="flex flex-col gap-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    {idx < timeline.length - 1 && (
                      <div className="h-8 w-0.5 bg-neutral-200 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-neutral-900">{item.label}</p>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Informações
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Documentos Necessários</p>
              <ul className="text-xs text-white/60 space-y-1 list-disc list-inside">
                <li>CPF</li>
                <li>Identidade</li>
                <li>Comprovante de renda</li>
                <li>Comprovante de residência</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Prazos</p>
              <p className="text-xs text-white/60">Análise: até 5 dias úteis | Entrega: até 10 dias</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav activeItem="Menu" />
    </div>
  );
}
