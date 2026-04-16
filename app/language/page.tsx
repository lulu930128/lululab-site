export default function LanguagePage() {
  const sections = [
    {
      title: "日文學習",
      description: "之後會整理目前的學習方向、進度，以及平常怎麼接觸日文內容。",
    },
    {
      title: "句型與文法筆記",
      description: "放遊戲、閱讀或學習過程中遇到的句型、文法與常見表達整理。",
    },
    {
      title: "作品中學到的表達",
      description: "把遊戲或其他媒體中看到的日文句子、詞彙或語感記錄下來。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1fb] text-neutral-900">
      <section className="w-full bg-[linear-gradient(180deg,#efe8ff_0%,#f5f1fb_55%,#f5f1fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
          <div className="rounded-[36px] border border-[#ddd6f3] bg-white/60 p-8 shadow-sm sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7a6ccf]">
              Language
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
              語言學習與整理紀錄
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-neutral-700 sm:text-base">
              這裡之後會整理日文學習、句型筆記、遊戲中遇到的表達，以及平常累積下來的內容。
              目前先建立架構，後面再慢慢補進實際筆記與分類。
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
                  內容之後補上。之後可以放筆記列表、分類標籤、學習方式或整理過的句型。
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}