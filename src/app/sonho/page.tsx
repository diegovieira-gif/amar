"use client";

import React, { useState, useRef, useEffect } from "react";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

export default function SonhoPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [step, setStep] = useState<"intro" | "recording" | "form" | "success">("intro");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpf: "",
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        setStep("form");
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setStep("recording");
      setTimeLeft(60);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      console.error("Erro ao acessar microfone:", err);
      alert("Não foi possível acessar o microfone. Verifique as permissões.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioBlob) return;

    setLoading(true);
    try {
      // Usar a rota da API local para evitar problemas de CORS e ocultar o token
      const apiFormData = new FormData();
      apiFormData.append("file", audioBlob, "sonho.webm");
      apiFormData.append("nome", formData.nome);
      apiFormData.append("telefone", formData.telefone);
      apiFormData.append("cpf", formData.cpf);

      const response = await fetch("/api/sonho", {
        method: "POST",
        body: apiFormData,
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar o sonho no servidor interno");
      }

      setStep("success");
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao enviar seu sonho. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--bg-app)]">
      <TopBar />
      
      <main className="relative flex flex-1 flex-col items-center justify-center gap-8 pb-32 pt-24 px-6">
        {step === "intro" && (
          <div className="flex flex-col items-center text-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="h-24 w-24 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shadow-inner">
              <span className="material-symbols-outlined text-5xl">stars</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-[var(--text-primary)]">Qual é o seu sonho?</h1>
              <p className="text-[var(--text-secondary)] max-w-xs mx-auto">
                Compartilhe conosco o seu desejo para o futuro. Sua voz é o primeiro passo para grandes mudanças.
              </p>
            </div>
            <button
              onClick={startRecording}
              className="mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-200 transition-transform hover:scale-110 active:scale-95"
            >
              <span className="material-symbols-outlined text-4xl">mic</span>
            </button>
            <span className="text-sm font-medium text-rose-500 animate-pulse">Toque para gravar</span>
          </div>
        )}

        {step === "recording" && (
          <div className="flex flex-col items-center text-center gap-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-40 w-40 animate-ping rounded-full bg-rose-500/20" />
              <div className="absolute h-32 w-32 animate-pulse rounded-full bg-rose-500/40" />
              <div className="h-24 w-24 rounded-full bg-rose-500 flex items-center justify-center text-white relative z-10 shadow-lg">
                <span className="text-2xl font-bold">{timeLeft}s</span>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Gravando seu sonho...</h2>
              <p className="text-[var(--text-secondary)]">Fale com o coração. O tempo máximo é de 60 segundos.</p>
            </div>
            <button
              onClick={stopRecording}
              className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-white font-bold shadow-lg transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined">stop</span>
              Parar Gravação
            </button>
          </div>
        )}

        {step === "form" && (
          <div className="w-full max-w-md flex flex-col gap-6 animate-in fade-in duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Quase lá!</h2>
              <p className="text-[var(--text-secondary)]">Áudio gravado com sucesso. Preencha seus dados para finalizarmos.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold ml-1 text-[var(--text-secondary)]">Nome Completo</label>
                <input
                  required
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border bg-white/50 px-5 py-4 outline-none focus:ring-2 focus:ring-rose-500/20 transition-all border-[var(--border-soft)]"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold ml-1 text-[var(--text-secondary)]">Telefone</label>
                  <input
                    required
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border bg-white/50 px-5 py-4 outline-none focus:ring-2 focus:ring-rose-500/20 transition-all border-[var(--border-soft)]"
                    placeholder="(79) 00000-0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold ml-1 text-[var(--text-secondary)]">CPF</label>
                  <input
                    required
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border bg-white/50 px-5 py-4 outline-none focus:ring-2 focus:ring-rose-500/20 transition-all border-[var(--border-soft)]"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex h-16 items-center justify-center rounded-2xl bg-rose-500 font-bold text-white shadow-lg shadow-rose-200 transition-all disabled:opacity-50 active:scale-95"
              >
                {loading ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  "Enviar meu Sonho"
                )}
              </button>
              <button
                type="button"
                onClick={() => setStep("intro")}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-rose-500 transition-colors"
              >
                Gravar novamente
              </button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center text-center gap-6 animate-in zoom-in duration-500">
            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Sonho Enviado!</h2>
              <p className="text-[var(--text-secondary)]">Obrigada por compartilhar sua história conosco. Juntas somos mais fortes.</p>
            </div>
            <button
              onClick={() => window.location.href = "/"}
              className="mt-4 rounded-full bg-slate-100 px-8 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-200"
            >
              Voltar ao Início
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
