"use client";
import { currentFocus } from "../data";

export default function ShowcaseSection() {
  return (
    <section id="demo" className="flex flex-col gap-6 scroll-mt-24">
      <div className="px-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Featured Work</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-900">精選展示</h2>
      </div>

      <div className="overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white/80 p-8 shadow-sm md:p-10">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a79da]">Featured Showcase</p>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900 md:text-[2rem]">AI 桌寵互動展示</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-[15px]">
              把 LLM、TTS 與角色互動整合成桌面 AI 應用，是我目前持續投入的代表項目之一
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {[
              "LLM Integration",
              "TTS",
              "Character Interaction",
              "Desktop App",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e8e3fb] bg-[#f7f4ff] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[#7566cf]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/5yCGeQQ-fpo"
            title="deskpet demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* 近期規劃錨點 */}
      <div id="quests" className="flex flex-col rounded-[2.5rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-sm backdrop-blur-md sm:p-10 scroll-mt-24">
        <div className="mb-8 flex items-center justify-between">
          <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#7a6ccf]">CURRENT FOCUS</p><h2 className="mt-2 text-3xl font-bold text-neutral-950">近期規劃</h2></div>
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
