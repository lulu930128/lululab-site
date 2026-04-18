export interface ExperienceItem {
  id: string;
  title: string;
  date?: string;
  developer?: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  score?: string;
  playtime?: string;
  review?: string;
}

export const travelData: ExperienceItem[] = [
    {
      id: "t1",
      title: "2026 東京自由行",
      date: "2026.01.14",
      description: "想把去過的地方、當時拍下來的畫面，以及值得留下來的小片段慢慢整理起來。這次去了很多非觀光客的秘境。",
      image: "/images/experience/travel/travel-cover.jpg", // 請換成你的真實照片
      tags: ["Travel", "Kyoto", "Photo"],
      link: "/experience/travel/kyoto-2026", // 獨立網頁的路由
    },
    {
      id: "t2",
      title: "環島機車旅行紀錄",
      date: "2022.7",
      description: "騎著 Jet 繞了一圈，沿途的海風與山景，還有那些路上遇到的人事物。",
      image: "/images/experience/travel/LINE_ALBUM_熱到靠北的環島_260417_1.jpg", 
      tags: ["Roadtrip", "Motorcycle", "Memory"],
      link: "/experience/travel/taiwan-roadtrip",
    }
];

export const galgameData: ExperienceItem[] = [
  {
      id: "g1",
      title: "さくら、もゆ",
      developer: "Favorite社",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/さくら、もゆ/KURO_e108b.png", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "103 小時",
      review: "s"
    },
    {
      id: "g2",
      title: "星空鉄道とシロの旅",
      developer: "しらたまこ",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/星空鉄道とシロの旅/galgame-cover.jpg", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "24 小時",
      review: "s"
    },
    {
      id: "g3",
      title: "桜の詩と刻",
      developer: "枕",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/桜の詩と刻/藍.png", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "273 小時",
      review: "s"
    },
    {
      id: "g4",
      title: "ATRI-MyDearMoments",
      developer: "FrontWing、枕",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/atri/dump_frames0000010188.png", 
      tags: ["Story", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "14 小時",
      review: "s"
    },
];

export const generalGameData: ExperienceItem[] = [
  {
    id: "gm1",
    title: "a",
    developer: "a",
    description: "a",
    image: "/images/category-projects.jpg", 
    tags: ["Open World", "Switch"],
    score: "10 / 10",
    playtime: "150+ 小時",
    review: "究極的自由度。左手建造、右手戰鬥..."
  },
];