import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { getTopicById, getThreadsByTopicId } from "@/lib/amar-mocks";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

function IconHeart() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 19s-6-3.7-6-8.2C6 8 7.8 6.2 10 6.2c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4.6 0 4.5-6 8.2-6 8.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function CommunityTopicPage({ params }: PageProps) {
  const { id } = await params;
  const topic = getTopicById(id);

  if (!topic) {
    notFound();
  }

  const threads = getThreadsByTopicId(id);

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
            <h1 className="text-2xl font-semibold leading-tight">{topic.title}</h1>
            <p className="text-sm leading-relaxed text-white/70">{topic.description}</p>
            <span className="text-xs font-medium text-white/50">
              {threads.length} mensagens
            </span>
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Mensagens
          </h2>
          <div className="flex flex-col gap-3">
            {threads.map((thread) => (
              <div
                key={thread.id}
                className="flex flex-col gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900">{thread.author}</span>
                      <span className="text-xs font-medium text-neutral-500">{thread.role}</span>
                    </div>
                    <span className="text-xs text-neutral-400">{thread.timestamp}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{thread.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-xs font-semibold text-neutral-500 transition hover:text-neutral-900">
                    <IconHeart />
                    <span>{thread.likes}</span>
                  </button>
                  <button className="text-xs font-semibold text-neutral-500 transition hover:text-neutral-900">
                    Responder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <h3 className="font-semibold text-neutral-900">Escrever mensagem</h3>
          <textarea
            readOnly
            placeholder="Compartilhe sua experiência ou dúvida com a comunidade..."
            className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-600 placeholder:text-neutral-400 focus:outline-none"
            rows={4}
          />
          <button className="w-full rounded-full bg-neutral-900 px-4 py-3 font-semibold text-white transition hover:bg-neutral-800">
            Publicar
          </button>
        </div>
      </main>
      <BottomNav activeItem="Comunidade" />
    </div>
  );
}
