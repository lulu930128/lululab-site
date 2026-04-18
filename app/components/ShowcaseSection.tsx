"use client";
import { currentFocus } from "../data";

export default function ShowcaseSection() {
  return (
    <section id="demo" className="flex flex-col gap-6 scroll-mt-24">
      <div className="px-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Showcase & Focus</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-900">特色展示與任務規劃</h2>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white/80 p-8 shadow-sm md:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a79da]">Featured Showcase</p>
          <h3 className="mb-6 mt-3 text-2xl font-bold text-neutral-900">AI 桌寵演示</h3>
          <div className="aspect-video h-full w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/5yCGeQQ-fpo" title="deskpet demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </div>

      {/* 近期規劃錨點 */}
      <div id="quests" className="flex flex-col rounded-[2.5rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-sm backdrop-blur-md sm:p-10 scroll-mt-24">
        <div className="mb-8 flex items-center justify-between">
          <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#7a6ccf]">Recent Focus & Quests</p><h2 className="mt-2 text-3xl font-bold text-neutral-950">近期規劃與任務</h2></div>
          <span className="mb-1 text-[11px] font-black tracking-widest text-neutral-300 uppercase font-mono">Quest Log // Active</span>
        </div>
        
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {currentFocus.map((quest) => (
            <div key={quest.id} className="group relative flex h-[160px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#eCeAf4] bg-white/60 p-6 shadow-sm transition-all duration-500 hover:bg-white hover:shadow-lg">
              <div className="relative z-10 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-2xl shadow-inner transition-colors group-hover:bg-[#f4f1fb]">{quest.icon}</span>
                <div><p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Main Quest</p><h4 className="text-sm font-semibold text-neutral-900">{quest.title}</h4></div>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-neutral-500 transition-transform duration-500 group-hover:translate-y-6">
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#f4f1fb] ring-1 ring-neutral-100"><div className="h-full bg-[#7a6ccf]" style={{ width: `${quest.progress}%` }}></div></div>
                <span className="shrink-0 rounded-md px-2 py-1 bg-[#f4f1fb] text-[#6d60c7] font-bold text-[10px]">In Progress</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"><p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Status</p><p className="mt-0.5 text-[11px] font-medium text-neutral-700">{quest.status}</p></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-neutral-100/80 pt-8 md:grid-cols-2">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6ccf]">Quest Notes</p><h3 className="mb-4 mt-2 text-lg font-semibold text-neutral-950">規劃備註</h3><div className="grid gap-3"><div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-4 text-xs font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50">目前先以桌寵展示為主，之後再補上結構、功能與版本差異。</div><div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-4 text-xs font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50">後續可補：系統架構、使用情境、展示截圖、開發紀錄。</div></div></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6ccf]">Site Intro</p><h3 className="mb-4 mt-2 text-lg font-semibold text-neutral-950">這裡會慢慢長出更多內容</h3><p className="text-sm leading-relaxed text-neutral-600">首頁先作為入口，之後會再分出 Projects、Language、Experience、About 等獨立子頁，把專案、學習、興趣與記錄慢慢整理起來。</p></div>
        </div>
      </div>
    </section>
  );
}