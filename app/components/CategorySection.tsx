"use client";
import { categories } from "../data";
import Link from "next/link";

export default function CategorySection() {
  return (
    <section id="categories" className="flex flex-col gap-8 scroll-mt-24">
      <div className="px-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a79da]">MAIN CATEGORIES</p>
        <h2 className="mt-2 text-3xl font-black text-neutral-900 tracking-tight">分類入口</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {categories.map((cat, index) => (
          <Link
            key={cat.title}
            href={cat.href}
            className={`group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
          >
            {/* 背景圖片處理：增加漸層遮罩確保文字清晰度 */}
            <div className="absolute inset-0 z-0">
              <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 group-hover:via-white/70 transition-colors duration-500" />
            </div>

            {/* 標籤區：對齊 Projects 膠囊風格 */}
            <div className="relative z-10 p-8 pb-0">
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#7a6ccf]/10 bg-white/60 px-3 py-1 text-[9px] font-bold text-[#7a6ccf] backdrop-blur-md uppercase tracking-widest">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 文字內容區 */}
            <div className="relative z-10 p-8 pt-10 mt-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-4xl font-black text-neutral-950 uppercase tracking-tighter">{cat.title}</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#7a6ccf] shadow-sm opacity-0 -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-600 font-medium">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}