"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { currentFocusData } from "../data";

type FocusItem = (typeof currentFocusData)[number];

// --- 🖼️ 圖片封面組件 (支援漸層骨架屏與錯誤處理) ---
function FocusCover({ src, alt }: { src?: string; alt: string }) {
  const [hasError, setHasError] = useState(!src);
  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f7f4ff] to-[#f2effb]">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-white/70 text-2xl shadow-sm text-neutral-300">🖼️</div>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#b1aacd]">No Image Provided</p>
        </div>
      </div>
    );
  }
  return <Image
      src={src!}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 900px"
      className="object-cover"
      onError={() => setHasError(true)}
    />
}

export default function CurrentFocusSection() {
  const [activeFocus, setActiveFocus] = useState<FocusItem | null>(null);

  // 彈窗開啟時鎖定背景滾動
  useEffect(() => {
    if (activeFocus) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [activeFocus]);

  return (
    <>
      <section id="quests" className="flex flex-col gap-10 scroll-mt-24">
        {/* 極細網格裝飾樣式 */}
        <style dangerouslySetInnerHTML={{__html: `.grid-pattern-sm { background-image: radial-gradient(circle, #e2e8f0 0.8px, transparent 0.8px); background-size: 24px 24px; }`}} />

        <div className="flex flex-col gap-2 px-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#7a6ccf]">CURRENT FOCUS</p>
            <h2 className="mt-2 text-4xl font-black text-neutral-950 tracking-tight">近期規劃</h2>
          </div>
          <span className="mb-1 text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-300">{currentFocusData.length} ACTIVE TRACKS</span>
        </div>

        {/* --- 主任務網格 --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {currentFocusData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveFocus(item)}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[2.5rem] border border-[#eef3ff] bg-white p-7 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#7a6ccf]/20 hover:shadow-xl"
            >
              <div className="absolute inset-0 grid-pattern-sm opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#faf8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-4 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white bg-[#fbfbfe] text-3xl shadow-inner transition-all group-hover:bg-[#f7f4ff] group-hover:scale-110">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a89cd9]">Current Track</p>
                  <h4 className="mt-1 text-lg font-bold leading-tight text-neutral-900 group-hover:text-[#7a6ccf] transition-colors">{item.title}</h4>
                </div>
              </div>

              <p className="relative z-10 mt-6 text-sm leading-relaxed text-neutral-500 font-medium line-clamp-2">{item.summary}</p>

              <div className="relative z-10 mt-auto pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f4f1fb] ring-1 ring-neutral-100">
                    <div className="h-full bg-gradient-to-r from-[#7a6ccf] to-indigo-400 transition-all duration-1000" style={{ width: `${item.progress}%` }} />
                  </div>
                  <span className="shrink-0 rounded-full border border-[#7a6ccf]/10 bg-[#f4f1fb] px-2 py-0.5 text-[10px] font-bold text-[#7a6ccf] uppercase">{item.progress}%</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#7a6ccf] opacity-0 group-hover:opacity-100 transition-all">
                  <span>查看詳情</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* --- 🚀 詳情彈窗 --- */}
      <AnimatePresence>
        {activeFocus && (
          <div className="fixed top-0 left-0 z-[100] flex h-[100dvh] w-[100dvw] items-center justify-center bg-neutral-950/40 p-4 backdrop-blur-md sm:p-6">
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 h-full w-full" onClick={() => setActiveFocus(null)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
              style={{ maxHeight: '90dvh' }}
            >
              <button onClick={() => setActiveFocus(null)} className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg text-neutral-600 shadow-sm backdrop-blur-sm transition hover:bg-neutral-900 hover:text-white sm:right-6 sm:top-6">✕</button>

              <div className="relative h-48 w-full shrink-0 bg-neutral-100 sm:h-64">
                <FocusCover src={activeFocus.image} alt={activeFocus.title} />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>

              <div className="relative z-10 -mt-8 rounded-t-[2.5rem] bg-white px-8 pb-10 pt-6 md:px-10 flex-1 overflow-y-auto scrollbar-hide">
                <span className="inline-flex rounded-full bg-[#f4f1fb] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7a6ccf]">
                  Focus Record
                </span>

                <h3 className="mt-4 text-[2rem] font-bold tracking-tight text-neutral-900 md:text-[2.5rem]">
                  {activeFocus.title}
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-[#eceaf4] bg-[#faf8ff] p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#aaa3cf]">
                      Current Stage
                    </p>
                    <p className="mt-2 text-2xl font-bold text-neutral-900">
                      {activeFocus.stage}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-[#eceaf4] bg-[#faf8ff] p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#aaa3cf]">
                      Progress
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-2xl font-bold text-neutral-900">
                        {activeFocus.progress}%
                      </span>

                      <div className="h-2 w-full overflow-hidden rounded-full bg-[#ece8f7]">
                        <div
                          className="h-full rounded-full bg-[#7a6ccf]"
                          style={{ width: `${activeFocus.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="mt-8 space-y-4 border-t border-neutral-100/60 pt-8">
                    <div className="rounded-[1.75rem] border border-[#efedf7] bg-[#fcfbff] px-6 py-5 sm:px-7 sm:py-6">
                      <h3 className="text-[10px] font-semibold uppercase tracking-[0.30em] text-[#b8b1d8]">
                        Current
                      </h3>
                      <p className="mt-3 text-[16px] leading-8 font-normal text-[#666a73]">
                        {activeFocus.current}
                      </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-[#efedf7] bg-[#fcfbff] px-6 py-5 sm:px-7 sm:py-6">
                      <h3 className="text-[10px] font-semibold uppercase tracking-[0.30em] text-[#b8b1d8]">
                        Next Step
                      </h3>
                      <p className="mt-3 text-[16px] leading-8 font-normal text-[#666a73]">
                        {activeFocus.next}
                      </p>
                    </div>
                  </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}