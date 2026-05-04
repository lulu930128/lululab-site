import fs from "node:fs";
import path from "node:path";

import EmptyState from "../../../../components/wine-atlas/EmptyState";
import WineCard from "../../../../components/wine-atlas/WineCard";
import WineMap from "../../../../components/wine-atlas/WineMap";
import WineStatsPanel from "../../../../components/wine-atlas/WineStatsPanel";
import type { WineAtlasData, WineStats } from "../../../../types/wine-atlas";

function loadWineAtlasData(): WineAtlasData {
  const filePath = path.join(
    process.cwd(),
    "public",
    "wine-atlas",
    "wine-data.json"
  );

  const raw = fs
    .readFileSync(filePath, "utf-8")
    .replace(/^\uFEFF/, "")
    .trim();

  const parsed = JSON.parse(raw) as WineAtlasData;

  return {
    meta: parsed.meta,
    countries: Array.isArray(parsed.countries) ? parsed.countries : [],
    wines: Array.isArray(parsed.wines) ? parsed.wines : [],
  };
}

function calculateStats(data: WineAtlasData): WineStats {
  const ratedWines = data.wines.filter((wine) => typeof wine.rating === "number");
  const ratingTotal = ratedWines.reduce(
    (sum, wine) => sum + (wine.rating ?? 0),
    0
  );

  return {
    totalWines: data.wines.length,
    exploredCountries: data.countries.length,
    recommendedWines: data.wines.filter((wine) => wine.recommend).length,
    repurchaseWines: data.wines.filter((wine) => wine.repurchase).length,
    averageRating: ratedWines.length > 0 ? ratingTotal / ratedWines.length : 0,
  };
}

export default function WineAtlasPage() {
  const data = loadWineAtlasData();
  const stats = calculateStats(data);

  const recommendedWines = data.wines
    .filter((wine) => wine.recommend)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const recentWines = [...data.wines].sort((a, b) => {
    const aTime = a.tastedDate ? new Date(a.tastedDate).getTime() : 0;
    const bTime = b.tastedDate ? new Date(b.tastedDate).getTime() : 0;
    return bTime - aTime;
  });

  return (
    <main className="min-h-screen bg-[#f7f4f1] px-6 py-16 text-neutral-950 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-rose-400">
              Lifestyle Collection / Cellar
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Wine Atlas
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
              把喝過的酒、產區與心得整理成資料庫，並用紅酒迷霧地圖呈現自己的探索進度。
              第一版先以國家級探索、推薦清單與統計摘要為主。
            </p>
          </div>

          <div className="rounded-[30px] border border-white/70 bg-white/70 p-6 shadow-[0_20px_70px_rgba(35,20,30,0.08)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Updated
            </p>
            <p className="mt-3 text-2xl font-black">{data.meta.updatedAt}</p>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              {data.meta.description}
            </p>
          </div>
        </div>

        <WineStatsPanel stats={stats} />

        <div className="mt-8">
          <WineMap countries={data.countries} />
        </div>

          <section className="mt-12">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
                  Lulu Recommend
                </p>
                <h2 className="mt-3 text-3xl font-black">推薦酒款</h2>
              </div>

              <p className="text-sm text-neutral-500">
                依照推薦標記與評分排序。
              </p>
            </div>

            {recommendedWines.length > 0 ? (
              <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
                {recommendedWines.map((wine) => (
                  <WineCard key={wine.id} wine={wine} />
                ))}
              </div>
            ) : (
              <EmptyState
                eyebrow="No Recommendation"
                title="目前還沒有推薦酒款"
                description="在 Wine Atlas Manager 新增酒款時勾選「推薦」，或之後編輯資料標記推薦，這裡就會顯示你的推薦清單。"
              />
            )}
          </section>

        <section className="mt-12">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              Recent Tasting
            </p>
            <h2 className="mt-3 text-3xl font-black">最近品飲</h2>
          </div>

          {recentWines.length > 0 ? (
            <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-4">
              {recentWines.slice(0, 4).map((wine) => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          ) : (
            <EmptyState
              eyebrow="No Tasting Record"
              title="尚無品飲紀錄"
              description="新增第一筆酒款後，這裡會顯示最近品飲的酒款卡片。"
            />
          )}
        </section>
      </section>
    </main>
  );
}