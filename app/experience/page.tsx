"use client";

import { useState } from "react";

export default function ExperiencePage() {
  // 控制懸浮視窗 (Modal) 的狀態
  const [selectedGame, setSelectedGame] = useState<any>(null);

  // === 資料陣列區塊 ===
  
  // 旅遊資料 (重量級：預期導向外部獨立文章頁)
  const travelData = [
    {
      id: "t1",
      title: "2026 東京自由行",
      date: "2026.01.14",
      description: "想把去過的地方、當時拍下來的畫面，以及值得留下來的小片段慢慢整理起來。這次去了很多非觀光客的秘境。",
      image: "/images/experience/travel/travel-cover.jpg", // 請換成你的真實照片
      tags: ["Travel", "Kyoto", "Photo"],
      link: "/experience/travel/kyoto-2026", // 獨立網頁的路由
    },
    {
      id: "t2",
      title: "環島機車旅行紀錄",
      date: "2022.7",
      description: "騎著 Jet 繞了一圈，沿途的海風與山景，還有那些路上遇到的人事物。",
      image: "/images/experience/travel/LINE_ALBUM_熱到靠北的環島_260417_1.jpg", 
      tags: ["Roadtrip", "Motorcycle", "Memory"],
      link: "/experience/travel/taiwan-roadtrip",
    }
  ];

  // Galgame 資料 (輕量級：點擊後彈出視窗)
  const galgameData = [
    {
      id: "g1",
      title: "さくら、もゆ",
      developer: "Favorite社",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/さくら、もゆ/KURO_e108b.png", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "103 小時",
      review: "s"
    },
    {
      id: "g2",
      title: "星空鉄道とシロの旅",
      developer: "しらたまこ",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/星空鉄道とシロの旅/galgame-cover.jpg", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "24 小時",
      review: "s"
    },
    {
      id: "g3",
      title: "桜の詩と刻",
      developer: "枕",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/桜の詩と刻/藍.png", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "273 小時",
      review: "s"
    },
    {
      id: "g4",
      title: "ATRI-MyDearMoments",
      developer: "FrontWing、枕",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/atri/dump_frames0000010188.png", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "14 小時",
      review: "s"
    },
  ];

  // Game 資料 (輕量級：點擊後彈出視窗)
  const gameData = [
    {
      id: "gm1",
      title: "a",
      developer: "Nintendo",
      description: "a",
      image: "/images/category-projects.jpg", 
      tags: ["Open World", "Switch"],
      score: "10 / 10",
      playtime: "150+ 小時",
      review: "究極的自由度。左手建造、右手戰鬥，雖然一開始有點不習慣究極手的操作，但上手後完全停不下來，每天都在想還能怎麼惡搞呀哈哈。"
    },
  ];

  return (
    <>
      <main className="relative min-h-screen bg-[#FBFBFE] text-neutral-800">
        
        {/* 背景柔和光暈 */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[5%] h-[800px] w-[800px] rounded-full bg-purple-200/15 blur-[120px]" />
          <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[100px]" />
        </div>

        {/* ================= 右側快轉導航 (Scrollspy) ================= */}
        <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
          <a href="#travel" className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#eCeAf4] bg-white/70 shadow-sm backdrop-blur-md transition hover:-translate-x-1 hover:bg-[#f4f1fb] hover:shadow-md">
            <span className="text-xl transition-transform group-hover:scale-110">✈️</span>
            <span className="absolute right-14 rounded-md bg-neutral-800 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Travel</span>
          </a>
          <a href="#galgame" className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#eCeAf4] bg-white/70 shadow-sm backdrop-blur-md transition hover:-translate-x-1 hover:bg-[#f4f1fb] hover:shadow-md">
            <span className="text-xl transition-transform group-hover:scale-110">🌸</span>
            <span className="absolute right-14 rounded-md bg-neutral-800 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Galgame</span>
          </a>
          <a href="#game" className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#eCeAf4] bg-white/70 shadow-sm backdrop-blur-md transition hover:-translate-x-1 hover:bg-[#f4f1fb] hover:shadow-md">
            <span className="text-xl transition-transform group-hover:scale-110">🎮</span>
            <span className="absolute right-14 rounded-md bg-neutral-800 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Game</span>
          </a>
        </nav>

        {/* 主要內容區塊 */}
        <div className="mx-auto max-w-[1200px] px-6 py-10 lg:px-10 lg:py-16">
          
          {/* Hero Section */}
          <section className="mb-24 flex flex-col justify-between rounded-[2rem] border border-[#eCeAf4] bg-white/70 p-8 shadow-[0_8px_30px_rgb(120,100,180,0.04)] backdrop-blur-md sm:p-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a79da]">
                Experience Index
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
                足跡與娛樂
                <br />
                綜合紀錄區
              </h1>
              <p className="mt-6 text-sm leading-8 text-neutral-600 sm:text-base">
                出去玩的足跡，以及宅在家的娛樂。
                長篇的旅遊日記會獨立成篇，而遊戲與作品的短評則可以直接在這裡點開查看。
              </p>
            </div>
            <a href="/" className="mt-8 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-700 transition hover:-translate-y-0.5 hover:bg-neutral-50 lg:mt-0">
              ← 回首頁
            </a>
          </section>

          {/* 用 space-y 隔開各個大分類 */}
          <div className="space-y-32">

            {/* ================= 1. TRAVEL 旅遊區塊 (重量級) ================= */}
            <section id="travel" className="scroll-mt-32">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-500">✈️</span>
                <div>
                  <h2 className="text-3xl font-semibold text-neutral-900">Travel</h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">長篇遊記與相片集</p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {travelData.map((item) => (
                  <article key={item.id} className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-md md:flex-row md:h-[360px]">
                    {/* 左側照片 */}
                    <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-full md:w-[45%]">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 md:to-white/10" />
                    </div>
                    {/* 右側文字 */}
                    <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-neutral-400">{item.date}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-neutral-900">{item.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600 line-clamp-3">{item.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">{tag}</span>
                          ))}
                        </div>
                      </div>
                      {/* 重量級的按鈕：導向新網頁 */}
                      <a href={item.link} className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 hover:pr-5">
                        閱讀完整遊記 <span className="transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* ================= 2. GALGAME 區塊 (輕量級) ================= */}
            <section id="galgame" className="scroll-mt-32">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-2xl text-pink-500">🌸</span>
                <div>
                  <h2 className="text-3xl font-semibold text-neutral-900">Galgame</h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">作品短評與紀錄</p>
                </div>
              </div>

              {/* 輕量級採用網格排列，節省空間 */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {galgameData.map((item) => (
                  <article key={item.id} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-neutral-100">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#8a79da]">{item.developer}</p>
                      <h3 className="mt-1 text-xl font-semibold text-neutral-900 line-clamp-1">{item.title}</h3>
                      <p className="mt-3 text-sm text-neutral-500 line-clamp-2">{item.description}</p>
                    </div>
                    {/* 輕量級的按鈕：開啟 Modal */}
                    <button 
                      onClick={() => setSelectedGame(item)}
                      className="mt-6 w-full rounded-xl border border-[#eCeAf4] bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-[#f4f1fb] hover:text-[#7a6ccf]"
                    >
                      查看遊玩紀錄
                    </button>
                  </article>
                ))}
              </div>
            </section>

            {/* ================= 3. GAME 區塊 (輕量級) ================= */}
            <section id="game" className="scroll-mt-32">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-500">🎮</span>
                <div>
                  <h2 className="text-3xl font-semibold text-neutral-900">Game</h2>
                  <p className="mt-1 text-sm font-medium text-neutral-500">一般遊戲與白金紀錄</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {gameData.map((item) => (
                  <article key={item.id} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[#eCeAf4] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl bg-neutral-100">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">{item.developer}</p>
                      <h3 className="mt-1 text-xl font-semibold text-neutral-900 line-clamp-1">{item.title}</h3>
                      <p className="mt-3 text-sm text-neutral-500 line-clamp-2">{item.description}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedGame(item)}
                      className="mt-6 w-full rounded-xl border border-[#eCeAf4] bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      查看遊玩紀錄
                    </button>
                  </article>
                ))}
              </div>
            </section>

          </div>
          
          <footer className="mt-32 border-t border-neutral-100/60 pb-6 pt-8 text-center text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} Lulu. All rights reserved.</p>
          </footer>

        </div>
      </main>

      {/* ================= 遊戲短評懸浮視窗 (Modal) ================= */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* 黑色半透明遮罩 (點擊背景關閉) */}
          <div 
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedGame(null)}
          ></div>
          
          {/* Modal 內容視窗 */}
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            
            {/* 關閉按鈕 */}
            <button 
              onClick={() => setSelectedGame(null)}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition hover:bg-black/40"
            >
              ✕
            </button>

            {/* Modal 頂部橫幅 */}
            <div className="relative h-48 w-full bg-neutral-100 sm:h-64">
              <img src={selectedGame.image} alt={selectedGame.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            </div>

            {/* Modal 文字區塊 */}
            <div className="px-8 pb-10 pt-4 sm:px-10">
              <p className="text-xs font-bold uppercase tracking-wider text-[#8a79da]">{selectedGame.developer}</p>
              <h2 className="mt-1 text-3xl font-semibold text-neutral-900">{selectedGame.title}</h2>
              
              {/* 評分與時數小卡 */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3">
                  <span className="text-xl">⭐</span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-neutral-400">個人評分</p>
                    <p className="text-sm font-semibold text-neutral-800">{selectedGame.score}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-neutral-400">遊玩時數</p>
                    <p className="text-sm font-semibold text-neutral-800">{selectedGame.playtime}</p>
                  </div>
                </div>
              </div>

              {/* 完整評論 */}
              <div className="mt-8 border-t border-neutral-100 pt-6">
                <h3 className="text-sm font-semibold text-neutral-900">遊玩短評</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  {selectedGame.review}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      )}

    </>
  );
}