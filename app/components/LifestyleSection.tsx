"use client";
import { equipments } from "../data";

export default function LifestyleSection() {
  return (
    <section id="lifestyle" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex items-end justify-between px-2"><div><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8a79da]">Lifestyle & Gears</p><h2 className="mt-2 text-3xl font-bold text-neutral-900">日常道具與調劑</h2></div><span className="mb-1 text-[11px] font-medium tracking-wider text-neutral-400 uppercase font-mono">Scroll ↔</span></div>
      <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        {equipments.map((item, idx) => (
          <div key={idx} className="group relative flex h-[160px] min-w-[280px] snap-center flex-col justify-end overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white/80 p-6 shadow-sm transition-all duration-500 hover:min-w-[340px] hover:bg-white hover:shadow-lg sm:min-w-[300px]">
            <div className="absolute right-[-10px] top-[-10px] text-8xl opacity-5 transition-transform group-hover:scale-110 group-hover:opacity-[0.08]">{item.icon}</div>
            <div className="relative z-10 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-8"><span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-2xl shadow-inner transition-colors group-hover:bg-[#f4f1fb]">{item.icon}</span><div><p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">{item.desc}</p><h4 className="text-lg font-semibold text-neutral-900">{item.title}</h4></div></div>
            <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"><p className="text-sm text-neutral-500">{item.detail}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}