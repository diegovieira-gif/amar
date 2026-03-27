import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CommunityTopicPage({ params }: PageProps) {
  await params;
  notFound();

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
            Este detalhe foi descontinuado.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href="/comunidade"
            className="text-sm font-medium underline"
            style={{ color: "var(--text-secondary)" }}
          >
            Voltar para Comunidade
          </Link>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
