"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../data";

interface CardProps {
  project: Project;
  layoutType: "featured" | "secondary" | "lab";
  onClick?: (p: Project) => void;
}

export default function ProjectCard({ project, layoutType, onClick }: CardProps) {
  const isFeatured = layoutType === "featured";
  const isSecondary = layoutType === "secondary";
  const isLab = layoutType === "lab";

  const InnerContent = (
    <article 
      className={`group relative flex overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white shadow-md hover:shadow-2xl transition-all h-full
        ${isFeatured ? "flex-col lg:flex-row lg:min-h-[540px]" : "flex-col"} 
        ${isLab ? "p-8 backdrop-blur-md bg-white/90" : ""}`}
    >
      {!isLab && (
        <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#faf9fd] to-[#f1eff6] p-6
          ${isFeatured ? "lg:w-[48%]" : "h-64 w-full"}`}>
          <img 
            src={project.image || "/images/Projects/placeholder.png"} 
            alt={project.title} 
            className="h-full w-full object-cover rounded-2xl border-[6px] border-white/60 shadow-lg group-hover:scale-[1.02] transition-transform duration-700" 
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col justify-between ${isLab ? "" : "p-8 lg:p-10"}`}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a6ccf]">{project.tag || "Innovation"}</span>
            {project.status && (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-bold text-emerald-600 border border-emerald-100">
                {project.status}
              </span>
            )}
            {isLab && <span className="text-xl text-neutral-200 transition-colors group-hover:text-[#7a6ccf]">↗</span>}
          </div>

          <h3 className={`${isFeatured ? "text-3xl" : "text-xl"} font-bold text-neutral-900 leading-tight`}>
            {project.title}
          </h3>
          
          <p className="mt-4 text-sm leading-relaxed text-neutral-500 font-medium">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-[#f4f1fb] border border-[#7a6ccf]/10 text-[10px] font-bold text-[#7a6ccf] uppercase tracking-tighter transition-colors group-hover:bg-[#7a6ccf] group-hover:text-white">
                # {tech}
              </span>
            ))}
          </div>
          
          {!isLab && project.star?.result && (
            <div className="mt-8 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 p-2 opacity-10 text-emerald-600 text-3xl font-black italic select-none">SOLVED</div>
              <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                🎯 核心解決問題
              </h4>
              <p className="text-[11px] text-neutral-600 font-bold leading-relaxed">
                {project.star.result}
              </p>
            </div>
          )}
        </div>

        <div className={`mt-8 flex items-center justify-between ${isLab ? "" : "border-t border-neutral-50 pt-6"}`}>
          <div className="flex gap-6">
            {project.stats?.map(s => (
              <div key={s.label}>
                <p className="text-[9px] font-bold uppercase text-[#a89cd9]">{s.label}</p>
                <p className={`${isFeatured ? "text-lg" : "text-sm"} font-bold text-neutral-800`}>{s.value}</p>
              </div>
            ))}
          </div>
          {!isLab && (
            <div className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all shadow-sm ${isFeatured ? "bg-[#7f6fd8] text-white" : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"}`}>
               {isFeatured ? "查看架構與 Demo →" : "詳情 →"}
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if ((isFeatured || isSecondary) && project.link) {
    return (
      <motion.div whileHover={{ y: -8 }} className="h-full">
        <Link href={project.link} className="block h-full">
          {InnerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ y: -8 }} className="h-full cursor-pointer" onClick={() => onClick?.(project)}>
      {InnerContent}
    </motion.div>
  );
}