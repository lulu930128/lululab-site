export interface Stat {
  label: string;
  value: string;
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
  highlight?: string;
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
    tag: "Primary Project",
    status: "Active Development",
    description:
      "以 Live2D 為互動載體的 AI 桌寵系統。核心整合了長短期記憶、情緒解析與非同步通訊流程，讓角色回應更具連貫性。",
    techStack: ["FastAPI", "LLM Memory", "Async Pipeline", "WebSocket"],
    image: "/images/Projects/桌寵釋例.png",
    stats: [{ label: "Architecture", value: "Async Event-Driven" }],
    link: "/projects/ai-deskpet",
    highlight: 
      "自主建立具備記憶分離與狀態延續的後端決策基礎。透過非同步管線解決即時互動斷點，讓系統不僅互動自然，且具備高度可擴充性。"
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
        highlight: "建立具備長短期記憶分離、角色狀態延續與即時前後端同步能力的後端基礎，讓桌寵互動更自然，也更容易擴充。"
      },
      {
        id: "report-automation", 
        title: "機台日報處理自動化系統",
        description: "針對 ASE 廠內設備數據開發。自動化整合多源資訊，提升數據準確性。",
        image: "/images/Projects/ase.png",
        techStack: ["Python", "Pandas ETL", "SMTP API", "Oracle DB"],
        stats: [{ label: "Efficiency", value: "High" }, { label: "Env", value: "ASE" }],
        link: "/projects/daily-report-automation",
        highlight: "建立具備長短期記憶分離、角色狀態延續與即時前後端同步能力的後端基礎，讓桌寵互動更自然，也更容易擴充。"
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