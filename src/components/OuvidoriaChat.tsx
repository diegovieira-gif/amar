"use client";

import { useState, useRef, useEffect } from "react";
import { Message } from "ai/react";

export default function OuvidoriaChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: "Olá! Como o AMAR pode ajudar você hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Erro ao consultar o assistente.");
      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      
      const assistantId = Date.now().toString();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantContent += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId ? { ...msg, content: assistantContent } : msg
          )
        );
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "assistant", content: "Desculpe, ocorreu um erro ao processar sua dúvida." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-sm mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-pink-600 text-white flex gap-3 items-center shadow-sm">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
          🤖
        </div>
        <div>
          <h3 className="font-semibold text-sm">Ouvidoria Inteligente</h3>
          <p className="text-xs text-pink-100">Disponível 24h</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col max-w-[85%] ${
              m.role === "user" ? "ml-auto" : "mr-auto"
            }`}
          >
            <div
              className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                m.role === "user"
                  ? "bg-violet-600 text-white rounded-br-sm"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-bl-sm"
              }`}
            >
              {m.content}
            </div>
            <span
              className={`text-[10px] text-zinc-400 mt-1 ${
                m.role === "user" ? "text-right" : "text-left"
              }`}
            >
              {m.role === "user" ? "Você" : "Assistente"}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-1 items-center mr-auto bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl rounded-bl-sm text-zinc-500 text-sm">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-zinc-400 shadow-sm border border-zinc-200 dark:border-zinc-700"
            value={input}
            placeholder="Digite sua dúvida..."
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-11 h-11 flex-shrink-0 bg-violet-600 text-white rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <svg
              className="w-5 h-5 -mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 21L23 12 2 3v7l15 2-15 2v7z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
