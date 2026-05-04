import type { WineCountrySummary } from "../../types/wine-atlas";

type WineMapProps = {
  countries: WineCountrySummary[];
};

function getIntensityClass(wineCount: number) {
  if (wineCount >= 6) {
    return "bg-rose-900 text-white";
  }

  if (wineCount >= 3) {
    return "bg-rose-700 text-white";
  }

  if (wineCount >= 1) {
    return "bg-rose-500 text-white";
  }

  return "bg-neutral-200 text-neutral-500";
}

export default function WineMap({ countries }: WineMapProps) {
  const hasCountries = countries.length > 0;

  return (
    <section className="rounded-[34px] border border-white/70 bg-[#171017] p-6 text-white shadow-[0_28px_90px_rgba(35,20,30,0.22)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-300">
            Wine Fog Map
          </p>
          <h2 className="mt-3 text-2xl font-black">
            紅酒迷霧地圖・探索原型
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
            第一版先以國家作為探索單位。喝過的國家會被酒紅色點亮，
            未來再替換為真正的世界地圖與迷霧效果。
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
          Explored：{countries.length} countries
        </div>
      </div>

      {!hasCountries ? (
        <div className="mt-8 rounded-[28px] border border-dashed border-white/15 bg-white/[0.04] p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
            No Country Unlocked
          </p>
          <h3 className="mt-3 text-xl font-black text-white">
            酒窖地圖尚未被點亮
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/50">
            使用 Wine Atlas Manager 新增第一筆酒款並匯出 JSON 後，
            這裡就會顯示已探索的國家與產區。
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {countries.map((country) => (
            <div
              key={country.code}
              className="rounded-[24px] border border-white/10 bg-white/[0.06] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    {country.code}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">
                    {country.displayName}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{country.name}</p>
                </div>

                <div
                  className={`rounded-2xl px-3 py-2 text-center text-sm font-bold ${getIntensityClass(
                    country.wineCount
                  )}`}
                >
                  {country.wineCount}
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-white/60">
                <p>平均評分：{country.averageRating.toFixed(1)}</p>
                <p>
                  已解鎖產區：
                  {country.regions.length > 0
                    ? country.regions.join(" / ")
                    : "尚未記錄"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}