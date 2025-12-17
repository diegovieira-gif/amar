import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
      >
        <ThemeProvider>
          <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-app)' }}>
            <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col px-4">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
