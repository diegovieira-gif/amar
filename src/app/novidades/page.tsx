import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

export default function NovidadesPage() {
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
            Novidades no AMAR
          </h1>
          <p className="text-sm opacity-80" style={{ color: 'var(--text-secondary)' }}>
            Fique por dentro das últimas atualizações, recursos e melhorias da plataforma.
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="mt-4 flex flex-col gap-4">
          <div
            className="rounded-2xl p-6 shadow-sm ring-1"
            style={{
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--surface-text-primary)',
              borderColor: 'var(--border-soft)',
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
                  <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l2 2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Em breve</h2>
                  <p className="text-sm opacity-70">Novidades chegando em breve</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Estamos trabalhando para trazer novidades incríveis para você. Esta seção será atualizada em breve com os últimos 
                recursos, melhorias e atualizações da plataforma AMAR.
              </p>
              <div className="mt-2 pt-4 border-t" style={{ borderColor: 'var(--border-soft)' }}>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: 'var(--button-primary-bg)',
                    color: 'var(--button-primary-text)',
                  }}
                >
                  Voltar para Home
                </Link>
              </div>
            </div>
          </div>

          {/* Additional placeholder cards */}
          <div
            className="rounded-2xl p-6 shadow-sm ring-1"
            style={{
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--surface-text-primary)',
              borderColor: 'var(--border-soft)',
            }}
          >
            <h3 className="text-lg font-semibold mb-3">Próximas atualizações</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">•</span>
                <span>Novos serviços de bem-estar e capacitação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">•</span>
                <span>Melhorias na interface e experiência do usuário</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">•</span>
                <span>Notificações personalizadas e lembretes</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
