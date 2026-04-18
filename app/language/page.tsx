"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LanguagePage() {
  // 模擬資料 (之後可拆至 data.ts)
  const jpNotes = [
    { id: "jp1", category: "Gaming Expressions", title: "RPG 常用戰鬥術語", desc: "整理《櫻之詩》中出現的高級修辭與日常戰鬥對話。", tags: ["櫻之詩", "語感養成"] },
    { id: "jp2", category: "Grammar", title: "N3 使役被動型態", desc: "將複雜的變形整理成類似程式 logic 的判斷流程圖。", tags: ["N3 文法", "結構化筆記"] },
    { id: "jp3", category: "Daily", title: "秋葉原電器街必備名詞", desc: "設備工程師視角的專業電子零件日文對照。", tags: ["生活日文", "專業詞彙"] },
  ];

  const enNotes = [
    { id: "en1", title: "Datasheet Reading", desc: "半導體機台手冊常用縮寫與動詞解析。", tags: ["Technical", "ASE Focus"] },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-neutral-800">
      {/* 裝飾性網格背景 */}
      <style dangerouslySetInnerHTML={{ __html: `.grid-pattern { background-image: radial-gradient(circle, #e2e8f0 1.2px, transparent 1.2px); background-size: 30px 30px; }` }} />
      
      {/* 背景柔和光暈 */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-16 space-y-16">
        
        {/* --- 1. Hero Section --- */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/60 p-8 shadow-sm backdrop-blur-md sm:p-12 lg:col-span-8">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a79da]">Language Learning / v1.0</p>
              <h1 className="mt-6 text-4xl font-black leading-[1.1] text-neutral-950 sm:text-5xl lg:text-[64px]">
                語言學習、<br/><span className="text-[#7a6ccf]">筆記與表達</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 font-medium">
                不只是單字的累積，而是思維方式的轉換。這裡紀錄了我從日系遊戲與開發工作中整理出的語言邏輯，致力於將學習過程「系統化」。
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#d9d0f4] bg-white px-8 py-3 text-xs font-bold text-[#7a6ccf] transition hover:bg-neutral-50 uppercase tracking-widest">
                ← Back Home
              </Link>
            </div>
          </div>

          {/* --- 2. Learning Dashboard (右側小面板) --- */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="rounded-[2.5rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-sm backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a6ccf]">Learning Status</p>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                {/* 日文進度 */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-sm font-bold text-neutral-800">Japanese (N3 Focus)</h3>
                    <span className="text-[10px] font-mono text-neutral-400">65% COMPLETED</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7a6ccf] to-indigo-400 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                {/* 英文進度 */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-sm font-bold text-neutral-800">Technical English</h3>
                    <span className="text-[10px] font-mono text-neutral-400">ACTIVE</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-200 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-100">
                <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Daily Goals</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-[9px] font-bold text-emerald-600 uppercase italic"># Anki_Streak_12d</span>
                  <span className="px-3 py-1 rounded-lg bg-[#f4f1fb] border border-[#7a6ccf]/10 text-[9px] font-bold text-[#7a6ccf] uppercase"># Reading_Session</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. Content Sections --- */}
        <section className="grid grid-cols-1 gap-12">
          
          {/* 日文區塊 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f1fb] text-lg">🇯🇵</span>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Japanese Core Notes</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jpNotes.map((note) => (
                <div key={note.id} className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#a89cd9] mb-1">{note.category}</p>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#7a6ccf] transition-colors">{note.title}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-500 font-medium">
                      {note.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {note.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-[#f4f1fb] text-[9px] font-bold text-[#7a6ccf] uppercase"># {tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 英文區塊 */}
          <div className="pt-8 border-t border-neutral-100">
            <div className="flex items-center gap-4 mb-8 opacity-60">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-lg grayscale">🇺🇸</span>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight italic text-neutral-400 uppercase">English Supplement</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 opacity-80">
              {enNotes.map((note) => (
                <div key={note.id} className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-dashed border-neutral-200 bg-white/50 p-7 shadow-sm transition-all hover:bg-white hover:border-solid hover:border-[#eef3ff]">
                   <div>
                    <h3 className="text-lg font-bold text-neutral-700">{note.title}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-400 font-medium">{note.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* --- Footer --- */}
        <footer className="border-t border-neutral-100/60 pb-6 pt-12 text-center text-xs text-neutral-400 font-mono tracking-widest">
          SYSTEM_LOG: LANGUAGE_MOD_LOADED // 2026.04.18
        </footer>

      </div>
    </main>
  );
}