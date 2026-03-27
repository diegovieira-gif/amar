import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export default function ComunidadePage() {
  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--bg-app)" }}
    >
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1
            className="text-3xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Comunidade
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Este módulo foi descontinuado e não utiliza mais collections
            dedicadas.
          </p>
        </div>

        <div
          className="flex flex-col gap-4 rounded-2xl border px-5 py-8 text-center"
          style={{
            borderColor: "var(--border-soft)",
            backgroundColor: "var(--accent-soft)",
          }}
        >
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            A seção de comunidade foi removida do fluxo de dados.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
            >
              Ir para Início
            </Link>
            <Link
              href="/servicos"
              className="rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                borderColor: "var(--border-soft)",
                color: "var(--text-primary)",
              }}
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
