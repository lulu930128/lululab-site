"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data";

interface StarModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function StarModal({ project, onClose }: StarModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-neutral-950/30">
        {/* 背景遮罩 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="absolute inset-0" 
          onClick={onClose}
        />
        
        {/* 視窗主體 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative z-10 w-full max-w-2xl rounded-[2.5rem] border border-white/40 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10 max-h-[85vh] overflow-y-auto"
        >
          {/* 關閉按鈕 */}
          <button onClick={onClose} className="absolute right-8 top-8 text-neutral-400 hover:text-neutral-950 transition-colors p-2 bg-neutral-50 rounded-full">✕</button>
          
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a79da] bg-[#f4f1fb] px-3 py-1 rounded-full">Development Insight</span>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900 leading-tight">{project.title}</h2>
            </div>

            {/* 數據看板 */}
            <div className="grid grid-cols-2 gap-4">
              {project.stats?.map((s) => (
                <div key={s.label} className="rounded-2xl border border-neutral-100 bg-white/50 p-4 shadow-sm">
                  <p className="text-[9px] font-bold uppercase text-[#a89cd9] tracking-wider">{s.label}</p>
                  <p className="mt-1 text-base font-bold text-neutral-800">{s.value}</p>
                </div>
              ))}
            </div>

            {/* STAR 內容 或 開發心得 */}
            <div className="space-y-4">
              {project.star ? (
                <>
                  <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100/50">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-2"><span>S</span> Situation</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">{project.star.situation}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/50">
                    <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2"><span>A</span> Action</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">{project.star.action}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100/50">
                    <h4 className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-2 flex items-center gap-2"><span>R</span> Result</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">{project.star.result}</p>
                  </div>
                </>
              ) : (
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 shadow-inner">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-2">💡 開發細節與心得</h4>
                  <p className="text-sm leading-relaxed text-neutral-600 font-medium whitespace-pre-wrap">{project.review || project.description}</p>
                </div>
              )}
            </div>

            {/* 技術棧與按鈕 */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
              {project.techStack?.map(t => (
                <span key={t} className="rounded-lg border border-neutral-100 bg-white px-3 py-1.5 text-[10px] font-bold text-neutral-500 shadow-sm uppercase">{t}</span>
              ))}
            </div>
            
            {project.link && (
              <a href={project.link} className="block w-full text-center py-4 bg-neutral-900 text-white rounded-2xl text-sm font-bold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-neutral-200">
                查看專案 Demo 與 GitHub →
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}