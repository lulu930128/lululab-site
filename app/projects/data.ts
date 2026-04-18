export interface Stat {
  label: string;
  value: string;
}

export interface StarContent {
  situation: string;
  action: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  category?: string;
  tag?: string;
  status?: string;
  description?: string;     // 改為選填，避免群組容器報錯
  highlights?: string[];
  image?: string;
  techStack?: string[];     // 改為選填
  stats?: Stat[];           // 改為選填
  link?: string;
  review?: string;
  filterCategory?: string;
  keyHighlight?: string;
  isGroup?: boolean;
  projects?: Project[];
  star?: StarContent;
}

export const myExpertise = [
  { id: "01", layer: "AI CORE", title: "Python / AI Design", desc: "專精 LLM 應用、神經網路架構與自動化模型整合。", color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-200", icon: "💠" },
  { id: "02", layer: "AUTOMATION", title: "BAT / Shell Scripts", desc: "開發底層自動化腳本與機台排程系統優化。", color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-200", icon: "⚡" },
  { id: "03", layer: "STORAGE", title: "Data Architecture", desc: "PostgreSQL 結構化設計與大規模數據處理邏輯。", color: "text-purple-500", bg: "bg-purple-50 border-purple-200", icon: "📡" },
  { id: "04", layer: "INTERFACE", title: "HTML / Web Design", desc: "基礎前端介面開發與現代化 UI 互動設計。", color: "text-blue-500", bg: "bg-blue-50 border-blue-200", icon: "🎨" },
];

export const featuredProjects: Project[] = [
  {
    id: "ai-deskpet", 
    category: "Innovation & AI", 
    title: "AI 互動桌寵系統",
    tag: "Independent Project", 
    status: "Active Development",
    description: "結合 LLM 與 Live2D 技術，透過情緒分析與即時語音合成，創造具溫度的數位生命。",
    techStack: ["OpenAI API", "FastAPI", "Edge-TTS", "Live2D", "WebSocket"],
    image: "/images/Projects/桌寵釋例.png",
    stats: [{ label: "Interaction", value: "Real-time" }, { label: "Tech Core", value: "LLM" }],
    link: "/projects/ai-deskpet",
    star: {
      situation: "傳統介面互動枯燥，缺乏情感連結。",
      action: "整合 LLM 記憶機制與擬真語音，優化異步處理提升反應速度。",
      result: "實現異步對話架構，將語音生成延遲控制在 1.2s 內，並解決 LLM 上下文記憶溢出問題。"
    }
  },
  {
    id: "pro-systems", 
    category: "Professional Systems", 
    title: "專業實務系統開發",
    isGroup: true,
    // 為群組容器補上基本屬性或確保 Interface 已設為選填
    description: "高效能系統開發與自動化架構實踐。",
    techStack: ["Node.js", "Python", "Docker"], 
    stats: [],
    projects: [
      {
        id: "security-ctf", 
        title: "校園資安技術刷題平台",
        description: "為學生打造的 CTF 實戰環境。負責整體後端架構與自動化閱卷系統。",
        image: "/images/Projects/security.png",
        techStack: ["Node.js", "Docker SDK", "Redis Queue", "Socket.io"],
        stats: [{ label: "Users", value: "300+" }, { label: "Role", value: "Backend" }],
        link: "/projects/security-platform",
        star: {
          situation: "舊有系統在百人同時刷題時會發生閱卷死鎖。",
          action: "導入 Docker 容器化隔離機制與 Redis 隊列緩衝。",
          result: "利用 Redis 緩衝與 Docker 容器隔離，解決 300+ 用戶同時閱卷造成的資料庫死鎖問題。"
        }
      },
      {
        id: "report-automation", 
        title: "機台日報處理自動化系統",
        description: "針對 ASE 廠內設備數據開發。自動化整合多源資訊，提升數據準確性。",
        image: "/images/Projects/ase.png",
        techStack: ["Python", "Pandas ETL", "SMTP API", "Oracle DB"],
        stats: [{ label: "Efficiency", value: "High" }, { label: "Env", value: "ASE" }],
        link: "/projects/daily-report-automation",
        star: {
          situation: "工程師每日耗費 2 小時手動整理機台數據。",
          action: "利用 Pandas 實作 ETL 流程，透過 SMTP 實現自動派報。",
          result: "整合多源數據流，開發自動化校對演算法，將每日手動處理時間從 120min 降低至 5min 內。"
        }
      }
    ]
  }
];

export const compactProjects: Project[] = [
  { id: "stock", title: "智慧型股票分析系統", filterCategory: "Data", description: "Python 量化工具。自動抓取數據並生成視覺化報告。", techStack: ["Python", "Pandas", "Matplotlib"], stats: [{ label: "Indicators", value: "12+" }] },
  { id: "site", title: "LuluLab 個人網站", filterCategory: "Web", description: "採用 Next.js 與 Tailwind 打造。實驗 Bento Box 排版與毛玻璃互動效果。", techStack: ["React", "Next.js", "Vercel"], stats: [{ label: "Perf", value: "98/100" }] }
];

export const roadmapData = [
  { icon: "🐳", title: "Docker & 容器化部署", desc: "學習將後端專案與腳本容器化，優化部署流程與穩定度。" },
  { icon: "🧠", title: "LLM 邊緣計算與微調", desc: "優化 AI 桌寵的反饋速度與互動深度。" }
];