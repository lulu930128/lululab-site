"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// --- 🐾 像素彩虹貓組件 ---
function NyanCat() {
  const [pos, setPos] = useState(10);
  const [facingRight, setFacingRight] = useState(true);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos((prev) => {
        const step = 0.35; 
        let nextPos = facingRight ? prev + step : prev - step;
        if (nextPos > 92) { setFacingRight(false); return 92; }
        else if (nextPos < -2) { setFacingRight(true); return -2; }
        if (Math.random() < 0.005) { setFacingRight((prevFace) => !prevFace); }
        return nextPos;
      });
    }, 50);
    return () => clearInterval(moveInterval);
  }, [facingRight]);

  return (
    <div
      className="absolute bottom-4 z-0 pointer-events-none transition-transform duration-100"
      style={{ left: `${pos}%`, transform: facingRight ? "scaleX(1)" : "scaleX(-1)", width: "90px" }}
    >
      <img src="/images/Projects/nyan-cat.gif" alt="Nyan Cat" className="w-full h-auto opacity-80" />
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const labFilters = ["All", "Data", "Web", "Automation"];

  const myExpertise = [
    { id: "01", layer: "Automation", title: "BAT / Shell Scripts", desc: "擔任設備工程師的主力武器，負責機台底層自動化腳本。", color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-200", icon: "⚙️" },
    { id: "02", layer: "Core Processing", title: "Python / AI & Data", desc: "核心語言。撰寫核心演算法、爬蟲抓取與 LLM 模型整合。", color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-200", icon: "🧠" },
    { id: "03", layer: "Data Storage", title: "Database Architecture", desc: "負責龐大機台數據與資料，進行結構化儲存與關聯設計。", color: "text-purple-500", bg: "bg-purple-50 border-purple-200", icon: "🗄️" },
    { id: "04", layer: "Interface", title: "Web UI (HTML / React)", desc: "獨立完成前端介面，將後端數據轉化為視覺化操作面板。", color: "text-blue-500", bg: "bg-blue-50 border-blue-200", icon: "🖥️" },
  ];

  const featuredProjects = [
    {
      id: "ai-deskpet", category: "Innovation & AI", title: "AI 互動桌寵系統",
      tag: "Independent Project", status: "Active Development",
      description: "結合 LLM 與 Live2D 技術。透過情緒分析與即時語音合成，創造具溫度的數位生命。",
      highlights: [
        "串接 OpenAI API 實現具上下文記憶的即時對話",
        "整合 Edge-TTS 達到延遲 < 1.2s 的擬真語音反饋",
        "使用 Live2D SDK 實現與模型情緒同步的肢體動作"
      ],
      image: "/images/Projects/桌寵釋例.png",
      stats: [{ label: "Interaction", value: "Real-time" }, { label: "Tech Core", value: "LLM / TTS" }],
      link: "/projects/ai-deskpet"
    },
    {
      id: "pro-systems", category: "Professional Systems", title: "專業實務系統開發",
      isGroup: true,
      projects: [
        {
          id: "security-ctf", title: "校園資安技術刷題平台",
          description: "為學生打造的 CTF 實戰環境。負責整體後端架構與自動化閱卷系統。",
          image: "/images/category-experience.jpg", 
          stats: [{ label: "Users", value: "300+" }, { label: "Role", value: "Backend" }],
          link: "/projects/security-platform"
        },
        {
          id: "report-automation", title: "機台日報處理自動化系統",
          description: "針對 ASE 廠內設備數據開發。自動化整合多源資訊，提升數據準確性。",
          image: "/images/category-projects.jpg",
          stats: [{ label: "Efficiency", value: "High" }, { label: "Environment", value: "ASE" }],
          link: "/projects/daily-report-automation"
        }
      ]
    }
  ];

  const compactProjects = [
    { id: "stock", title: "智慧型股票分析系統", filterCategory: "Data", description: "Python 量化工具。自動抓取台股數據，計算技術指標並生成視覺化報告。", techStack: ["Python", "Pandas", "Matplotlib"], review: "第一個處理大數據流的專案。解決了多執行緒爬蟲衝突，已實作 RSI、MACD 等自動偵測。", stats: [{ label: "Indicators", value: "12+" }, { label: "Backtest", value: "Passed" }] },
    { id: "site", title: "LuluLab 個人網站", filterCategory: "Web", description: "採用 Next.js 與 Tailwind CSS 打造。實驗 Bento Box 排版與毛玻璃互動效果。", techStack: ["React", "Next.js", "Vercel"], review: "嘗試在技術力與舒適感之間取得平衡，優化了全站的資產管理與加載速度。", stats: [{ label: "Score", value: "98/100" }, { label: "Design", value: "Modern" }] },
    { id: "translator", title: "LLM 批次翻譯小工具", filterCategory: "Automation", description: "串接 GPT API 進行大規模文本處理，優化翻譯流程與成本控制。", techStack: ["Python", "OpenAI API", "Asyncio"], review: "利用異步處理技術大幅提升處理速度，並透過 Prompt Engineering 優化翻譯品質。", stats: [{ label: "Speed", value: "400% ↑" }, { label: "Cost", value: "Low" }] }
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-neutral-800 pb-20">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dataFlow { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-data-flow { animation: dataFlow 3s linear infinite; }
      `}} />

      {/* 背景裝飾 */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-10 lg:py-16 space-y-24">
        
        {/* ================= 區塊 1：Header & 技術面板 (對齊修正版) ================= */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 p-8 shadow-sm backdrop-blur-md sm:p-10 lg:col-span-7">
            <NyanCat />
            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7a6ccf]">Projects / Portfolio</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-[54px]">專案展示與<br/>系統開發</h1>
              <p className="mt-6 text-base leading-relaxed text-neutral-600">結合設備工程背景，我專注於打造穩定且具擴充性的「資料流架構」與 AI 創新應用。</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#eCeAf4] bg-white/60 p-5 shadow-sm transition hover:bg-white hover:shadow-md">
                  <div className="mb-2 flex items-center gap-2 text-indigo-500 font-bold text-sm"><span>🧠</span> AI 整合與應用</div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">專精 LLM 串接、TTS 與桌寵開發。獨立建構具情緒互動能力的創新系統。</p>
                </div>
                <div className="rounded-2xl border border-[#eCeAf4] bg-white/60 p-5 shadow-sm transition hover:bg-white hover:shadow-md">
                  <div className="mb-2 flex items-center gap-2 text-emerald-500 font-bold text-sm"><span>⚡</span> 自動化腳本製作</div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">熟練 Python 與 BAT。開發多項廠端機台自動化報表與高效率數據處理流程。</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-10"><Link href="/" className="inline-flex rounded-full border border-[#d9d0f4] bg-[#f4f1fb] px-8 py-2.5 text-sm font-semibold text-[#6658bb] transition hover:bg-[#eae4f9]">← 回首頁</Link></div>
          </div>
          
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 p-8 shadow-sm backdrop-blur-xl lg:col-span-5 sm:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#7a6ccf_1px,transparent_1px),linear-gradient(to_bottom,#7a6ccf_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between border-b border-neutral-100/80 pb-5"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a79da]">My Core Expertise</p><div className="flex gap-1.5 opacity-40"><div className="h-2 w-2 rounded-full bg-neutral-400"></div><div className="h-2 w-2 rounded-full bg-neutral-400"></div></div></div>
              <div className="relative pl-4 sm:pl-6">
                {/* 精準對齊的管線 */}
                <div className="absolute bottom-6 left-[2.15rem] top-6 w-[2px] bg-neutral-100 sm:left-[2.65rem]"></div>
                <div className="absolute bottom-6 left-[2.15rem] top-6 w-[2px] bg-gradient-to-b from-emerald-300 via-indigo-300 to-blue-300 opacity-50 sm:left-[2.65rem]"></div>
                <div className="absolute bottom-6 left-[2.05rem] top-6 w-1 sm:left-[2.55rem] overflow-hidden"><div className="absolute left-0 w-1 h-6 rounded-full bg-white shadow-[0_0_8px_2px_rgba(122,108,207,0.8)] animate-data-flow"></div></div>
                <div className="space-y-8">
                  {myExpertise.map((item) => (
                    <div key={item.id} className="relative group flex items-start gap-4">
                      <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm transition-transform group-hover:scale-110 ${item.bg}`}><span className="text-lg">{item.icon}</span></div>
                      <div className="flex-1 pt-0.5">
                        <span className={`font-mono text-[9px] font-bold uppercase tracking-wider ${item.color}`}>{item.id} / {item.layer}</span>
                        <h3 className="mt-1 text-base font-bold text-neutral-900 transition-colors group-hover:text-[#7a6ccf]">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 中間大標題 ================= */}
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

        {/* ================= 區塊 2：主打專案展示 ================= */}
        <section className="space-y-16">
          {featuredProjects.map((group) => (
            <div key={group.id} className="space-y-8">
              <p className="px-2 text-xs font-bold uppercase tracking-widest text-[#a89cd9]">{group.category}</p>
              {group.isGroup ? (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {group.projects?.map((p: any) => (
                    <article key={p.id} className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 shadow-sm transition-all hover:shadow-xl">
                      <div className="relative h-56 overflow-hidden bg-neutral-100/50 p-4"><img src={p.image} alt={p.title} className="h-full w-full object-cover rounded-xl border border-white shadow-sm transition-transform duration-700 group-hover:scale-105" /></div>
                      <div className="p-8 flex flex-1 flex-col justify-between">
                        <div><h3 className="text-2xl font-semibold text-neutral-900">{p.title}</h3><p className="mt-3 text-sm text-neutral-600 line-clamp-2">{p.description}</p></div>
                        <div className="mt-8 flex items-end justify-between">
                          <div className="flex gap-4">{p.stats?.map((s: any) => (<div key={s.label}><p className="text-[9px] font-bold uppercase text-[#a89cd9]">{s.label}</p><p className="text-xs font-semibold text-neutral-700">{s.value}</p></div>))}</div>
                          <Link href={p.link} className="rounded-full border border-neutral-200 bg-white px-6 py-2 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-50 hover:shadow-sm">詳情 →</Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <article className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] bg-white/80 shadow-md transition-all hover:shadow-xl lg:flex-row lg:h-[540px]">
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-[#faf9fd] to-[#f1eff6] p-6 lg:w-[50%] overflow-hidden"><img src={group.image} alt={group.title} className="h-full w-full object-cover rounded-2xl border-[6px] border-white/60 bg-white/40 shadow-lg group-hover:scale-[1.02] transition-transform duration-700" /></div>
                  <div className="flex flex-1 flex-col justify-between p-8 sm:p-10 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a6ccf]">{group.tag}</span>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-bold text-emerald-600 border border-emerald-100">{group.status}</span>
                      </div>
                      <h3 className="text-3xl font-semibold text-neutral-900">{group.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-600">{group.description}</p>
                      <div className="mt-6 space-y-3">
                        <p className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Project Highlights</p>
                        <ul className="space-y-2">
                          {group.highlights?.map((h: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-xs text-neutral-500"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a6ccf]/40" />{h}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {group.stats?.map((stat: any) => (
                          <div key={stat.label} className="rounded-2xl border border-[#ede9f9] bg-[#faf8ff] p-4 transition-colors group-hover:bg-[#f4f1fb]"><p className="text-[10px] font-bold uppercase text-[#a89cd9]">{stat.label}</p><p className="mt-1 text-lg font-semibold text-neutral-800">{stat.value}</p></div>
                        ))}
                      </div>
                    </div>
                    {group.link && <Link href={group.link} className="mt-8 self-start rounded-full bg-[#7f6fd8] px-10 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#6e5fcb] hover:shadow-md">查看架構與 Demo →</Link>}
                  </div>
                </article>
              )}
            </div>
          ))}
        </section>

        {/* ================= 區塊 3：Lab 實驗室 ================= */}
        <section className="space-y-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between px-2">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Development Lab</p><h2 className="mt-2 text-3xl font-semibold text-neutral-900">其餘開發與工具</h2></div>
            <div className="flex gap-2 rounded-full bg-white/60 p-1.5 shadow-sm border border-neutral-100 backdrop-blur-md">
              {labFilters.map(f => (<button key={f} onClick={() => setActiveFilter(f)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeFilter === f ? 'bg-[#7a6ccf] text-white shadow-md' : 'text-neutral-500 hover:bg-neutral-100'}`}>{f}</button>))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {compactProjects.filter(p => activeFilter === "All" || p.filterCategory === activeFilter).map((project) => (
              <div key={project.id} onClick={() => setSelectedProject(project)} className="group cursor-pointer rounded-[2rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between mb-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f1fb] text-lg shadow-inner">🛠️</span><span className="text-xl text-neutral-200 transition-colors group-hover:text-[#7a6ccf]">↗</span></div>
                <h3 className="text-xl font-semibold text-neutral-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-2">{project.description}</p>
                <div className="mt-6 border-t border-neutral-100/80 pt-5 flex flex-wrap gap-2">{project.techStack?.map(t => (<span key={t} className="font-mono text-[9px] font-semibold text-[#a89cd9]">~/{t}</span>))}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 區塊 4：Roadmap ================= */}
        <section className="rounded-[2.5rem] border border-[#eCeAf4] bg-white/60 p-8 sm:p-12 shadow-sm backdrop-blur-md">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1"><p className="text-xs font-bold uppercase tracking-widest text-[#a89cd9]">What's Next</p><h2 className="mt-3 text-3xl font-semibold text-neutral-900">學習與技術展望</h2><p className="mt-4 text-sm text-neutral-500 leading-relaxed">保持對新技術的敏銳度，這些是我目前正在研究，或計劃導入下一個系統架構的技術棧。</p></div>
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-100 bg-white/60 p-6 shadow-sm"><div className="mb-3 text-xl">🐳</div><h4 className="font-bold text-neutral-900">Docker & 容器化部署</h4><p className="mt-2 text-xs leading-relaxed text-neutral-500">學習將後端專案與自動化腳本容器化，優化部署流程與環境穩定度。</p></div>
              <div className="rounded-2xl border border-neutral-100 bg-white/60 p-6 shadow-sm"><div className="mb-3 text-xl">🧠</div><h4 className="font-bold text-neutral-900">LLM 邊緣計算與微調</h4><p className="mt-2 text-xs leading-relaxed text-neutral-500">研究本地小模型部署與 LoRA 微調，優化 AI 桌寵的反饋速度與互動深度。</p></div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= Modal & Footer ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="relative z-10 w-full max-w-xl rounded-[2.5rem] bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300 sm:p-10">
            <button onClick={() => setSelectedProject(null)} className="absolute right-6 top-6 rounded-full bg-neutral-50 p-2 text-neutral-400 hover:text-neutral-600 transition-colors">✕</button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a79da]">{selectedProject.filterCategory} Lab</span>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900">{selectedProject.title}</h2>
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">{selectedProject.stats?.map((s: any) => (<div key={s.label} className="rounded-2xl border border-[#ede9f9] bg-[#faf8ff] p-4 text-center"><p className="text-[9px] font-bold uppercase text-[#a89cd9]">{s.label}</p><p className="mt-1 text-base font-bold text-neutral-800">{s.value}</p></div>))}</div>
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6"><h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">開發心得與技術細節</h4><p className="text-sm leading-relaxed text-neutral-600">{selectedProject.review}</p></div>
              <div className="flex flex-wrap gap-2">{selectedProject.techStack?.map((t: string) => (<span key={t} className="rounded-lg border border-neutral-100 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">{t}</span>))}</div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 border-t border-neutral-100/60 bg-white/30 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold text-neutral-400 tracking-wide">© {new Date().getFullYear()} Lulu星. All rights reserved.</p>
          <div className="mt-5 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300">
            <span className="hover:text-[#7a6ccf] transition-colors cursor-default">Innovate</span>
            <span className="opacity-30">•</span>
            <span className="hover:text-[#7a6ccf] transition-colors cursor-default">Automate</span>
            <span className="opacity-30">•</span>
            <span className="hover:text-[#7a6ccf] transition-colors cursor-default">Inspire</span>
          </div>
        </div>
      </footer>
    </main>
  );
}