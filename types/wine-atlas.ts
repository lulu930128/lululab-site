export type WineType = "red" | "white" | "sparkling" | "rose" | "dessert" | "fortified" | "other";

export type WineCountrySummary = {
  code: string;
  name: string;
  displayName: string;
  wineCount: number;
  averageRating: number;
  topWineId?: string;
  regions: string[];
};

export type WineItem = {
  id: string;
  name: string;
  winery?: string;
  country: string;
  countryCode: string;
  region?: string;
  vintage?: number;
  type: WineType;
  grapes: string[];
  rating?: number;
  priceTwd?: number;
  tastedDate?: string;
  tags: string[];
  recommend: boolean;
  repurchase: boolean;
  note?: string;
  image?: string;
};

export type WineAtlasMeta = {
  projectName: string;
  description: string;
  version: string;
  updatedAt: string;
};

export type WineAtlasData = {
  meta: WineAtlasMeta;
  countries: WineCountrySummary[];
  wines: WineItem[];
};

export type WineStats = {
  totalWines: number;
  exploredCountries: number;
  recommendedWines: number;
  repurchaseWines: number;
  averageRating: number;
};