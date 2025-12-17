import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

export default function CampanhasPage() {
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
            Campanhas para Mulheres
          </h1>
          <p className="text-sm opacity-80" style={{ color: 'var(--text-secondary)' }}>
            Conscientização, apoio e ações de impacto social.
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="mt-4 flex flex-col gap-4">
          {/* Outubro Rosa */}
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
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Outubro Rosa</h2>
                  <p className="text-sm opacity-70">Conscientização sobre câncer de mama</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Campanha de conscientização sobre a prevenção do câncer de mama. Informações sobre exames, 
                autocuidado e acesso a serviços de saúde especializados.
              </p>
            </div>
          </div>

          {/* Agosto Lilás */}
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Agosto Lilás</h2>
                  <p className="text-sm opacity-70">Fim da violência contra a mulher</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Mês de conscientização pelo fim da violência contra a mulher. Acesso a canais de denúncia, 
                suporte jurídico e psicológico, e informações sobre direitos.
              </p>
            </div>
          </div>

          {/* Em breve card */}
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l2 2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Mais campanhas em breve</h2>
                  <p className="text-sm opacity-70">Novas ações de conscientização</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Estamos preparando mais campanhas de conscientização e apoio. Fique atenta às próximas ações do AMAR.
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
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
