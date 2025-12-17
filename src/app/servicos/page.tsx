import BottomNav from "@/components/BottomNav";
import CategoryChip from "@/components/CategoryChip";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import TopBar from "@/components/TopBar";
import { serviceCategories, services } from "@/lib/services-mock";

export default function ServicesPage() {
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

        <SearchBar />

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Categorias
          </h2>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
            {serviceCategories.map((cat, idx) => (
              <CategoryChip key={cat} label={cat} active={idx === 0} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Disponíveis
          </h2>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
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
      </main>
      <BottomNav activeItem="Serviços" />
    </div>
  );
}
