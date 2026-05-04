export type WineMapLevel = 0 | 1 | 2 | 3;

export type WineMapLegendItem = {
  level: WineMapLevel;
  label: string;
  description: string;
  min: number;
  max?: number;
  fill: string;
  accent?: string;
};

export const wineMapColors = {
  unexplored: "#181218",
  level1: "#5A2636",
  level2: "#9F334F",
  level3: "#D85A76",
  gold: "#D8A94A",
  stroke: "#2C2028",
  softStroke: "rgba(255,255,255,0.12)",
  fog: "rgba(10, 7, 10, 0.72)",
};

export function getWineMapLevel(wineCount: number): WineMapLevel {
  if (wineCount >= 6) return 3;
  if (wineCount >= 3) return 2;
  if (wineCount >= 1) return 1;
  return 0;
}

export function getCountryFill(wineCount: number): string {
  const level = getWineMapLevel(wineCount);

  if (level === 3) return wineMapColors.level3;
  if (level === 2) return wineMapColors.level2;
  if (level === 1) return wineMapColors.level1;

  return wineMapColors.unexplored;
}

export function shouldUseGoldAccent(wineCount: number): boolean {
  return wineCount >= 6;
}

export function getCountryStroke(wineCount: number): string {
  return shouldUseGoldAccent(wineCount)
    ? wineMapColors.gold
    : wineMapColors.softStroke;
}

export function getCountryStrokeWidth(wineCount: number): number {
  return shouldUseGoldAccent(wineCount) ? 1.35 : 0.45;
}

export function getCountryGlowClass(wineCount: number): string {
  return shouldUseGoldAccent(wineCount)
    ? "drop-shadow-[0_0_10px_rgba(216,169,74,0.45)]"
    : "";
}

export const wineMapLegendItems: WineMapLegendItem[] = [
  {
    level: 0,
    label: "Unexplored",
    description: "尚未記錄酒款",
    min: 0,
    max: 0,
    fill: wineMapColors.unexplored,
  },
  {
    level: 1,
    label: "First Sip",
    description: "1 - 2 款",
    min: 1,
    max: 2,
    fill: wineMapColors.level1,
  },
  {
    level: 2,
    label: "Ruby Trail",
    description: "3 - 5 款",
    min: 3,
    max: 5,
    fill: wineMapColors.level2,
  },
  {
    level: 3,
    label: "Golden Cellar",
    description: "6 款以上",
    min: 6,
    fill: wineMapColors.level3,
    accent: wineMapColors.gold,
  },
];