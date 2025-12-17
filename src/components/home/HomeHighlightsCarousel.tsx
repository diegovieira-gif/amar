"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles (scoped import is fine for App Router)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SlideCard({
  badge,
  title,
  description,
  ctaHref,
  ctaLabel,
  onCardClick,
}: {
  badge: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  onCardClick: () => void;
}) {
  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer rounded-2xl bg-gradient-to-br from-pink-50 to-violet-50 p-6 shadow-md ring-1 ring-black/5 dark:from-pink-900/20 dark:to-violet-900/20"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="flex flex-col gap-4">
        <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 ring-1 ring-pink-200 dark:bg-pink-900/40 dark:text-pink-200 dark:ring-pink-800">
          {badge}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          {/* Use next/link for CTA. If the route doesn't exist yet, this will 404. TODO: wire routes when available. */}
          <Link
            href={ctaHref || "#"}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center rounded-xl bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-pink-500 dark:hover:bg-pink-600"
          >
            {ctaLabel}
          </Link>
          <Link
            href={ctaHref || "#"}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center rounded-xl border border-pink-300 px-4 py-2 text-sm font-semibold text-pink-700 transition-colors hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:border-pink-700 dark:text-pink-200 dark:hover:bg-pink-900/20"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomeHighlightsCarousel() {
  const router = useRouter();
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full">
      <div className="relative">
        {/* Custom navigation for desktop only */}
        <div className="pointer-events-none absolute inset-y-1/2 -translate-y-1/2 hidden w-full items-center justify-between px-2 lg:flex">
          <button
            ref={prevRef}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-md ring-1 ring-black/10 backdrop-blur hover:bg-white lg:hover:scale-105"
            aria-label="Anterior"
          >
            {/* Left arrow icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-md ring-1 ring-black/10 backdrop-blur hover:bg-white lg:hover:scale-105"
            aria-label="Próximo"
          >
            {/* Right arrow icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Pagination, A11y, Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          loop={false}
          pagination={{ clickable: true }}
          navigation={{
            enabled: true,
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            // Bind custom navigation refs when available
            const s = swiper as unknown as {
              params: { navigation: { prevEl: Element | null; nextEl: Element | null } };
              navigation: { init: () => void; update: () => void };
            };
            s.params.navigation.prevEl = prevRef.current;
            s.params.navigation.nextEl = prevRef.current && nextRef.current ? nextRef.current : nextRef.current;
            s.navigation.init();
            s.navigation.update();
          }}
          breakpoints={{
            1024: {
              slidesPerView: 1, // keep single slide, centered
            },
          }}
          className="!px-1"
        >
          <SwiperSlide>
            <SlideCard
              badge="Novidades no AMAR"
              title="Novidades no AMAR"
              description="Descubra melhorias recentes, novos serviços e benefícios exclusivos que chegam ao app."
              ctaHref="/novidades" /* TODO: criar rota de novidades */
              ctaLabel="Explorar novidades"
              onCardClick={() => router.push("/novidades")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideCard
              badge="Campanhas para mulheres"
              title="Campanhas para mulheres"
              description="Exemplos: Outubro Rosa, Agosto Lilás e outras ações de conscientização."
              ctaHref="/campanhas" /* TODO: criar rota de campanhas */
              ctaLabel="Ver campanha"
              onCardClick={() => router.push("/campanhas")}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
