export default function HomePage() {
  const projects = [
    {
      title: "股票資訊抓取整理系統",
      description:
        "整理市場資訊、抓取資料並轉成可讀性較高的分析結果，目標是做成穩定、可擴充的資訊整理流程。",
      tags: ["Python", "Data", "Automation"],
    },
    {
      title: "桌寵 vNext",
      description:
        "以模組化方式重建桌寵系統，拆分 LLM、TTS、Bridge 與 Runtime，提升可維護性與可替換性。",
      tags: ["AI", "LLM", "System Design"],
    },
    {
      title: "自動化專案",
      description:
        "把日常流程、資料整理與報表產出自動化，減少重複操作並提升可追蹤性。",
      tags: ["Automation", "Workflow", "Engineering"],
    },
    {
      title: "個人網站",
      description:
        "目前建置中的作品集網站，作為專案展示、技術整理與個人品牌的主基地。",
      tags: ["Next.js", "Frontend", "Portfolio"],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_30%)]" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-300">
              Lulu Lab
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building practical tools, systems, and interactive projects.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              我正在建立自己的個人網站，整理作品、記錄系統設計思路，並逐步把自動化、資料處理、互動型 AI
              專案整合成可以長期維護的作品集。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.01]"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-neutral-400">Focus</p>
              <p className="mt-2 text-lg font-medium">Automation & Systems</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-neutral-400">Current Direction</p>
              <p className="mt-2 text-lg font-medium">Portfolio Website + Project Rebuild</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-neutral-400">Style</p>
              <p className="mt-2 text-lg font-medium">Practical, traceable, and scalable</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-neutral-950 sm:text-4xl">
              工程導向的實作型開發者
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600">
              我偏好把想法落成可執行、可驗證、可持續維護的系統。近期重心放在個人網站建置、資料整理流程、
              自動化工具與互動型 AI 專案規劃。比起只做展示，我更在意專案能不能真的運作、能不能被重建、以及之後能不能繼續擴充。
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">技能方向</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Python、自動化、資料整理、系統整合、基礎前端開發、專案結構規劃。
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">目前重點</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                先建立作品集網站，作為專案展示基地；之後再逐步接回桌寵 vNext、股票資訊整理系統與更多個人專案。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">目前的專案方向</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600">
            這一版先放作品概覽，後續可以再擴充成專案細節頁、技術堆疊、系統架構圖與開發紀錄。
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-neutral-950">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                這裡會逐步變成我的作品基地
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                目前網站仍在建置中。之後會補上更多專案細節、展示頁面，以及更完整的個人介紹與聯絡方式。
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-neutral-700">
              <a href="https://github.com/lulu930128" className="hover:text-neutral-950">
                GitHub / lulu930128
              </a>
              <p>Email / your-email@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
