"use client";

import { useState } from "react";

export default function ShowcaseSection() {
  return (
    <section id="demo" className="flex flex-col gap-6 scroll-mt-24">
      {/* 精選展示 */}
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
              把 LLM、TTS 與角色互動整合成桌面 AI 應用，是我目前持續投入的代表項目之一。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {["LLM Integration", "TTS", "Character Interaction", "Desktop App"].map((tag) => (
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
    </section>
  );
}