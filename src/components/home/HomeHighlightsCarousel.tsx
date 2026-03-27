"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Swiper styles (scoped import is fine for App Router)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface DirectusFile {
  id: string;
  type: string;
}

function SlideCard({
  badge,
  title,
  description,
  imagemCapa,
  urlInstagram,
  ctaHref,
  ctaLabel,
  onCardClick,
}: {
  badge: string;
  title: string;
  description: string;
  imagemCapa?: string | DirectusFile | null;
  urlInstagram?: string | null;
  ctaHref: string;
  ctaLabel: string;
  onCardClick: () => void;
}) {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
  
  // Extrair ID e se é vídeo ou não
  const fileId = typeof imagemCapa === 'object' ? imagemCapa?.id : imagemCapa;
  const isVideo = typeof imagemCapa === 'object' && imagemCapa?.type?.startsWith('video/');
  const imageUrl = fileId ? `${directusUrl}/assets/${fileId}` : null;

  // Renderizar Iframe se não houver imagemCapa mas houver Instagram
  const renderMedia = () => {
    if (imageUrl) {
      if (isVideo) {
        return (
          <video
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        );
      }
      return (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      );
    }

    if (urlInstagram) {
      const embedUrl = urlInstagram.endsWith('/') ? `${urlInstagram}embed/` : `${urlInstagram}/embed/`;
      return (
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-none pointer-events-none"
          {...({ allowtransparency: "true" } as any)}
          allow="encrypted-media"
          loading="lazy"
          title="Instagram Preview"
        ></iframe>
      );
    }

    return (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-violet-500 flex items-center justify-center p-6 text-center">
        <h3 className="text-white text-2xl font-bold shadow-sm">{title}</h3>
      </div>
    );
  };

  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10 flex flex-col h-full bg-[#0a0f1d]"
    >
      <div className="relative h-72 w-full overflow-hidden">
        {renderMedia()}
      </div>

      <div className="flex items-center justify-between p-5 bg-[#0a0f1d]">
        {title && (
          <h3 className="text-lg font-bold text-white tracking-tight line-clamp-1 flex-1 mr-4">
            {title}
          </h3>
        )}
        
        <Link
          href={ctaHref || "#"}
          target={ctaHref.startsWith('http') ? "_blank" : undefined}
          onClick={(e) => e.stopPropagation()}
          suppressHydrationWarning
          className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 whitespace-nowrap"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}

interface Campanha {
  id: string;
  titulo?: string;
  imagem_capa?: string | DirectusFile | null;
  link_destino?: string | null;
  url_instagram?: string | null;
}

export default function HomeHighlightsCarousel({ campanhas = [] }: { campanhas?: Campanha[] }) {
  const router = useRouter();
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full">
      <div className="relative">
        {/* Custom navigation for desktop only */}
        <div className="pointer-events-none absolute inset-y-1/2 -translate-y-1/2 hidden w-full items-center justify-between px-2 lg:flex z-10">
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
          className="!px-1 !pb-10" // added padding bottom for pagination bullets
        >
          {campanhas?.length > 0 ? (
            campanhas.map((campanha) => {
              const finalLink = campanha.url_instagram || campanha.link_destino || "#";
              const isExternal = finalLink.startsWith('http');

              return (
              <SwiperSlide key={campanha.id}>
                <SlideCard
                  badge="Destaque"
                  title={campanha.titulo || "Campanha"}
                  description=""
                  imagemCapa={campanha.imagem_capa}
                  urlInstagram={campanha.url_instagram}
                  ctaHref={finalLink}
                  ctaLabel="Explorar"
                  onCardClick={() => {
                    if (isExternal) {
                      window.open(finalLink, '_blank');
                    } else {
                      router.push(finalLink);
                    }
                  }}
                />
              </SwiperSlide>
            )})
          ) : (
            <SwiperSlide>
              <SlideCard
                badge="Aviso"
                title="Nenhuma campanha ativa"
                description=""
                imagemCapa={null}
                ctaHref="#"
                ctaLabel="Voltar"
                onCardClick={() => {}}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
