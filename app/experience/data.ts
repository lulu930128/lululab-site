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
      developer: "Favorite",
      description: "收錄玩過的作品、喜歡的題材、角色與劇情，以及那些真的有留下印象的內容。",
      image: "images/experience/gal/さくら、もゆ/KURO_e108b.png", 
      tags: ["Sad", "Masterpiece"],
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
      tags: ["Sad","Short", "Masterpiece"],
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
      tags: ["Sad","Literature", "Masterpiece"],
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
      tags: ["Sad","Short", "Masterpiece"],
      score: "9.5 / 10",
      playtime: "14 小時",
      review: "s"
    },
    {
    id: "g5",
    title: "9-nine-",
    developer: "ぱれっと",
    description: "",
    image: "images/experience/gal/9nine/cover.png",
    tags: ["Moe","Music","Mystery"],
    score: "",
    playtime: "45 小時",
    review: ""
  },
  {
    id: "g6",
    title: "Summer Pockets",
    developer: "Key",
    description: "",
    image: "images/experience/gal/Summer Pockets/cover.png",
    tags: ["Sad", "Summer"],
    score: "",
    playtime: "55 小時",
    review: ""
  },
  {
    id: "g7",
    title: "アストラエアの白き永遠",
    developer: "FAVORITE",
    description: "",
    image: "images/experience/gal/アストラエアの白き永遠/cover.png",
    tags: ["Sad", "Fantasy"],
    score: "",
    playtime: "40 小時",
    review: ""
  },
  {
    id: "g8",
    title: "星空のメモリア",
    developer: "FAVORITE",
    description: "",
    image: "images/experience/gal/星空のメモリア/cover.png",
    tags: ["Sad", "Starry Sky"],
    score: "",
    playtime: "35 小時",
    review: ""
  },
  {
    id: "g9",
    title: "初雪櫻",
    developer: "SAGA PLANETS",
    description: "",
    image: "images/experience/gal/hatsuyuki/cover.png",
    tags: ["Sad", "Winter"],
    score: "",
    playtime: "30 小時",
    review: ""
  },
  {
    id: "g10",
    title: "さくらの雲＊スカアレットの恋",
    developer: "きゃべつそふと",
    description: "",
    image: "images/experience/gal/さくらの雲＊スカアレットの恋/cover.png",
    tags: ["Mystery", "Romance"],
    score: "",
    playtime: "35 小時",
    review: ""
  },
  {
    id: "g11",
    title: "いろとりどりのセカイ",
    developer: "FAVORITE",
    description: "",
    image: "images/experience/gal/いろとりどりのセカイ/cover.png",
    tags: ["Sad", "Fantasy"],
    score: "",
    playtime: "38 小時",
    review: ""
  },
  {
    id: "g12",
    title: "枯れない世界と終わる花",
    developer: "SWEET&TEA",
    description: "",
    image: "images/experience/gal/枯れない世界と終わる花/cover.png",
    tags: ["Short", "Sad", "Fantasy"],
    score: "",
    playtime: "20 小時",
    review: ""
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