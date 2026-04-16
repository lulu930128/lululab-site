export default function ProjectsPage() {
  const projects = [
    {
      title: "股票資訊抓取整理系統",
      status: "Ongoing",
      description:
        "整理市場資訊、彙整資料來源，讓原本分散的內容變得更容易閱讀、比對與追蹤。",
      tags: ["Python", "Data", "Automation"],
    },
    {
      title: "桌寵 vNext",
      status: "Planning",
      description:
        "以更模組化的方式重建桌寵系統，拆分展示、語音、Bridge 與 runtime，提升後續維護性。",
      tags: ["AI", "LLM", "System Design"],
    },
    {
      title: "個人網站",
      status: "Building",
      description:
        "把專案、學習、興趣與作品紀錄整理成一個可以持續成長的個人基地，並逐步拆分成不同子頁。",
      tags: ["Next.js", "Frontend", "Portfolio"],
    },
    {
      title: "自動化專案",
      status: "Ongoing",
      description:
        "把日常流程、資料整理與輸出步驟自動化，讓重複性工作變得更穩定、更容易維護。",
      tags: ["Automation", "Workflow", "Engineering"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1fb] text-neutral-900">
      <section className="w-full bg-[linear-gradient(180deg,#efe8ff_0%,#f5f1fb_55%,#f5f1fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
          <div className="rounded-[36px] border border-[#ddd6f3] bg-white/60 p-8 shadow-sm sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7a6ccf]">
              Projects
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
              專案整理與開發紀錄
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-neutral-700 sm:text-base">
              這裡會整理目前正在做、做過，或之後還想繼續擴充的專案。
              現階段先以概覽為主，之後再慢慢補上更詳細的介紹、展示畫面、技術結構與開發紀錄。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-full border border-[#d9d0f4] bg-white px-5 py-3 text-sm font-medium text-[#6658bb] transition hover:bg-[#faf7ff]"
              >
                回首頁
              </a>
              <a
                href="#project-list"
                className="rounded-full bg-[#7f6fd8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6e5fcb]"
              >
                查看專案
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="project-list" className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
                Project List
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">
                目前整理中的項目
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              先從最主要的幾個方向開始整理，之後每個項目都可以再拆成自己的詳細頁面。
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[28px] border border-[#ddd6f3] bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-neutral-950">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-[#f2edff] px-3 py-1 text-xs font-medium text-[#6d60c7]">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e2daf8] bg-[#faf7ff] px-3 py-1.5 text-xs font-medium text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-[#e4ddf8] bg-[#faf8ff] p-4 text-sm leading-7 text-neutral-500">
                  詳細頁之後補上。之後這裡可以放展示圖、開發背景、技術架構或操作說明。
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:px-10 lg:pb-20">
          <div className="rounded-[32px] border border-[#ddd6f3] bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6ccf]">
              Notes
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-950 sm:text-3xl">
              之後會補上的內容
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-4 text-sm leading-7 text-neutral-700">
                開發背景與目標
              </div>
              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-4 text-sm leading-7 text-neutral-700">
                技術架構與模組拆分
              </div>
              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-4 text-sm leading-7 text-neutral-700">
                展示畫面與 Demo
              </div>
              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-4 text-sm leading-7 text-neutral-700">
                遇到的問題與調整紀錄
              </div>
              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-4 text-sm leading-7 text-neutral-700">
                後續規劃與擴充方向
              </div>
              <div className="rounded-2xl border border-[#e4ddf8] bg-[#faf7ff] p-4 text-sm leading-7 text-neutral-700">
                相關連結與外部資源
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}