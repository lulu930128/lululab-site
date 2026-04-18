"use client";

import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";
import ShowcaseSection from "./components/ShowcaseSection";
import CategorySection from "./components/CategorySection";
import LifestyleSection from "./components/LifestyleSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-neutral-800">
      <style dangerouslySetInnerHTML={{__html: `
        .grid-pattern {
          background-image: radial-gradient(circle, #e2e8f0 1.2px, transparent 1.2px);
          background-size: 30px 30px;
        }
      `}} />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-16 space-y-24">
        <section className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Hero />
            <ProfileCard />
          </div>
        </section>

        <ShowcaseSection />
        <CategorySection />
        <LifestyleSection />

        <footer className="border-t border-neutral-100/60 pb-6 pt-4 text-center text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Lulu. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}