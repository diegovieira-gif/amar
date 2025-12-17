import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMAR",
  description: "Experiência premium AMAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 text-white antialiased`}
      >
        <div className="min-h-screen bg-neutral-950">
          <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
