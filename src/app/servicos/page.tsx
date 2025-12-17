"use client";

import BottomNav from "@/components/BottomNav";
import CategoryChip from "@/components/CategoryChip";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import TopBar from "@/components/TopBar";
import { groupServicesByModality, pillars, services } from "@/lib/amar-mocks";
import { useState, useMemo } from "react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(pillars[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    let filtered = services.filter((s) => s.pillarId === activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const groupedServices = useMemo(
    () => groupServicesByModality(filteredServices),
    [filteredServices]
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Serviços</h1>
          <p className="text-sm text-white/60">
            Acesso prioritário aos melhores profissionais e soluções premium
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Categorias
          </h2>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveCategory(pillar.id)}
                className={`flex-shrink-0`}
              >
                <CategoryChip
                  label={pillar.title}
                  active={activeCategory === pillar.id}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Disponíveis
          </h2>
          {groupedServices.length > 0 ? (
            <div className="flex flex-col gap-6">
              {groupedServices.map((group) => (
                <div key={group.modality} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                      {group.modality}
                    </h3>
                    <span className="text-[11px] font-medium text-white/40">
                      {group.services.length} serviço{group.services.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {group.services.map((service) => (
                      <ServiceCard
                        key={service.slug}
                        slug={service.slug}
                        title={service.title}
                        description={service.description}
                        iconKey={service.iconKey}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-8 text-center">
              <p className="text-sm text-white/60">
                Nenhum serviço encontrado para sua busca.
              </p>
            </div>
          )}
        </div>
      </main>
      <BottomNav activeItem="Serviços" />
    </div>
  );
}

