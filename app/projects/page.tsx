"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NyanCat from "./components/NyanCat";
import ProjectCard from "./components/ProjectCard";
import StarModal from "./components/StarModal";
import { featuredProjects, compactProjects, myExpertise, roadmapData, Project } from "./data";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-neutral-800 pb-20">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dataFlow { 
          0% { top: 0%; background: #10b981; box-shadow: 0 0 15px #10b981; } 
          33% { background: #6366f1; box-shadow: 0 0 15px #6366f1; }
          66% { background: #a855f7; box-shadow: 0 0 15px #a855f7; }
          100% { top: 100%; background: #3b82f6; box-shadow: 0 0 15px #3b82f6; } 
        }
        .animate-data-flow { animation: dataFlow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .grid-pattern {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}} />

      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-10 lg:py-16 space-y-24">
        
        {/* ================= 區塊 1：Header (強化人設版) ================= */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* 左側：大標題 -> 說明 -> 膠囊 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/60 p-8 shadow-sm backdrop-blur-md sm:p-12 lg:col-span-7"
          >
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a79da]">PROJECTS & RESEARCH DIRECTION</p>
              
              {/* 大標題 */}
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-neutral-950 sm:text-5xl lg:text-[64px]">
                從實作專案<br/>走向 AI 互動研究
              </h1>
              
              {/* 中間簡短說明 */}
              <div className="mt-8 grid grid-cols-1 gap-6 border-l-2 border-[#7a6ccf]/10 pl-6">
                <div className="group flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4f1fb] text-[10px] font-bold text-[#7a6ccf]">1</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong className="text-neutral-900">研究主軸:</strong>
                    專案主要圍繞在 AI 應用整合、互動系統設計與角色化介面實作，並以可運作的原型作為研究方向的延伸基礎
                  </p>
                </div>
                <div className="group flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4f1fb] text-[10px] font-bold text-[#7a6ccf]">2</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong className="text-neutral-900">技術方法:</strong>
                    實作上以 LLM、TTS、前後端整合與模組化流程設計為核心，逐步驗證互動邏輯、系統穩定性與使用情境
                  </p>
                </div>
                <div className="group flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4f1fb] text-[10px] font-bold text-[#7a6ccf]">3</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong className="text-neutral-900">長期方向:</strong>
                    研究重點延伸到情感互動、陪伴型介面與更自然的人機交流形式，探索 AI 在情緒理解與角色互動中的可能性
                  </p>
                </div>
              </div>
              
              {/* 功能膠囊 (Capsules) */}
              <div className="mt-10 rounded-[1.5rem] border border-[#eceaf4] bg-white/35 px-6 py-5 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a79da]">
                  <span className="h-2 w-2 rounded-full bg-[#8a79da]" />
                  Primary Showcase
                </div>

                <p className="mt-4 text-[14px] leading-7 text-neutral-500">
                  以下將以 AI 互動桌寵系統作為主要展示案例，進一步展開目前的核心實作與技術架構。
                </p>
              </div>
            </div>

            {/* 底部導覽與貓咪彩蛋 */}
            <div className="relative z-10 mt-12 flex items-end justify-between">
              <Link href="/" className="inline-flex rounded-full bg-[#f4f1fb] px-10 py-3.5 text-sm font-bold text-[#7a6ccf] transition hover:bg-[#eae4f9] shadow-sm">
                ← 回首頁
              </Link>
              <div className="flex-1 relative h-10 overflow-hidden ml-6 border-b border-neutral-100/50">
                <NyanCat />
              </div>
            </div>
          </motion.div>
          
          {/* 右側：專業技能面板 (Grid Pattern 版) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="relative overflow-hidden rounded-[3rem] border border-neutral-100 bg-white shadow-sm lg:col-span-5 flex flex-col"
          >
            {/* 工程製圖網格背景 */}
            <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none"></div>

            <div className="relative z-10 h-full flex flex-col p-8 sm:p-10">
              
              {/* --- 面板標題區：解決「不知道在展示什麼」 --- */}
              <div className="relative mb-10 pb-6 border-b border-neutral-100/80">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-widest text-neutral-900 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-[#7a6ccf] rounded-full"></span>
                      Technical Architecture
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
                        System Optimized // Core Expertise
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 opacity-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 shadow-inner"></div>
                  </div>
                </div>
              </div>

              {/* --- 核心核心：Python / AI (保持最大，權重最重) --- */}
              <div className="group relative mb-8 rounded-[2.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-6 shadow-sm transition-all hover:shadow-lg">
                <div className="absolute -right-2 -top-2 h-16 w-16 bg-indigo-500/5 blur-3xl"></div>
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-indigo-100 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">💠</span> {/* 替換為更具科技感的晶體圖示 */}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-100/60 px-2 py-0.5 rounded">Primary Stack</span>
                    <h3 className="mt-2 text-xl font-bold text-neutral-900 tracking-tight">Python / AI Design</h3>
                    <p className="mt-3 text-[11px] leading-relaxed text-neutral-500 font-medium">
                      專精於異步系統開發與 LLM 互動邏輯。將複雜的硬體數據透過 Python 進行高效處理與 AI 情緒建模。
                    </p>
                  </div>
                </div>
              </div>

              {/* --- 輔助技術：懸停顯示說明 --- */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: "⚡", title: "Automation", tag: "BAT / Shell Scripts", desc: "機台端自動化批次腳本，優化系統底層運作流程。", color: "text-emerald-500", bg: "bg-emerald-50/50" },
                  { icon: "📡", title: "Data Storage", tag: "PostgreSQL / ETL", desc: "結構化數據管理與異地備援，確保資料流傳遞穩定性。", color: "text-purple-500", bg: "bg-purple-50/50" },
                  { icon: "🎨", title: "Interface", tag: "React / HTML Design", desc: "基於使用者體驗的現代化介面，實現高效的資料互動。", color: "text-blue-500", bg: "bg-blue-50/50" }
                ].map((item) => (
                  <div 
                    key={item.title} 
                    className="group flex flex-col rounded-2xl border border-neutral-50 bg-white/50 p-4 transition-all duration-300 hover:border-[#7a6ccf]/20 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white shadow-inner transition-transform duration-500 group-hover:rotate-[360deg] ${item.bg}`}>
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-neutral-800 tracking-wide">{item.title}</h4>
                          <p className="text-[10px] font-mono text-neutral-400 mt-0.5">{item.tag}</p>
                        </div>
                      </div>
                      <div className={`h-1.5 w-1.5 rounded-full ${item.color.replace('text', 'bg')} opacity-30 group-hover:opacity-100 transition-opacity`}></div>
                    </div>
                    
                    {/* 懸停後顯示的說明文字 */}
                    <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mt-3 text-[10px] leading-relaxed text-neutral-400 font-medium pl-[60px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================= 標題：核心開發項目 ================= */}
        <section className="pt-10">
          <div className="relative flex items-center gap-6 px-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8a79da]">Showcase</p>
              <h2 className="mt-2 text-3xl font-semibold text-neutral-900 sm:text-4xl">核心開發項目</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
          </div>
        </section>

        {/* 專案展示區域 (沿用之前的分層邏輯) */}
        <section className="space-y-16">
          {featuredProjects.map((group) => (
            <div key={group.id} className="space-y-8">
              <p className="px-2 text-xs font-bold uppercase tracking-widest text-[#a89cd9]">{group.category}</p>
              {group.isGroup ? (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {group.projects?.map((p) => (
                    <ProjectCard key={p.id} project={p} layoutType="secondary" />
                  ))}
                </div>
              ) : (
                <ProjectCard project={group} layoutType="featured" />
              )}
            </div>
          ))}
        </section>

        {/* 實驗室區塊 */}
        <section className="space-y-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between px-2">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Development Lab</p><h2 className="mt-2 text-3xl font-semibold text-neutral-900">其餘開發與工具</h2></div>
            <div className="flex gap-2 rounded-full bg-white/60 p-1.5 shadow-sm border border-neutral-100 backdrop-blur-md">
              {["All", "Data", "Web", "Automation"].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeFilter === f ? 'bg-[#7a6ccf] text-white shadow-md' : 'text-neutral-500 hover:bg-neutral-100'}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {compactProjects.filter(p => activeFilter === "All" || p.filterCategory === activeFilter).map((project) => (
              <ProjectCard key={project.id} project={project} layoutType="lab" onClick={setSelectedProject} />
            ))}
          </div>
        </section>

        {/* 未來展望 */}
        <section className="rounded-[2.5rem] border border-[#eCeAf4] bg-white/60 p-8 sm:p-12 shadow-sm backdrop-blur-md">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#a89cd9]">What's Next</p>
              <h2 className="mt-3 text-3xl font-semibold text-neutral-900">學習與技術展望</h2>
              <p className="mt-4 text-sm text-neutral-500 leading-relaxed">保持對新技術的敏銳度，這些是我目前正在研究的技術棧。</p>
            </div>
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {roadmapData.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-neutral-100 bg-white/60 p-6 shadow-sm hover:bg-white transition-colors">
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <h4 className="font-bold text-neutral-900">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <StarModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Footer */}
      <footer className="mt-20 border-t border-neutral-100/60 bg-white/30 py-12 text-center backdrop-blur-sm">
        <p className="text-xs font-semibold text-neutral-400">© {new Date().getFullYear()} Lulu星. All rights reserved.</p>
        <div className="mt-5 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300">
          <span className="hover:text-[#7a6ccf] transition-colors cursor-default">Innovate</span><span>•</span>
          <span className="hover:text-[#7a6ccf] transition-colors cursor-default">Automate</span><span>•</span>
          <span className="hover:text-[#7a6ccf] transition-colors cursor-default">Inspire</span>
        </div>
      </footer>
    </main>
  );
}