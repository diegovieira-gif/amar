import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

export default function OuvidoriaPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col pt-16 pb-20">
        <iframe
          src="https://sosmulher-sermulher.aracaju.se.gov.br/"
          title="Assistente SERMULHER Aracaju"
          className="w-full h-full border-none flex-1"
          allow="microphone; camera"
        />
      </main>
      <BottomNav />
    </div>
  );
}
