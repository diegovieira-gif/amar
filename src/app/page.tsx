"use client";

import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import HomeHighlightsCarousel from "@/components/home/HomeHighlightsCarousel";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-20">
        <Hero />
        {/* Highlights Carousel */}
        <div className="mt-6 mb-6">
          <HomeHighlightsCarousel />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
