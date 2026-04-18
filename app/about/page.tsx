"use client";

import Link from "next/link";

export default function AboutPage() {
  const experiences = [
    {
      company: "ASE 日月光半導體",
      role: "設備工程師",
      period: "202x - Present",
      desc: "專精後端處理與資料整理。致力於將廠端數據流動自動化，並透過 Python 與 Database 處理提升維護效率。",
      tags: ["Equipment Automation", "Data Analysis", "Database Architecture"]
    },
    {
      company: "Previous Experience / Internship",
      role: "Software Developer Intern",
      period: "202x - 202x",
      desc: "參與全棧系統開發，初步建立對資料流架構的理解，並開始探索 AI 與硬體整合的可能性。",
      tags: ["Full-stack", "System Integration"]
    }
  ];

  const education = [
    {
      school: "某某大學 (University Name)",
      degree: "資訊工程 / 電機工程學系 (Degree Name)",
      period: "20xx - 20xx",
      desc: "主修電腦架構與資料結構，打下深厚的邏輯思考與程式開發基礎。"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-neutral-800">
      {/* 裝飾性網格背景樣式 */}
      <style dangerouslySetInnerHTML={{ __html: `.grid-pattern { background-image: radial-gradient(circle, #e2e8f0 1.2px, transparent 1.2px); background-size: 30px 30px; }` }} />
      
      {/* 背景柔和光暈 */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-16 space-y-20">
        
        {/* --- 1. Hero Section：自我導言 --- */}
        <section className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/60 p-8 shadow-sm backdrop-blur-md sm:p-16">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a79da]">About Me / Lulu星</p>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] text-neutral-950 sm:text-5xl lg:text-[64px]">
              連接數據與現實的<br/><span className="text-[#7a6ccf]">系統架構師</span>
            </h1>
            <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-neutral-600 font-medium">
              <p>
                你好，我是 Lulu。目前在 ASE 擔任設備工程師，我喜歡將硬體端龐雜的數據整理成具備價值的結構化資訊。比起單純完成任務，我更追求技術的「持續累積」與「系統化」。
              </p>
              <p>
                我的專長涵蓋後端開發、Database 處理與自動化腳本撰寫。閒暇之餘，我也熱衷於 AI 設計、剪輯與各式生活嗜好，致力於在理性工程與感性生活之間尋求完美的比例。
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#d9d0f4] bg-white px-8 py-3 text-xs font-bold text-[#7a6ccf] transition hover:bg-neutral-50 uppercase tracking-widest">
                ← Back Home
              </Link>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* --- 2. Work Experience：工作時間軸 --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-4 px-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-neutral-200">W</span>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Work Experience</h2>
            </div>
            
            <div className="relative ml-6 border-l-2 border-[#7a6ccf]/10 pl-10 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* 時間軸圓點 */}
                  <div className="absolute left-[-49px] top-1 h-4 w-4 rounded-full bg-white border-4 border-[#7a6ccf] shadow-sm"></div>
                  
                  <div className="group relative rounded-[2rem] border border-[#eCeAf4] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#7a6ccf] transition-colors">{exp.company}</h3>
                        <p className="text-sm font-bold text-[#7a6ccf] uppercase tracking-wider">{exp.role}</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100">{exp.period}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-500 font-medium mb-6">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="rounded-full border border-[#7a6ccf]/10 bg-[#f4f1fb] px-3 py-1 text-[9px] font-bold text-[#7a6ccf] uppercase"># {tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- 3. Education & Manifesto：學歷與理念 --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* 學歷 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 px-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7a6ccf] text-white text-lg shadow-lg shadow-purple-100">🎓</span>
                <h2 className="text-xl font-bold text-neutral-900">Education</h2>
              </div>
              {education.map((edu, idx) => (
                <div key={idx} className="rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-6 shadow-sm backdrop-blur-md">
                  <h3 className="text-base font-bold text-neutral-900">{edu.school}</h3>
                  <p className="mt-1 text-xs font-bold text-[#7a6ccf] uppercase">{edu.degree}</p>
                  <p className="mt-4 text-xs leading-relaxed text-neutral-500 font-medium">{edu.desc}</p>
                  <div className="mt-4 text-[9px] font-mono font-bold text-neutral-300">{edu.period}</div>
                </div>
              ))}
            </div>

            {/* 個人宣言與興趣 (Bento) */}
            <div className="rounded-[1.5rem] border border-white/50 bg-gradient-to-br from-[#faf8ff] to-[#f4f1fb] p-8 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a6ccf] mb-4">Life Philosophy</p>
              <p className="text-lg font-bold text-neutral-800 leading-relaxed italic">
                「いつもきみの隣に、<br/>幸せな魔法がありますように」
              </p>
              <div className="mt-8 pt-6 border-t border-[#7a6ccf]/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Interests & Vibes</p>
                <div className="flex flex-wrap gap-3">
                  {['Mixology 🍸', 'Coffee ☕', 'Motorcycle 🏍️', 'Editing 🎬'].map(hobby => (
                    <span key={hobby} className="px-3 py-1.5 rounded-lg bg-white border border-white text-xs font-bold text-neutral-600 shadow-sm">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <footer className="border-t border-neutral-100/60 pb-6 pt-12 text-center text-xs text-neutral-400 font-mono tracking-widest">
          SYSTEM_LOG: ABOUT_PAGE_LOADED // DEPLOYED_ASE_NODE
        </footer>
      </div>
    </main>
  );
}