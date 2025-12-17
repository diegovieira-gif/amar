import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import SurfaceCard from "@/components/SurfaceCard";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-20">
        <Hero />
        <div className="-mt-10">
          <SurfaceCard
            title="Welcome"
            subtitle="Programa AMAR"
            body="Desbloqueie serviços de bem-estar, reservas prioritárias e benefícios pensados para acompanhar seu ritmo."
            primaryLabel="Começar agora"
            secondaryLabel="Explorar"
          />
        </div>
      </main>
      <BottomNav activeItem="Home" />
    </div>
  );
}
