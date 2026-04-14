export default function HomePage() {
  const categories = [
    {
      title: "Projects",
      description: "分類說明之後補上。",
      href: "/projects",
    },
    {
      title: "Language",
      description: "分類說明之後補上。",
      href: "/language",
    },
    {
      title: "Game",
      description: "分類說明之後補上。",
      href: "/game",
    },
    {
      title: "About",
      description: "分類說明之後補上。",
      href: "/about",
    },
  ];

  const currentFocus = [
    "個人網站持續建置中",
    "桌寵 Demo 與展示頁規劃中",
    "之後會逐步拆出 Projects / Language / Game / About 子頁",
  ];

  return (
    <main className="min-h-screen bg-[#f5f1fb] text-neutral-900">
      <section className="w-full bg-[linear-gradient(180deg,#efe8ff_0%,#f5f1fb_55%,#f5f1fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-6 lg:px-10 lg:pb-14 lg:pt-8">
          <div className="overflow-hidden rounded-[36px] border border-[#ddd6f3] bg-white/40 shadow-sm">
            <div className="grid min-h-[520px] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.26em] text-[#7a6ccf]">
                    Lulu
                  </p>

                  <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
                    一個放作品、興趣與紀錄的個人基地
                  </h1>

                  <div className="mt-6 max-w-2xl space-y-3 text-sm leading-7 text-neutral-700 sm:text-base">
                    <p>Lulu星</p>
                    <p>ASE, 設備工程師</p>
                    <p>
                      曾接觸過的東西：程式 / 資料管控 / 剪輯 / 修圖 / 調音 /
                      調酒 / 咖啡 / 簡易摩托維修 / 小物件維修
                    </p>
                    <p className="text-[#5f569f]">
                      最喜歡的一句話：いつもきみの隣に、幸せな魔法がありますように
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#demo"
                      className="rounded-full bg-[#7f6fd8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6e5fcb]"
                    >
                      看 Demo
                    </a>
                    <a
                      href="#categories"
                      className="rounded-full border border-[#d9d0f4] bg-white/80 px-5 py-3 text-sm font-medium text-[#6658bb] transition hover:bg-white"
                    >
                      看分類
                    </a>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f1ecff] px-3 py-1 text-xs font-medium text-[#6d60c7]">
                    Project Archive
                  </span>
                  <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-medium text-[#5471c6]">
                    Language Notes
                  </span>
                  <span className="rounded-full bg-[#f6efff] px-3 py-1 text-xs font-medium text-[#9167c8]">
                    Game Record
                  </span>
                </div>
              </div>

              <div className="relative min-h-[280px] lg:min-h-full">
                <img
                  src="/images/home-banner.jpg"
                  alt="Lulu banner"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(123,99,214,0.08),rgba(92,130,214,0.12))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[32px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                Featured Demo
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-neutral-950">
                桌寵 Demo
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                這裡先放桌寵專案的展示影片。之後可以補上簡短說明、技術標籤，
                或改成 YouTube 嵌入版本。
              </p>

              <div className="mt-6 overflow-hidden rounded-[24px] border border-[#e8e0fb] bg-black shadow-sm">
                <video controls preload="metadata" className="aspect-video w-full">
                  <source src="/videos/deskpet-demo.mp4" type="video/mp4" />
                  你的瀏覽器不支援影片播放。
                </video>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[32px] border border-[#ddd6f3] bg-[#faf7ff] p-6 shadow-sm sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                  Current Focus
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-neutral-950">
                  目前重點
                </h3>

                <div className="mt-5 grid gap-3">
                  {currentFocus.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#e6def9] bg-white px-4 py-4 text-sm leading-7 text-neutral-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                  Intro
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-neutral-950">
                  這裡會慢慢長出更多內容
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                  首頁先當作總入口，之後會再分出 Projects、Language、Game、
                  About 等獨立子頁，把專案、興趣與紀錄慢慢整理起來。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                Main Sections
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">
                主分類入口
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              這裡先作為首頁的總入口，之後每個分類都可以拆成自己的頁面。
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#cfc2f4] hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-neutral-950">
                    {item.title}
                  </h3>
                  <span className="text-lg text-[#8a79da] transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-4 min-h-[56px] text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>

                <div className="mt-6 h-24 rounded-2xl border border-dashed border-[#e4ddf8] bg-[#faf8ff]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                Projects
              </p>
              <h3 className="mt-3 text-2xl font-semibold">代表內容預留區</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                之後可以放股票資訊系統、桌寵 vNext、自動化專案等精選內容。
              </p>
            </div>

            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                Language
              </p>
              <h3 className="mt-3 text-2xl font-semibold">語言內容預留區</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                之後可以放日文學習紀錄、筆記整理、遊戲中遇到的句型與表達。
              </p>
            </div>

            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                Game
              </p>
              <h3 className="mt-3 text-2xl font-semibold">遊戲內容預留區</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                之後可以放玩過的作品、心得、分類整理或你自己想收錄的內容。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[linear-gradient(180deg,#f5f1fb_0%,#ece6fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="rounded-[32px] border border-[#d7cff2] bg-white/80 p-8 shadow-sm backdrop-blur sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="flex items-center gap-5">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#e9e1fb] shadow-sm">
                  <img
                    src="/images/profile-avatar.jpg"
                    alt="Lulu avatar"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#7a6ccf]">
                    Contact / Footer
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
                    Lulu
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    一個慢慢整理專案、興趣與紀錄的個人網站。
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e3dbf9] bg-white px-5 py-4 text-sm leading-7 text-neutral-700">
                  <p className="font-medium text-neutral-950">目前身份</p>
                  <p className="mt-2">ASE, 設備工程師</p>
                </div>

                <div className="rounded-2xl border border-[#e3dbf9] bg-white px-5 py-4 text-sm leading-7 text-neutral-700">
                  <p className="font-medium text-neutral-950">GitHub</p>
                  <p className="mt-2">lulu930128</p>
                </div>

                <div className="rounded-2xl border border-[#e3dbf9] bg-white px-5 py-4 text-sm leading-7 text-neutral-700">
                  <p className="font-medium text-neutral-950">Email</p>
                  <p className="mt-2">之後補上</p>
                </div>

                <div className="rounded-2xl border border-[#e3dbf9] bg-white px-5 py-4 text-sm leading-7 text-neutral-700">
                  <p className="font-medium text-neutral-950">網站狀態</p>
                  <p className="mt-2">Building in progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}