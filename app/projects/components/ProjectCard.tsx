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

  const featuredContent = (
    <article className="group relative flex h-full overflow-hidden rounded-[2.5rem] border border-[#eceaf4] bg-white shadow-md transition-all hover:shadow-2xl">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
        
        {/* 左側主視覺 (加入後端冰山暗示：Terminal 浮水印) */}
        <div className="relative min-h-[340px] border-b border-[#eceaf4] bg-gradient-to-br from-[#faf9fd] to-[#f1eff6] p-6 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:p-8 overflow-hidden">
          {/* 純裝飾性的終端機代碼暗示 */}
          <div className="absolute left-6 top-6 z-0 select-none font-mono text-[9px] font-bold leading-relaxed text-[#7a6ccf] opacity-20 transition-opacity duration-500 group-hover:opacity-40">
            <p>{`> [SYSTEM] Initializing LLM Brain...`}</p>
            <p>{`> [MEMORY] Connecting Vector DB... OK`}</p>
            <p>{`> [MODULE] Long-term memory loaded.`}</p>
            <p>{`> [PIPELINE] Async ITTS stream ready.`}</p>
          </div>
          
          <img
            src={project.image || "/images/Projects/placeholder.png"}
            alt={project.title}
            className="relative z-10 h-full w-full rounded-[1.75rem] border-[6px] border-white/80 object-cover shadow-lg transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* 右側內容 (The Meat - 後端主場) */}
        <div className="flex flex-1 flex-col px-8 py-8 lg:px-10 lg:py-10">
          {/* 上方標記列 */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8a79da] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8a79da] animate-pulse"></span>
              {project.tag || "Primary Project"}
            </p>

            {project.status && (
              <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[10px] font-bold text-indigo-600 shadow-sm">
                {project.status}
              </span>
            )}
          </div>

          {/* 標題 */}
          <div className="mt-5">
            <h3 className="text-[2rem] font-black leading-tight tracking-tight text-neutral-900 sm:text-[2.25rem]">
              {project.title}
            </h3>
          </div>

          {/* 核心定位 */}
          <div className="mt-4">
            <p className="text-[15px] font-medium leading-relaxed text-neutral-600">
              {project.description}
            </p>
          </div>

          {/* 技術標籤 (改為系統模組感) */}
          {!!project.techStack?.length && (
            <div className="mt-6">
              <p className="mb-2 text-[9px] font-black uppercase tracking-widest text-neutral-400">Core Architecture</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-neutral-100 bg-white shadow-sm px-3 py-1.5 font-mono text-[10px] font-bold text-neutral-600 transition-colors group-hover:border-[#7a6ccf]/30 group-hover:text-[#7a6ccf]"
                  >
                    <span className="text-[#a89cd9] mr-1">⚙</span>{tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 核心架構突破 (原本的里程碑，改為後端大腦展示) */}
          
            <div className="relative mt-7 overflow-hidden rounded-[1.5rem] border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 to-white px-6 py-5 shadow-sm">
              <div className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#7a6ccf] to-[#a89cd9]"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a6ccf] flex items-center gap-2">
                🧠 Backend Logic & Memory
              </p>
              <p className="mt-2.5 text-[13px] font-medium leading-relaxed text-neutral-700">
                {project.highlight}
              </p>
            </div>

          {/* 底部數據與按鈕 */}
          <div className="mt-auto flex items-end justify-between gap-6 pt-8 border-t border-neutral-50">
            <div className="space-y-1">
              {project.stats?.[0] ? (
                <>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#b5afd3]">
                    {project.stats[0].label}
                  </p>
                  <p className="text-[15px] font-bold text-neutral-800">
                    {project.stats[0].value}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#b5afd3]">
                    Architecture
                  </p>
                  <p className="text-[15px] font-bold text-neutral-800">
                    Async Event-Driven
                  </p>
                </>
              )}
            </div>

            <div className="rounded-full bg-[#7a6ccf] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg group-hover:translate-y-[-2px] group-hover:bg-[#6c5ec0]">
              查看底層架構 →
            </div>
          </div>
        </div>
      </div>
    </article>
  );

 const standardContent = (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-neutral-100/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7a6ccf]/5
        ${isLab ? "p-8 bg-white/90 backdrop-blur-md" : ""}`}
    >
      {/* 1. 滿版圖片區塊 (打破相框感，改用 edge-to-edge 滿版設計) */}
      {!isLab && (
        <div
          className={`relative w-full shrink-0 overflow-hidden bg-[#faf9fd]
            ${isSecondary ? "h-48 sm:h-52" : "h-64"}`}
        >
          <img
            src={project.image || "/images/Projects/placeholder.png"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* 圖片底部的超柔和漸層，讓圖片與下方白色內容區完美融合 */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent opacity-90" />
        </div>
      )}

      {/* 2. 內容區塊 (增加 Padding 留白，讓排版有呼吸感) */}
      <div className={`flex flex-1 flex-col ${isLab ? "" : "p-8 pt-6"}`}>
        
        {/* 上半部：標題與狀態 */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#7a6ccf]">
              {project.tag || "System Dev"}
            </span>

            {project.status && (
              <span className="rounded-full bg-[#f4f1fb] border border-[#7a6ccf]/15 px-2.5 py-1 text-[9px] font-bold text-[#7a6ccf]">
                {project.status}
              </span>
            )}
            
            {isLab && (
              <span className="text-xl text-neutral-200 transition-colors group-hover:text-[#7a6ccf]">↗</span>
            )}
          </div>

          <h3 className="text-[1.35rem] font-black leading-tight tracking-tight text-neutral-900">
            {project.title}
          </h3>

          {/* 技術標籤 (改為柔和的底色，不喧賓奪主) */}
          {!!project.techStack?.length && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-neutral-100/60 bg-neutral-50 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-neutral-500 transition-colors group-hover:border-[#7a6ccf]/30 group-hover:text-[#7a6ccf]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 中間部：核心解決問題 (統一改為品牌紫) */}
        {project.highlight && (
          <div className={`mt-6 flex gap-3.5 shrink-0 ${isSecondary ? "mb-2" : ""}`}>
            {/* 左側精緻漸層線條 */}
            <div className="w-1 rounded-full bg-gradient-to-b from-[#7a6ccf] to-[#7a6ccf]/20"></div>
            <div>
              <h4 className="mb-1.5 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-[#7a6ccf]">
                <span>🎯</span> 核心解決問題
              </h4>
              <p className="text-[12px] font-medium leading-relaxed text-neutral-500">
                {project.highlight}
              </p>
            </div>
          </div>
        )}

        {/* 3. 底部區塊 (強制推到底部切齊) */}
        <div className={`mt-auto flex items-end justify-between pt-7 ${isLab ? "" : "border-t border-neutral-100/60 mt-7"}`}>
          <div className="flex gap-6">
            {project.stats?.map((s) => (
              <div key={s.label}>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
                  {s.label}
                </p>
                <p className="text-[13px] font-bold text-neutral-800 mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>

          {!isLab && (
            <div className="rounded-full bg-neutral-50 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 transition-all group-hover:bg-[#7a6ccf] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#7a6ccf]/20">
              詳情 →
            </div>
          )}
        </div>
        
      </div>
    </article>
  );

  const InnerContent = isFeatured ? featuredContent : standardContent;

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
    <motion.div
      whileHover={{ y: -8 }}
      className="h-full cursor-pointer"
      onClick={() => onClick?.(project)}
    >
      {InnerContent}
    </motion.div>
  );
}