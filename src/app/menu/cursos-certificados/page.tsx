"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CursosCertificadosPage() {
  const availableCourses = courses.filter(c => c.status === "available");
  const soonCourses = courses.filter(c => c.status === "soon");

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/menu" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Cursos e Certificados</h1>
          <p className="text-sm text-white/60">
            Capacitação profissional e certificação
          </p>
        </div>

        <div className="rounded-3xl bg-white px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-neutral-900">Meus Certificados</h2>
              <p className="text-sm text-neutral-600">Acesse seus certificados já obtidos</p>
            </div>
            <button className="w-full rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Ver meus certificados
            </button>
          </div>
        </div>

        {availableCourses.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
                Disponíveis Agora
              </h2>
            </div>

            {availableCourses.map((course) => (
              <div key={course.id} className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-white pr-2">{course.title}</h3>
                    <div className="flex-shrink-0 rounded-full bg-green-500/20 px-2 py-1">
                      <span className="text-xs font-semibold text-green-300">Disponível</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/60">{course.description}</p>
                  <div className="flex items-center gap-1 text-xs text-white/50">
                    <IconClock />
                    <span>{course.duration}</span>
                  </div>
                  <button className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
                    Inscrever-se
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {soonCourses.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
                Em Breve
              </h2>
            </div>

            {soonCourses.map((course) => (
              <div key={course.id} className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 opacity-60">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-white pr-2">{course.title}</h3>
                    <div className="flex-shrink-0 rounded-full bg-blue-500/20 px-2 py-1">
                      <span className="text-xs font-semibold text-blue-300">Em Breve</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/60">{course.description}</p>
                  <div className="flex items-center gap-1 text-xs text-white/50">
                    <IconClock />
                    <span>{course.duration}</span>
                  </div>
                  <button className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                    Notificar-me
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
