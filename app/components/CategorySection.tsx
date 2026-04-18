"use client";
import { categories } from "../data";

export default function CategorySection() {
  const capsuleStyle = "rounded-full border border-[#7a6ccf]/10 bg-white/80 px-3 py-1 text-[9px] font-bold text-[#7a6ccf] backdrop-blur-md uppercase tracking-tighter";

  return (
    <section id="categories" className="flex flex-col gap-6">
      <div className="px-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8a79da]">Main Architecture</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-900">主分類入口</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {categories.map((cat, index) => (
          <a
            key={cat.title}
            href={cat.href}
            className={`group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
          >
            <div className="absolute inset-0 z-0">
              <img src={cat.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-white/85 transition-colors group-hover:bg-white/70" />
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span key={tag} className={capsuleStyle}># {tag}</span>
              ))}
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-black text-neutral-900 uppercase tracking-tight">{cat.title}</h3>
                <span className="text-2xl text-[#7a6ccf] opacity-0 -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">→</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 font-medium">{cat.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}