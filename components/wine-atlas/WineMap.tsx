import type { WineCountrySummary } from "../../types/wine-atlas";
import WineWorldMap from "./WineWorldMap";

type WineMapProps = {
  countries: WineCountrySummary[];
};

export default function WineMap({ countries }: WineMapProps) {
  const hasCountries = countries.length > 0;

  return (
    <section className="rounded-[34px] border border-white/70 bg-white/70 p-6 text-neutral-950 shadow-[0_28px_90px_rgba(35,20,30,0.10)] backdrop-blur-md">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
            Wine Fog Map
          </p>
          <h2 className="mt-3 text-2xl font-black">
            紅酒迷霧地圖・探索原型
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
            第一版先以國家作為探索單位。喝過的國家會被酒紅色點亮，
            高探索度國家會出現金色描邊，未來再加入真正的迷霧動畫效果。
          </p>
        </div>

        <div className="rounded-2xl border border-rose-100 bg-rose-50/70 px-4 py-3 text-sm text-rose-500">
          Explored：{countries.length} countries
        </div>
      </div>

      <div className="mt-8">
        <WineWorldMap countries={countries} />
      </div>

      {!hasCountries ? (
        <div className="mt-6 rounded-[28px] border border-dashed border-rose-100 bg-white/55 p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">
            No Country Unlocked
          </p>

          <h3 className="mt-3 text-xl font-black text-neutral-950">
            酒窖地圖尚未被點亮
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-500">
            使用 Wine Atlas Manager 新增第一筆酒款並匯出 JSON 後，
            地圖上的國家就會依照酒款數量被點亮。
          </p>
        </div>
      ) : (
        <div className="mt-8 rounded-[28px] border border-white/70 bg-white/60 p-5 shadow-[0_18px_50px_rgba(35,20,30,0.05)] backdrop-blur-md">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Explored Countries
              </p>
              <h3 className="mt-2 text-lg font-black text-neutral-950">
                已探索國家
              </h3>
            </div>

            <p className="text-xs leading-6 text-neutral-500">
              依照酒款數量排序，作為地圖探索進度的摘要。
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {countries.map((country) => (
              <div
                key={country.code}
                className="rounded-[22px] border border-rose-100/80 bg-white/75 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300">
                      {country.code}
                    </p>

                    <h4 className="mt-2 text-base font-black text-neutral-950">
                      {country.displayName}
                    </h4>

                    <p className="mt-1 text-xs text-neutral-400">
                      {country.name}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-rose-500 px-3 py-2 text-center text-sm font-bold text-white shadow-[0_10px_24px_rgba(244,63,94,0.22)]">
                    {country.wineCount}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-rose-50 px-3 py-1 font-medium text-rose-500">
                    Avg {country.averageRating.toFixed(1)}
                  </span>

                  {country.regions.length > 0 ? (
                    country.regions.slice(0, 3).map((region) => (
                      <span
                        key={region}
                        className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-500"
                      >
                        {region}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-400">
                      尚未記錄產區
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}