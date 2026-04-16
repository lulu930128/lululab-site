export default function AboutPage() {
  const touchedThings = [
    "程式",
    "資料管控",
    "剪輯",
    "修圖",
    "調音",
    "調酒",
    "咖啡",
    "簡易摩托維修",
    "小物件維修",
  ];

  return (
    <main className="min-h-screen bg-[#f5f1fb] text-neutral-900">
      <section className="w-full bg-[linear-gradient(180deg,#efe8ff_0%,#f5f1fb_55%,#f5f1fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
          <div className="rounded-[36px] border border-[#ddd6f3] bg-white/60 p-8 shadow-sm sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7a6ccf]">
              About
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
              關於我與這個網站
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-neutral-700 sm:text-base">
              這裡會慢慢整理我是誰、碰過哪些東西、現在正在做什麼，
              還有這個網站想一步一步長成什麼樣子。
            </p>

            <div className="mt-8">
              <a
                href="/"
                className="rounded-full border border-[#d9d0f4] bg-white px-5 py-3 text-sm font-medium text-[#6658bb] transition hover:bg-[#faf7ff]"
              >
                回首頁
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral-950">關於我</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-600 sm:text-base">
                <p>Lulu星</p>
                <p>目前在 ASE 擔任設備工程師。</p>
                <p>
                  我喜歡把碰過的東西整理成可以慢慢累積的樣子，也喜歡把想法做成能實際運作的內容。
                </p>
                <p>
                  這個網站之後會慢慢收錄我的專案、學習、興趣與作品紀錄，作為自己的個人基地。
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral-950">我碰過的東西</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {touchedThings.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e2daf8] bg-[#faf7ff] px-3 py-2 text-sm text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral-950">目前重心</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                目前主要在整理個人網站、AI 桌寵相關展示，以及之後想慢慢拆出的分類內容。
              </p>
            </div>

            <div className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral-950">這個網站的方向</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                這裡不只是作品展示，也會慢慢放進學習、興趣、遊戲與其他想記錄下來的東西。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}