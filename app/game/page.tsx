export default function GamePage() {
  const sections = [
    {
      title: "玩過的作品",
      description: "之後可以整理自己玩過的作品、類型、簡短印象與個人偏好。",
    },
    {
      title: "喜歡的內容",
      description: "放自己特別喜歡的題材、角色、劇情風格，或值得記錄的作品感受。",
    },
    {
      title: "心得與紀錄",
      description: "之後可以慢慢補作品心得、推薦原因，或是想單獨留下來的筆記。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1fb] text-neutral-900">
      <section className="w-full bg-[linear-gradient(180deg,#efe8ff_0%,#f5f1fb_55%,#f5f1fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
          <div className="rounded-[36px] border border-[#ddd6f3] bg-white/60 p-8 shadow-sm sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7a6ccf]">
              Game
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
              遊戲、作品與個人紀錄
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-neutral-700 sm:text-base">
              這裡之後會整理自己玩過的作品、喜歡的內容，以及想留下來的感想與記錄。
              目前先把架構立起來，之後再慢慢補上更完整的分類與心得。
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
          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-neutral-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                  {item.description}
                </p>
                <div className="mt-6 rounded-2xl border border-dashed border-[#e4ddf8] bg-[#faf8ff] p-4 text-sm leading-7 text-neutral-500">
                  內容之後補上。之後可以放作品列表、分類、評價、短心得或喜歡的元素整理。
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}