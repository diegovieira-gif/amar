"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import type { AmarProjeto } from "@/lib/directus";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SlideCard({
  title,
  description,
  imagemCapa,
  linkImagem,
  ctaHref,
  ctaLabel,
  onCardClick,
}: {
  title: string;
  description: string;
  imagemCapa?: string | { id: string; type: string } | null;
  linkImagem?: string | null;
  ctaHref: string;
  ctaLabel: string;
  onCardClick: () => void;
}) {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
  
  // Prioritize linkImagem (external/legacy string) over image_capa (Directus asset)
  let imageUrl = linkImagem || null;
  if (!imageUrl) {
    const imageId = typeof imagemCapa === 'object' && imagemCapa !== null ? imagemCapa.id : imagemCapa;
    imageUrl = imageId ? `${directusUrl}/assets/${imageId}` : null;
  }

  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 dark:ring-white/10 flex flex-col h-full"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="relative h-48 w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized={!!linkImagem} // Helpful if linkImagem points to external domains not in next.config
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center p-6 text-center">
            <h3 className="text-white text-2xl font-bold shadow-sm">{title}</h3>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-900 flex-1">
        {/* Mostramos o título sempre para facilitar a leitura se a imagem não carregar ou for muito escura */}
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        
        {description && <p className="text-sm opacity-80 line-clamp-2">{description}</p>}
        
        <div className="mt-auto pt-2 flex flex-wrap gap-3">
          <Link
            href={ctaHref || "#"}
            onClick={(e) => e.stopPropagation()}
            suppressHydrationWarning
            className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Saiba mais
            <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProjetosCarousel({ projetos = [] }: { projetos?: AmarProjeto[] }) {
  const router = useRouter();
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  if (!projetos || projetos.length === 0) return null;

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
            const s = swiper as unknown as {
              params: { navigation: { prevEl: Element | null; nextEl: Element | null } };
              navigation: { init: () => void; update: () => void };
            };
            s.params.navigation.prevEl = prevRef.current;
            s.params.navigation.nextEl = prevRef.current && nextRef.current ? nextRef.current : nextRef.current;
            s.navigation.init();
            s.navigation.update();
          }}
          className="!px-1 !pb-10"
        >
          {projetos.map((projeto) => {
            const isExternal = projeto.tipo_link === 'externo' || (projeto.link_destino && projeto.link_destino.startsWith('http'));
            const link = projeto.link_destino || "#";

            return (
              <SwiperSlide key={projeto.id} className="h-auto">
                <SlideCard
                  title={projeto.titulo || "Projeto"}
                  description={projeto.descricao || ""}
                  imagemCapa={projeto.imagem_capa}
                  linkImagem={projeto.link_imagem}
                  ctaHref={link}
                  ctaLabel="Saiba mais"
                  onCardClick={() => {
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
