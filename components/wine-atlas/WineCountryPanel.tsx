import type { WineCountrySummary, WineItem } from "../../types/wine-atlas";
import WineCountrySnapshot from "./WineCountrySnapshot";
import WinePassportStamp from "./WinePassportStamp";

type WineCountryPanelProps = {
  country: WineCountrySummary | null;
  wines: WineItem[];
};

function formatBottleCount(count: number) {
  return count === 1 ? "1 bottle" : `${count} bottles`;
}

function getFeaturedWine(wines: WineItem[]) {
  return [...wines].sort((a, b) => {
    const ratingDiff = (b.rating ?? 0) - (a.rating ?? 0);

    if (ratingDiff !== 0) {
      return ratingDiff;
    }

    const aTime = a.tastedDate ? new Date(a.tastedDate).getTime() : 0;
    const bTime = b.tastedDate ? new Date(b.tastedDate).getTime() : 0;

    return bTime - aTime;
  })[0];
}

export default function WineCountryPanel({
  country,
  wines,
}: WineCountryPanelProps) {
  if (!country) {
    return (
      <section className="mt-5 rounded-[28px] border border-dashed border-rose-100 bg-white/50 p-6 text-center shadow-[0_18px_50px_rgba(35,20,30,0.04)] backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">
          Current Country
        </p>

        <h3 className="mt-3 text-lg font-black text-neutral-950">
          點擊地圖上的已探索國家
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-neutral-500">
          選取國家後，這裡會顯示目前國家的探索摘要與代表酒款。
        </p>
      </section>
    );
  }

  const featuredWine = getFeaturedWine(wines);

  return (
    <section className="mt-5 overflow-hidden rounded-[30px] border border-rose-100/80 bg-white/72 shadow-[0_18px_55px_rgba(35,20,30,0.075)] backdrop-blur-md">
      <div className="h-[3px] bg-gradient-to-r from-rose-300 via-rose-400 to-transparent" />

      <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative min-h-[260px] overflow-hidden border-b border-[#ead6dc]/80 p-5 lg:border-b-0 lg:border-r">
          <WineCountrySnapshot countryCode={country.code} />
          <WinePassportStamp countryCode={country.code} variant="entry" />

          <div className="relative z-[2]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_14px_rgba(244,63,94,0.28)]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Current Country
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-black text-neutral-950">
                {country.displayName}
              </h3>

              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-rose-400">
                {country.code}
              </span>
            </div>

            <p className="mt-1 text-sm text-neutral-400">{country.name}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-500">
                {formatBottleCount(country.wineCount)}
              </span>

              <span className="rounded-full border border-neutral-100 bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-600">
                Avg {country.averageRating.toFixed(1)}
              </span>

              {country.regions.length > 0 ? (
                country.regions.slice(0, 4).map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-neutral-100 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500 shadow-sm"
                  >
                    {region}
                  </span>
                ))
              ) : (
                <span className="rounded-full border border-neutral-100 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-400">
                  尚未記錄產區
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Featured Bottle
              </p>

              <h4 className="mt-2 text-lg font-black text-neutral-950">
                代表酒款
              </h4>
            </div>

            {wines.length > 1 && (
              <p className="text-xs leading-6 text-neutral-500">
                Showing 1 of {wines.length} bottles
              </p>
            )}
          </div>

          {featuredWine ? (
            <article className="mt-4 rounded-[24px] border border-[#ead6dc]/80 bg-white/78 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h5 className="font-black text-neutral-950">
                    {featuredWine.name}
                  </h5>

                  <p className="mt-1 text-sm text-neutral-500">
                    {featuredWine.winery || "Unknown Winery"}
                    {featuredWine.vintage ? ` · ${featuredWine.vintage}` : ""}
                  </p>
                </div>

                {typeof featuredWine.rating === "number" && (
                  <span className="rounded-2xl bg-neutral-950 px-3 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                    {featuredWine.rating.toFixed(1)}
                  </span>
                )}
              </div>

              {featuredWine.note && (
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-500">
                  {featuredWine.note}
                </p>
              )}

              <div className="mt-3 flex flex-wrap gap-2">
                {featuredWine.recommend && (
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                    推薦
                  </span>
                )}

                {featuredWine.repurchase && (
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                    可回購
                  </span>
                )}

                {featuredWine.region && (
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                    {featuredWine.region}
                  </span>
                )}

                {featuredWine.type && (
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize text-neutral-500">
                    {featuredWine.type}
                  </span>
                )}
              </div>
            </article>
          ) : (
            <p className="mt-4 rounded-[22px] border border-dashed border-rose-100 bg-white/60 p-6 text-sm text-neutral-400">
              這個國家目前沒有可顯示的酒款資料。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}