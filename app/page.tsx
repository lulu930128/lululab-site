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

  return (
    <main className="min-h-screen bg-[#f6f3fb] text-neutral-900">
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-[#ddd6f3] bg-gradient-to-r from-[#efe8ff] via-[#f7f3ff] to-[#e8f1ff] shadow-sm">
          <div className="relative h-[220px] w-full sm:h-[280px]">
            <img
              src="/images/home-banner.jpg"
              alt="Lulu banner"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2240]/20 via-transparent to-[#6d77c8]/20" />
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/60 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#ede7fb] shadow-sm sm:h-28 sm:w-28">
                <img
                  src="/images/profile-avatar.jpg"
                  alt="Lulu avatar"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7d6ad6]">
                  Lulu
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-neutral-950 sm:text-4xl">
                  Lulu星
                </h1>

                <div className="mt-4 space-y-2 text-sm leading-7 text-neutral-700 sm:text-base">
                  <p>ASE, 設備工程師</p>
                  <p>
                    曾接觸過的東西：程式 / 資料管控 / 剪輯 / 修圖 / 調音 / 調酒 /
                    咖啡 / 簡易摩托維修 / 小物件維修
                  </p>
                  <p className="text-[#5e549b]">
                    最喜歡的一句話：いつもきみの隣に、幸せな魔法がありますように
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
              <span className="rounded-full bg-[#f1ecff] px-3 py-1 text-xs font-medium text-[#6e5fc7]">
                Project Archive
              </span>
              <span className="rounded-full bg-[#edf4ff] px-3 py-1 text-xs font-medium text-[#5470c7]">
                Language Notes
              </span>
              <span className="rounded-full bg-[#f5efff] px-3 py-1 text-xs font-medium text-[#8a63c7]">
                Game Record
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7d6ad6]">
                  Featured Demo
                </p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  桌寵 Demo
                </h2>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#e7e0fb] bg-black">
              <video
                controls
                preload="metadata"
                className="aspect-video w-full"
              >
                <source src="/videos/deskpet-demo.mp4" type="video/mp4" />
                你的瀏覽器不支援影片播放。
              </video>
            </div>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              這裡先放桌寵專案的展示影片。之後可以再加上簡短說明、技術標籤，
              或改成 YouTube 嵌入版本。
            </p>
          </div>

          <div className="rounded-[28px] border border-[#ddd6f3] bg-[#fbf9ff] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7d6ad6]">
              Explore
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              主分類入口
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              這裡先作為主頁入口，之後每個分類都可以拆成自己的子頁面。
            </p>

            <div className="mt-6 grid gap-4">
              {categories.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-[#e4ddf8] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#cfc2f4] hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[#8a79da] transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7d6ad6]">
            About this site
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            一個慢慢長出來的個人基地
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-neutral-600 sm:text-base">
            這裡會逐步整理我的專案、語言學習、遊戲紀錄與個人興趣。現在先從主頁開始，
            後面再慢慢拆出更多子頁面與內容。
          </p>
        </div>
      </section>
    </main>
  );
}