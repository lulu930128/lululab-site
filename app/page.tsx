"use client";

import { useState } from "react";

export default function HomePage() {
  // 處理點擊複製的狀態與動畫
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000); // 2秒後恢復原狀
  };

  const categories = [
    {
      title: "Projects",
      description: "整理目前在做、做過，或之後還想繼續擴充的專案與系統。",
      href: "/projects",
      image: "/images/category-projects.jpg",
      tags: ["Systems", "Automation", "Archive"],
    },
    {
      title: "Language",
      description: "放日文學習、句型筆記、遊戲裡遇到的表達，以及自己的整理紀錄。",
      href: "/language",
      image: "/images/category-language.jpg",
      tags: ["Japanese", "Grammar"],
    },
    {
      title: "Experience",
      description: "收錄旅遊、遊戲、生活趣事，以及想慢慢整理下來的個人經歷與感受。",
      href: "/experience",
      image: "/images/category-experience.jpg",
      tags: ["Travel", "Galgame", "Music"],
    },
    {
      title: "About",
      description: "關於我自己、碰過的東西、目前在做的事，還有這個網站想長成的樣子。",
      href: "/about",
      image: "/images/category-about.jpg",
      tags: ["Profile", "Info"],
    },
  ];

  const currentFocus = [
    {
      id: "quest-build",
      title: "個人網站持續建置中",
      icon: "wrench",
      status: "In Progress - Build / Personal Site",
      progress: 50,
    },
    {
      id: "quest-deskpet",
      title: "AI 桌寵實作中",
      icon: "robot",
      status: "In Progress - Project / Build",
      progress: 20,
    },
    {
      id: "quest-learn",
      title: "日文學習持續進行中 (N3 方向)",
      icon: "brain",
      status: "learning - Study / Language",
      progress: 40,
    },
  ];

  const equipments = [
    { icon: "🍸", title: "調酒", desc: "Bartending", detail: "尋找液體間的完美比例與實驗" },
    { icon: "☕", title: "咖啡", desc: "Coffee", detail: "手沖與義式的日常精神糧食" },
    { icon: "🍵", title: "茶", desc: "Tea", detail: "感受茶葉舒展的平靜時刻" },
    { icon: "⌨️", title: "科技物", desc: "Tech Gadgets", detail: "從 Casio 到桌面的各式設備" },
  ];

  return (
    <>
      <main className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-neutral-800">
        
        {/* 背景柔和光暈 */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
          <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-16 space-y-24">
          
          {/* ================= 區塊 1：首頁簡介與全新個人名片 ================= */}
          <section className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              
              {/* 左側：自我介紹 */}
              <div className="flex flex-col justify-between rounded-[2rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-[0_8px_30px_rgb(120,100,180,0.04)] backdrop-blur-md lg:col-span-7 xl:col-span-8 sm:p-10">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.26em] text-[#7a6ccf]">
                    Lulu / Introduction
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-5xl xl:text-6xl">
                    個人專案、學習歷程
                    <br />
                    與作品紀錄網站
                  </h1>

                  <div className="mt-8 max-w-2xl space-y-3 text-sm leading-7 text-neutral-700 sm:text-base">
                    <p>Lulu星</p>
                    <p>現職 ASE 設備工程師</p>
                    <p>
                      比起只把東西做完，我更喜歡把碰過的東西整理成能持續累積的樣子。
                      這裡會慢慢收錄我的專案、學習、興趣與作品紀錄。
                    </p>
                    <p>
                      專長：後端處理 / 資料整理 / Database 處理
                      <br />
                      興趣：剪輯 / 修圖 / 調音 / 調酒 / 咖啡 / 騎車
                    </p>
                    <p className="mt-2 inline-block text-[#7a6ccf] border-b border-[#eCeAf4] pb-1">
                      最喜歡的一句話：いつもきみの隣に、幸せな魔法がありますように
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-3">
                    <a href="#demo" className="rounded-full bg-[#7f6fd8] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6e5fcb] hover:shadow-md">
                      看 Demo
                    </a>
                    <a href="#categories" className="rounded-full border border-[#d9d0f4] bg-white/80 px-6 py-3 text-sm font-medium text-[#6658bb] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                      看分類
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#f1ecff] px-3 py-1 text-xs font-medium text-[#6d60c7]">Project Archive</span>
                    <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-medium text-[#5471c6]">Language Notes</span>
                    <span className="rounded-full bg-[#f6efff] px-3 py-1 text-xs font-medium text-[#9167c8]">Experience Record</span>
                  </div>
                </div>
              </div>

              {/* 右側：全新視覺名片與聯絡網格 ================= */}
              <div className="flex flex-col gap-4 lg:col-span-5 xl:col-span-4">
                
                {/* 相片主視角卡 (取代原本死版的封面切割) */}
                <div className="group relative flex h-[280px] w-full flex-col justify-end overflow-hidden rounded-[2rem] border border-[#eCeAf4] shadow-[0_8px_30px_rgb(120,100,180,0.04)]">
                  {/* 使用 center_15% 將焦點放在臉部高度，避免切頭 */}
                  <img 
                    src="/images/home-banner.jpg" 
                    alt="Lulu" 
                    className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* 底部暗色漸層，讓白字完美凸顯 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  <div className="relative z-10 flex items-end justify-between p-7">
                    <div className="flex flex-col">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">Profile</p>
                      <h2 className="text-3xl font-medium tracking-wide text-white drop-shadow-md">Lulu星</h2>
                      <div className="mt-2 flex items-center gap-2">
                        {/* 狀態呼吸燈 */}
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        <p className="text-xs font-medium text-neutral-200">ASE Equipment Engineer</p>
                      </div>
                    </div>
                    
                    {/* 小圓形徽章 (點綴用的大頭貼) */}
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                      <img src="/images/profile-avatar.jpg" alt="Avatar" className="h-full w-full object-cover opacity-90" />
                    </div>
                  </div>
                </div>

                {/* 控制中心風格：聯絡資訊 Bento 網格 */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* 目前身份 (全寬) */}
                  <div className="col-span-2 flex items-center gap-4 rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-5 shadow-sm backdrop-blur-md">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-500">
                      👨‍💻
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Current Role</p>
                      <p className="mt-0.5 text-sm font-medium text-neutral-800">ASE 設備工程師</p>
                    </div>
                  </div>

                  {/* GitHub (一鍵複製，半寬) */}
                  <button 
                    onClick={() => handleCopy("lulu930128", "github")}
                    className="group relative flex flex-col items-start justify-center gap-4 rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-600 transition-colors group-hover:bg-neutral-800 group-hover:text-white">
                        {copied === "github" ? "✓" : "G"}
                      </span>
                      <span className="rounded-full bg-neutral-100 px-2 py-1 text-[9px] font-semibold text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">Copy</span>
                    </div>
                    <div className="w-full overflow-hidden text-left">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">GitHub</p>
                      <p className="mt-1 truncate text-sm font-medium text-neutral-800">lulu930128</p>
                    </div>
                  </button>

                  {/* Email (一鍵複製，半寬，過長自動截斷保護版面) */}
                  <button 
                    onClick={() => handleCopy("thomas930128@gmail.com", "email")}
                    className="group relative flex flex-col items-start justify-center gap-4 rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                        {copied === "email" ? "✓" : "@"}
                      </span>
                      <span className="rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-semibold text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">Copy</span>
                    </div>
                    <div className="w-full overflow-hidden text-left">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Email</p>
                      <p className="mt-1 truncate text-sm font-medium text-neutral-800">thomas930128@gmail.com</p>
                    </div>
                  </button>

                  {/* Instagram (一鍵複製，全寬) */}
                  <button 
                    onClick={() => handleCopy("lu_lu128_", "ig")}
                    className="group col-span-2 relative flex items-center justify-between rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xl text-pink-500 transition-transform group-hover:scale-110">
                        📸
                      </span>
                      <div className="text-left">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Instagram</p>
                        <p className="mt-0.5 text-sm font-medium text-neutral-800">lu_lu128_</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] font-bold text-neutral-500 transition-colors group-hover:bg-pink-50 group-hover:text-pink-600">
                      {copied === "ig" ? "Copied!" : "Click to Copy"}
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </section>

          {/* ================= 區塊 2：特色展示與任務規劃 ================= */}
          <section id="demo" className="flex flex-col gap-6">
            <div className="px-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Showcase & Focus</p>
              <h2 className="mt-2 text-3xl font-semibold text-neutral-900">特色展示與任務規劃</h2>
            </div>

            {/* 純影片特色卡片 */}
            <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 p-8 shadow-[0_8px_30px_rgb(120,100,180,0.04)] md:p-10">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Featured Showcase</p>
                <h3 className="mb-6 mt-3 text-2xl font-semibold text-neutral-900">AI 桌寵演示</h3>
                
                <div className="aspect-video h-full w-full overflow-hidden rounded-3xl bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/5yCGeQQ-fpo"
                    title="deskpet demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* 一體化的任務面板 */}
            <div className="flex flex-col rounded-[2rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-[0_8px_30px_rgb(120,100,180,0.04)] backdrop-blur-md sm:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a6ccf]">Recent Focus & Quests</p>
                  <h2 className="mt-2 text-3xl font-semibold text-neutral-950">近期規劃與任務</h2>
                </div>
                <span className="mb-1 text-[11px] font-medium tracking-wider text-neutral-400">QUEST LOG</span>
              </div>
              
              <div className="group mb-8 flex flex-col justify-center overflow-hidden rounded-[1.5rem] border border-[#eCeAf4] bg-neutral-50/50 p-6 shadow-sm ring-1 ring-neutral-100 transition duration-500 hover:bg-white hover:shadow-md">
                <div className="relative z-10 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100 bg-white/80 text-3xl shadow-inner transition-colors group-hover:bg-[#f4f1fb]">
                    ✨
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">Featured Project Intro</p>
                    <h3 className="mt-1 text-2xl font-semibold text-neutral-900">AI 桌寵實作 - TTS建置中</h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-8 text-neutral-600 sm:text-base">
                  近期預計先將LLM/TTS/皮三條路打通並各自有獨立空間不互相影響
                </p>
              </div>

              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {currentFocus.map((quest) => (
                  <div key={quest.id} className="group relative flex h-[160px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#eCeAf4] bg-white/60 p-6 shadow-sm snap-center ring-1 ring-neutral-100 transition-all duration-500 hover:bg-white hover:shadow-lg">
                    <div className="relative z-10 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-2xl shadow-inner transition-colors group-hover:bg-[#f4f1fb]">
                        {quest.icon === 'wrench' ? '🛠️' : quest.icon === 'robot' ? '🤖' : '🧠'}
                      </span>
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Main Quest</p>
                        <h4 className="text-sm font-semibold text-neutral-900">{quest.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-medium text-neutral-500 transition-transform duration-500 group-hover:translate-y-6">
                      <div className={`h-2.5 w-full overflow-hidden rounded-full ${quest.icon === 'wrench' ? 'bg-[#eCeAf4]' : 'bg-[#eef3ff]'} shadow-inner-sm ring-1 ring-neutral-100`}>
                        <div className={`h-full ${quest.icon === 'wrench' ? 'bg-[#7a6ccf]' : 'bg-[#5471c6]'}`} style={{ width: `${quest.progress}%` }}></div>
                      </div>
                      <span className={`shrink-0 rounded-md px-2 py-1 ${quest.icon === 'wrench' ? 'bg-[#f4f1fb] text-[#6d60c7]' : 'bg-[#eef3ff] text-[#5471c6]'}`}>In Progress</span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Status</p>
                      <p className="mt-0.5 text-[11px] font-medium text-neutral-700">{quest.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-8 border-t border-neutral-100/80 pt-8 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6ccf]">Quest Notes</p>
                  <h3 className="mb-4 mt-2 text-lg font-semibold text-neutral-950">規劃備註</h3>
                  <div className="grid gap-3">
                    <div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-4 text-xs font-medium leading-relaxed text-neutral-700 shadow-sm transition hover:bg-neutral-50">
                      目前先以完整製作網站為主
                    </div>
                    <div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-4 text-xs font-medium leading-relaxed text-neutral-700 shadow-sm transition hover:bg-neutral-50">
                      同步學習日文並加強AI桌寵功能
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6ccf]">Site Intro</p>
                  <h3 className="mb-4 mt-2 text-lg font-semibold text-neutral-950">這裡會慢慢長出更多內容</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    首頁先作為入口，之後會再分出 Projects、Language、Experience、About 等獨立子頁，把專案、學習、興趣與記錄慢慢整理起來。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= 區塊 3：主分類入口 ================= */}
          <section id="categories" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 px-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Main Sections</p>
                <h2 className="mt-2 text-3xl font-semibold text-neutral-900">主分類入口</h2>
              </div>
              <p className="text-sm leading-7 text-neutral-600 sm:max-w-md">
                這裡不只是分類，而是整個網站之後會慢慢長成的四個主方向。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
              {categories.map((cat, index) => (
                <a
                  key={cat.title}
                  href={cat.href}
                  className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white p-8 shadow-[0_8px_30px_rgb(120,100,180,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(120,100,180,0.08)] ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
                >
                  <div className="absolute inset-0 z-0">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-white/85 transition-colors duration-500 group-hover:bg-white/65" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {cat.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-neutral-200/50 bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-600 backdrop-blur-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 mt-auto pt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-4xl font-semibold text-neutral-900">{cat.title}</h3>
                      <span className="text-2xl text-[#8a79da] opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">→</span>
                    </div>
                    <p className="mt-4 max-w-md text-sm leading-8 text-neutral-700">{cat.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ================= 區塊 4：Lifestyle & Gears ================= */}
          <section id="lifestyle" className="flex flex-col gap-6">
            <div className="flex items-end justify-between px-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">Lifestyle & Gears</p>
                <h2 className="mt-2 text-3xl font-semibold text-neutral-900">日常道具與調劑</h2>
              </div>
              <span className="mb-1 text-[11px] font-medium tracking-wider text-neutral-400">SCROLL & HOVER ↔</span>
            </div>
            
            <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
              
              {equipments.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative flex h-[160px] min-w-[280px] snap-center flex-col justify-end overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 p-6 shadow-[0_8px_30px_rgb(120,100,180,0.04)] transition-all duration-500 hover:min-w-[340px] hover:bg-white hover:shadow-lg sm:min-w-[300px]"
                >
                  <div className="absolute right-[-10px] top-[-10px] text-8xl opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.08]">{item.icon}</div>
                  
                  <div className="relative z-10 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-2xl shadow-inner transition-colors group-hover:bg-[#f4f1fb]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">{item.desc}</p>
                      <h4 className="text-lg font-semibold text-neutral-900">{item.title}</h4>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-neutral-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="border-t border-neutral-100/60 pb-6 pt-4 text-center text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} Lulu. All rights reserved.</p>
          </footer>

        </div>
      </main>
    </>
  );
}