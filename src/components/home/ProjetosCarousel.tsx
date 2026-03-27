"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProjetoCard({
  title,
  description,
  imagemCapa,
  tipoLink,
  linkDestino,
  onClick,
}: {
  title: string;
  description?: string;
  imagemCapa?: string | null;
  tipoLink?: string;
  linkDestino?: string | null;
  onClick: () => void;
}) {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
  const imageUrl = imagemCapa ? `${directusUrl}/assets/${imagemCapa}` : null;
  
  const isExternal = tipoLink === 'externo' || (linkDestino && linkDestino.startsWith('http'));

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 flex flex-col h-full bg-white dark:bg-gray-900"
    >
      <div className="relative h-40 w-full overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center p-6 text-center">
            <h3 className="text-white text-xl font-bold shadow-sm">{title}</h3>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold tracking-tight line-clamp-1">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col p-5 flex-1 justify-between gap-4">
        {description ? (
          <p className="text-sm opacity-80 text-[var(--text-secondary)] line-clamp-2">{description}</p>
        ) : (
          <div className="flex-1" />
        )}
        
        <div className="flex items-center gap-2">
          <Link
            href={linkDestino || "#"}
            target={isExternal ? "_blank" : undefined}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent-soft)] text-[var(--text-primary)] px-4 py-3 text-sm font-semibold transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            {isExternal ? "Acessar" : "Explorar"}
            <span className="material-symbols-outlined text-[18px]">
              {isExternal ? "open_in_new" : "arrow_forward"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface Projeto {
  id: string;
  titulo?: string;
  descricao?: string;
  imagem_capa?: string | null;
  tipo_link?: string;
  link_destino?: string | null;
}

export default function ProjetosCarousel({ projetos = [] }: { projetos?: Projeto[] }) {
  const router = useRouter();
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  if (!projetos || projetos.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-1/2 -translate-y-1/2 hidden w-full items-center justify-between px-2 lg:flex z-10">
          <button
            ref={prevRef}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-md ring-1 ring-black/10 backdrop-blur hover:bg-white lg:hover:scale-105"
            aria-label="Anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-md ring-1 ring-black/10 backdrop-blur hover:bg-white lg:hover:scale-105"
            aria-label="Próximo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Pagination, A11y, Navigation]}
          slidesPerView={1.1}
          spaceBetween={16}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            enabled: true,
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
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
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!px-1 !pb-12"
        >
          {projetos.map((projeto) => {
             const isExternal = projeto.tipo_link === 'externo' || (projeto.link_destino && projeto.link_destino.startsWith('http'));
             
             return (
              <SwiperSlide key={projeto.id} className="h-auto">
                <ProjetoCard
                  title={projeto.titulo || "Projeto"}
                  description={projeto.descricao}
                  imagemCapa={projeto.imagem_capa}
                  tipoLink={projeto.tipo_link}
                  linkDestino={projeto.link_destino}
                  onClick={() => {
                    const link = projeto.link_destino || "#";
                    if (isExternal) {
                      window.open(link, '_blank');
                    } else {
                      router.push(link);
                    }
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
