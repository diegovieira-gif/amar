import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

function IconCalendar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
    </svg>
  );
}

export default async function CursosPage() {
  let cursos = [];
  
  try {
    // Como a coleção foi criada pela IA, ela não tem os campos padrões de sistema 'status' ou 'date_updated'. 
    // Vamos buscar todos os cursos diretamente e ordenar pelo ID decrescente (mais recentes primeiro)
    const url = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/amar_cursos?sort=-id`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
    });
    
    if (res.ok) {
      const data = await res.json();
      cursos = data.data || [];
    }
  } catch (error) {
    console.error("Erro ao carregar cursos:", error);
  }

  // Função para formatar data (se vier do formato ISO do banco)
  const formatarData = (dataStr: string) => {
    if (!dataStr) return "Data a definir";
    try {
      // ajusta para UTC localmente ou corta a hora
      const arr = dataStr.split('-');
      if (arr.length === 3) {
        return `${arr[2]}/${arr[1]}/${arr[0]}`;
      }
      return dataStr;
    } catch {
      return dataStr;
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24 px-4 overflow-y-auto w-full max-w-lg mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Cursos e Eventos
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Acompanhe as oficinas, palestras e cursos de capacitação disponíveis.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {cursos.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed border-gray-300 mt-8">
              <span className="text-gray-400 mb-2">
                <IconCalendar />
              </span>
              <p className="text-gray-500 text-sm">Nenhum curso disponível no momento.</p>
            </div>
          ) : (
            cursos.map((curso: any) => (
              <div
                key={curso.id}
                className={`flex flex-col gap-4 rounded-2xl px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative overflow-hidden transition-all ${
                  curso.status_curso === 'concluido' ? 'opacity-70 grayscale-[0.5]' : ''
                }`}
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                {/* Badge de Status */}
                {curso.status_curso === 'concluido' ? (
                  <div className="absolute top-4 right-4 bg-gray-200 text-gray-700 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    Concluído
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    Disponível
                  </div>
                )}

                <div className="flex flex-col gap-2 pr-20">
                  <h3 className="text-lg font-semibold leading-snug" style={{ color: 'var(--surface-text-primary)' }}>
                    {curso.titulo || "Curso sem Título"}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
                    {curso.descricao || ""}
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-sm mt-2">
                  <div className="flex items-center gap-3" style={{ color: 'var(--surface-text-secondary)' }}>
                    <div className="opacity-70"><IconCalendar /></div>
                    <span>{formatarData(curso.data) || "A definir"}</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'var(--surface-text-secondary)' }}>
                    <div className="opacity-70"><IconClock /></div>
                    <span>{curso.horario || "A definir"}</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'var(--surface-text-secondary)' }}>
                    <div className="opacity-70"><IconMapPin /></div>
                    <span>{curso.local || "A definir"}</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'var(--surface-text-secondary)' }}>
                    <div className="opacity-70"><IconUsers /></div>
                    <span>{curso.vagas ? `${curso.vagas} vagas` : "Vagas ilimitadas"}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
