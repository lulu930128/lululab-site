import type { WineCountrySummary, WineItem } from "../../types/wine-atlas";

type WineCountryPanelProps = {
  country: WineCountrySummary | null;
  wines: WineItem[];
};

function formatBottleCount(count: number) {
  return count === 1 ? "1 bottle" : `${count} bottles`;
}

function getRecentWines(wines: WineItem[]) {
  return [...wines]
    .sort((a, b) => {
      const aTime = a.tastedDate ? new Date(a.tastedDate).getTime() : 0;
      const bTime = b.tastedDate ? new Date(b.tastedDate).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, 3);
}

export default function WineCountryPanel({
  country,
  wines,
}: WineCountryPanelProps) {
  if (!country) {
    return (
      <section className="mt-5 rounded-[28px] border border-dashed border-rose-100 bg-white/50 p-6 text-center shadow-[0_18px_50px_rgba(35,20,30,0.04)] backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">
          Selected Country
        </p>

        <h3 className="mt-3 text-lg font-black text-neutral-950">
          點擊地圖上的已探索國家
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-neutral-500">
          選取國家後，這裡會顯示該國的探索摘要與代表酒款。
        </p>
      </section>
    );
  }

  const topWine = [...wines].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))[0];
  const recentWines = getRecentWines(wines);

  return (
    <section className="mt-5 overflow-hidden rounded-[30px] border border-rose-100/80 bg-white/72 shadow-[0_18px_55px_rgba(35,20,30,0.075)] backdrop-blur-md">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-[#ead6dc]/80 p-5 lg:border-b-0 lg:border-r">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between lg:flex-col">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Map Focus
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h3 className="text-3xl font-black text-neutral-950">
                  {country.displayName}
                </h3>

                <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-rose-400">
                  {country.code}
                </span>
              </div>

              <p className="mt-1 text-sm text-neutral-400">{country.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:min-w-[300px] lg:min-w-0">
              <div className="rounded-[22px] border border-[#ead6dc]/80 bg-white/75 p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  Bottles
                </p>
                <p className="mt-2 text-xl font-black text-neutral-950">
                  {formatBottleCount(country.wineCount)}
                </p>
              </div>

              <div className="rounded-[22px] border border-[#ead6dc]/80 bg-white/75 p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  Avg.
                </p>
                <p className="mt-2 text-xl font-black text-neutral-950">
                  {country.averageRating.toFixed(1)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[22px] border border-[#ead6dc]/80 bg-white/72 p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Regions
              </p>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {country.regions.length > 0 ? (
                  country.regions.map((region) => (
                    <span
                      key={region}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500"
                    >
                      {region}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-400">
                    尚未記錄產區
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Country Wines
              </p>
              <h4 className="mt-2 text-lg font-black text-neutral-950">
                代表酒款
              </h4>
            </div>

            {topWine && (
              <p className="text-xs leading-6 text-neutral-500">
                Top：{topWine.name}
              </p>
            )}
          </div>

          <div className="mt-4 grid gap-3">
            {recentWines.length > 0 ? (
              recentWines.map((wine) => (
                <article
                  key={wine.id}
                  className="rounded-[24px] border border-[#ead6dc]/80 bg-white/76 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h5 className="font-black text-neutral-950">
                        {wine.name}
                      </h5>

                      <p className="mt-1 text-sm text-neutral-500">
                        {wine.winery || "Unknown Winery"}
                        {wine.vintage ? ` · ${wine.vintage}` : ""}
                      </p>
                    </div>

                    {typeof wine.rating === "number" && (
                      <span className="rounded-2xl bg-neutral-950 px-3 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                        {wine.rating.toFixed(1)}
                      </span>
                    )}
                  </div>

                  {wine.note && (
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-500">
                      {wine.note}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {wine.recommend && (
                      <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                        推薦
                      </span>
                    )}

                    {wine.repurchase && (
                      <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                        可回購
                      </span>
                    )}

                    {wine.region && (
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                        {wine.region}
                      </span>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <p className="rounded-[22px] border border-dashed border-rose-100 bg-white/60 p-6 text-sm text-neutral-400">
                這個國家目前沒有可顯示的酒款資料。
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}