"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceItem } from "../data";

interface ModalProps {
  item: ExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceModal({ item, onClose }: ModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-neutral-950/30">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0" onClick={onClose} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
        >
          <button onClick={onClose} className="absolute right-6 top-6 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition hover:bg-neutral-900 hover:text-white">✕</button>
          
          <div className="relative h-56 w-full bg-neutral-100 sm:h-72">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="px-8 pb-10 pt-4 sm:px-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8a79da] bg-[#f4f1fb] px-3 py-1 rounded-full">Archive Record</span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900">{item.title}</h2>
            
            {/* 數據小卡對齊 Projects 樣式 */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-neutral-100 bg-[#faf8ff] p-4">
                <p className="text-[9px] font-bold uppercase text-[#a89cd9] tracking-widest">Personal Score</p>
                <p className="mt-1 text-base font-bold text-neutral-800">{item.score}</p>
              </div>
              <div className="rounded-2xl border border-neutral-100 bg-[#faf8ff] p-4">
                <p className="text-[9px] font-bold uppercase text-[#a89cd9] tracking-widest">Playtime</p>
                <p className="mt-1 text-base font-bold text-neutral-800">{item.playtime}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-50 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-neutral-200"></span>
                Review & Insight
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 font-medium italic bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                "{item.review}"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}