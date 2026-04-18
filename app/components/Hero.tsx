"use client";
import React from "react";

export default function Hero() {
  const homeNav = [
    { id: "demo", icon: "🎬", title: "特色演示" },
    { id: "quests", icon: "📋", title: "近期規劃" },
    { id: "categories", icon: "📂", title: "分類入口" },
    { id: "lifestyle", icon: "☕", title: "日常道具" },
  ];

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/60 p-8 shadow-sm backdrop-blur-md sm:p-12 lg:col-span-7 xl:col-span-8">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a79da]">Lulu / Introduction / v2.0</p>
        
        <h1 className="mt-6 text-4xl font-black leading-[1.1] text-neutral-950 sm:text-5xl lg:text-[64px]">
          個人專案、學習歷程<br/><span className="text-[#7a6ccf]">與作品紀錄網站</span>
        </h1>

        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-neutral-600 font-medium">
          <p>Lulu星</p>
          <p>現職 ASE 設備工程師</p>
          <p>
            比起只把東西做完，我更喜歡把碰過的東西整理成能持續累積的樣子。
            這裡會慢慢收錄我的專案、學習、興趣與作品紀錄。
          </p>
          <p>
            專長：後端處理 / 資料整理 / Database 處理
            <br />
            興趣：剪輯 / 修圖 / 調音 / 調酒 / 咖啡 / 騎車
          </p>
          <p className="mt-2 inline-block text-[#7a6ccf] border-b border-[#eCeAf4] pb-1 font-bold">
            最喜歡的一句話：いつもきみの隣に、幸せな魔法がありますように
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/80 bg-white/40 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2 text-[#7a6ccf] font-bold text-sm">
              <span className="text-base">🧠</span> AI 整合與應用
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">
              專精 LLM 串接、TTS 與桌寵開發。獨立建構具情緒互動能力的創新系統。
            </p>
          </div>
          <div className="rounded-3xl border border-white/80 bg-white/40 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2 text-emerald-500 font-bold text-sm">
              <span className="text-base">⚡</span> 自動化腳本製作
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">
              熟練 Python 與 BAT。開發多項廠端機台自動化報表與高效率數據處理流程。
            </p>
          </div>
        </div>
      </div>

      {/* 底部 4 個純導航膠囊 */}
      <div className="relative z-10 mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {homeNav.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="flex items-center justify-center gap-2 rounded-full border border-[#d9d0f4] bg-white/80 py-3 px-4 shadow-sm transition hover:bg-[#7a6ccf] hover:text-white group/btn"
            >
              <span className="text-base group-hover/btn:scale-110 transition-transform">{item.icon}</span>
              <span className="text-[11px] font-bold uppercase tracking-widest">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}