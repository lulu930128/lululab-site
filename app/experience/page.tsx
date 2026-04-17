export default function ExperiencePage() {
  const sections = [
    {
      title: "Travel",
      subtitle: "旅遊紀錄",
      description:
        "想把去過的地方、當時拍下來的畫面，以及值得留下來的小片段慢慢整理起來。",
      image: "/images/travel-cover.jpg",
      tags: ["Travel", "Photo", "Memory"],
      note: "之後可以放地點、照片、旅程短記、想再去的地方，或單次旅行的小整理。",
    },
    {
      title: "Galgame",
      subtitle: "作品與感想",
      description:
        "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "/images/galgame-cover.jpg",
      tags: ["Story", "Character", "Favorite"],
      note: "之後可以放作品列表、簡短心得、喜歡的橋段、推薦原因，或自己偏好的整理。",
    },
    {
      title: "Music",
      subtitle: "音樂紀錄",
      description:
        "把平常喜歡的音樂、歌手、曲風和一些特別有感覺的作品整理成自己的收藏區。",
      image: "/images/music-cover.jpg",
      tags: ["Playlist", "Artist", "Mood"],
      note: "之後可以放歌單、喜歡的曲子、常聽類型，或不同時期常循環的音樂紀錄。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1fb] text-neutral-900">
      <section className="w-full bg-[linear-gradient(180deg,#efe8ff_0%,#f5f1fb_58%,#f5f1fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="overflow-hidden rounded-[36px] border border-[#ddd6f3] bg-white/70 shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7a6ccf]">
                  Experience
                </p>

                <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
                  旅遊、Galgame
                  <br />
                  與生活感受整理區
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-neutral-700 sm:text-base">
                  這裡不只是放遊戲，而是把一些我想留下來的經歷與內容慢慢整理起來。
                  包含旅遊、作品、音樂，以及那些會想再回頭看的生活片段。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/"
                    className="rounded-full border border-[#d9d0f4] bg-white px-5 py-3 text-sm font-medium text-[#6658bb] transition hover:bg-[#faf7ff]"
                  >
                    回首頁
                  </a>
                  <a
                    href="#sections"
                    className="rounded-full bg-[#7f6fd8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6e5fcb]"
                  >
                    看分類
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f1ecff] px-3 py-1 text-xs font-medium text-[#6d60c7]">
                    Travel Archive
                  </span>
                  <span className="rounded-full bg-[#f6efff] px-3 py-1 text-xs font-medium text-[#9167c8]">
                    Galgame Notes
                  </span>
                  <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-medium text-[#5471c6]">
                    Music Record
                  </span>
                </div>
              </div>

              <div className="relative min-h-[260px] lg:min-h-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,115,230,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(115,153,230,0.18),transparent_35%),linear-gradient(135deg,#faf7ff,#f1ecff)]" />
                <div className="relative flex h-full items-end justify-end p-6 sm:p-8 lg:p-10">
                  <div className="grid w-full max-w-md gap-4">
                    <div className="rounded-3xl border border-[#e4ddf8] bg-white/80 p-5 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#7a6ccf]">
                        This page
                      </p>
                      <p className="mt-2 text-sm leading-7 text-neutral-700">
                        先把經歷分類立起來，之後再慢慢補進圖片、心得與實際內容。
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-[#e4ddf8] bg-white/80 p-4 text-center text-sm font-medium text-neutral-700">
                        Travel
                      </div>
                      <div className="rounded-2xl border border-[#e4ddf8] bg-white/80 p-4 text-center text-sm font-medium text-neutral-700">
                        Galgame
                      </div>
                      <div className="rounded-2xl border border-[#e4ddf8] bg-white/80 p-4 text-center text-sm font-medium text-neutral-700">
                        Music
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sections" className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-8">
          <div className="grid gap-10">
            {sections.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[32px] border border-[#ddd6f3] bg-white shadow-sm"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[260px] bg-[#f2ecff]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(123,99,214,0.12))]" />
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                        {item.title}
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">
                        {item.subtitle}
                      </h2>

                      <p className="mt-5 text-sm leading-8 text-neutral-600 sm:text-base">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#e2daf8] bg-[#faf7ff] px-3 py-1.5 text-xs font-medium text-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-dashed border-[#e4ddf8] bg-[#faf8ff] p-4 text-sm leading-7 text-neutral-500">
                      {item.note}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20">
          <div className="rounded-[32px] border border-[#ddd6f3] bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                  Notes
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-neutral-950">
                  之後可以再往下長的方向
                </h3>
              </div>

              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-5 text-sm leading-7 text-neutral-700">
                每個分類之後都可以拆成自己的子頁，例如 travel / galgame / music。
              </div>

              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-5 text-sm leading-7 text-neutral-700">
                之後也可以加上照片牆、作品列表、心得筆記，或你自己習慣的整理方式。
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}