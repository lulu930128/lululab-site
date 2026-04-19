"use client";
import { ExperienceItem } from "../data";

interface CardProps {
  item: ExperienceItem;
  type: "horizontal" | "grid";
  onClick?: (item: ExperienceItem) => void;
}

export default function ExperienceCard({ item, type, onClick }: CardProps) {
  // 統一膠囊樣式：對應 Projects 的技術膠囊
  const capsuleStyle = "px-3 py-1 rounded-full bg-[#f4f1fb] border border-[#7a6ccf]/10 text-[10px] font-bold text-[#7a6ccf] uppercase tracking-tighter";

  if (type === "horizontal") {
    return (
      <article className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white/80 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:flex-row md:h-[380px] backdrop-blur-md">
        <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-full md:w-[45%]">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">{item.date}</p>
            <h3 className="mt-2 text-2xl font-bold text-neutral-900">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 font-medium line-clamp-3">{item.description}</p>
            
            {/* 統一風格後的旅遊標籤 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className={capsuleStyle}># {tag}</span>
              ))}
            </div>
          </div>
          <a href={item.link} className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-neutral-900 px-7 py-3 text-xs font-bold text-white transition hover:bg-neutral-800">
            READ TRAVELOGUE <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white/80 p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-xl backdrop-blur-md sm:p-6">
      <div className="relative mb-4 h-52 w-full overflow-hidden rounded-[1.5rem] bg-neutral-100">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      
      <div className="flex flex-1 flex-col px-1">
        {/* 🚀 最佳化空間分配：把開發商與評分/時數放在同一行！ */}
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a79da] truncate pr-2">
            {item.developer}
          </p>
          <div className="flex shrink-0 gap-1.5">
            <span className="rounded-md bg-neutral-50 px-2 py-0.5 text-[9px] font-bold text-neutral-500 border border-neutral-100 uppercase">⭐ {item.score}</span>
            <span className="rounded-md bg-neutral-50 px-2 py-0.5 text-[9px] font-bold text-neutral-500 border border-neutral-100 uppercase">⏱️ {item.playtime}</span>
          </div>
        </div>

        {/* 遊戲標題緊跟在下方 */}
        <h3 className="mt-2 text-xl font-bold text-neutral-900 line-clamp-1 group-hover:text-[#7a6ccf] transition-colors">
          {item.title}
        </h3>
      </div>

      {/* 按鈕間距縮小，讓整體更緊湊 */}
      <button 
        onClick={() => onClick?.(item)}
        className="mt-5 w-full rounded-2xl border border-neutral-100 bg-white py-3 text-[11px] font-bold text-neutral-700 transition hover:bg-[#f4f1fb] hover:text-[#7a6ccf] hover:border-[#7a6ccf]/20 uppercase tracking-widest shadow-sm"
      >
        View Review
      </button>
    </article>
  );
}