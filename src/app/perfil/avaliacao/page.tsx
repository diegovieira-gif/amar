"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { useCallback, useState } from "react";
import Link from "next/link";

type IconProps = React.SVGProps<SVGSVGElement>;
function IconStar({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      aria-hidden
    >
      <polygon points="12 2 15.09 10.26 23.77 10.36 17.13 16.01 19.09 24.29 12 18.54 4.91 24.29 6.87 16.01 0.23 10.36 8.91 10.26 12 2" />
    </svg>
  );
}

export default function AvaliacaoPage() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
      }, 2000);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col items-center justify-center gap-6 px-4 pb-32 pt-24">
        {submitted && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-6 py-6 shadow-lg">
              <svg
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-semibold text-neutral-900">Obrigada pela avaliação!</span>
              <span className="text-sm text-neutral-600">Sua opinião é muito importante para nós</span>
            </div>
          </div>
        )}

        <div className="flex max-w-md flex-col gap-6 rounded-3xl bg-white px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-neutral-900">Como foi sua experiência?</h2>
            <p className="text-sm text-neutral-600">
              Sua avaliação nos ajuda a melhorar continuamente
            </p>
          </div>

          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                className="transition hover:scale-110"
              >
                <IconStar
                  className={`h-8 w-8 ${
                    star <= rating
                      ? "text-yellow-400"
                      : "text-neutral-300 hover:text-yellow-300"
                  }`}
                />
              </button>
            ))}
          </div>

          <textarea
            placeholder="Conte-nos mais sobre sua experiência (opcional)..."
            readOnly
            className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-600 placeholder:text-neutral-400 focus:outline-none"
            rows={4}
          />

          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className="w-full rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white transition disabled:opacity-50 hover:bg-neutral-800"
          >
            Enviar Avaliação
          </button>

          <Link
            href="/perfil"
            className="text-center text-xs text-neutral-500 transition hover:text-neutral-900"
          >
            Voltar ao perfil
          </Link>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
