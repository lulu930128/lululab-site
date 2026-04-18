"use client";
import { useState } from "react";
import ExperienceNav from "./components/ExperienceNav";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceModal from "./components/ExperienceModal";
import { travelData, galgameData, generalGameData, ExperienceItem } from "./data";

export default function ExperiencePage() {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  return (
    <>
      <main className="relative min-h-screen bg-[#FBFBFE] text-neutral-800">
        
        {/* 背景柔和光暈 */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
          <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
        </div>

        {/* 右側導覽組件  */}
        <ExperienceNav />

        <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-10 lg:py-16">
          
          {/* Hero Section (頭部區塊) [cite: 16, 75] */}
          <section className="mb-24 flex flex-col justify-between rounded-[2rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-[0_8px_30px_rgb(120,100,180,0.04)] backdrop-blur-md sm:p-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">
                Experience Index
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
                足跡與娛樂
                <br />
                綜合紀錄區
              </h1>
              <p className="mt-6 text-sm leading-8 text-neutral-600 sm:text-base">
                出去玩的足跡，以及宅在家的娛樂。
                長篇的旅遊日記會獨立成篇，而遊戲與作品的短評則可以直接在這裡點開查看。
              </p>
            </div>
            <a href="/" className="mt-8 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:bg-neutral-50 lg:mt-0">
              ← 回首頁
            </a>
          </section>

          <div className="space-y-32">

            {/* 1. TRAVEL 旅遊區塊 [cite: 75] */}
            <section id="travel" className="scroll-mt-32">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-500">✈️</span>
                <div>
                  <h2 className="text-3xl font-semibold text-neutral-900">Travel</h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">長篇遊記與相片集</p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {travelData.map((item) => (
                  <ExperienceCard key={item.id} item={item} type="horizontal" />
                ))}
              </div>
            </section>

            {/* 2. GALGAME 區塊 [cite: 75] */}
            <section id="galgame" className="scroll-mt-32">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-2xl text-pink-500">🌸</span>
                <div>
                  <h2 className="text-3xl font-semibold text-neutral-900">Galgame</h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">作品短評與紀錄</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {galgameData.map((item) => (
                  <ExperienceCard key={item.id} item={item} type="grid" onClick={setSelectedItem} />
                ))}
              </div>
            </section>

            {/* 3. GAME 區塊 [cite: 75] */}
            <section id="game" className="scroll-mt-32">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-500">🎮</span>
                <div>
                  <h2 className="text-3xl font-semibold text-neutral-900">Game</h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">一般遊戲與白金紀錄</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {generalGameData.map((item) => (
                  <ExperienceCard key={item.id} item={item} type="grid" onClick={setSelectedItem} />
                ))}
              </div>
            </section>

          </div>
          
          {/* Footer (頁尾區塊) [cite: 75] */}
          <footer className="mt-32 border-t border-neutral-100/60 pb-6 pt-8 text-center text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} Lulu. All rights reserved.</p>
          </footer>

        </div>
      </main>

      {/* 彈出視窗組件 [cite: 15, 40] */}
      <ExperienceModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}