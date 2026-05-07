"use client";

import { useMemo, useState } from "react";

import type { WineCountrySummary, WineItem } from "../../types/wine-atlas";
import WineCountryPanel from "./WineCountryPanel";
import WineWorldMap from "./WineWorldMap";
import {
  getCountryFill,
  shouldUseGoldAccent,
  wineMapColors,
} from "./wineMapStyle";

type WineMapProps = {
  countries: WineCountrySummary[];
  wines: WineItem[];
};


export default function WineMap({ countries, wines }: WineMapProps) {
  const hasCountries = countries.length > 0;

  const sortedCountries = useMemo(
    () => [...countries].sort((a, b) => b.wineCount - a.wineCount),
    [countries]
  );

  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    sortedCountries[0]?.code ?? null
  );

  const selectedCountry =
    sortedCountries.find((country) => country.code === selectedCountryCode) ??
    null;

  const selectedCountryWines = useMemo(() => {
    if (!selectedCountryCode) {
      return [];
    }

    return wines.filter(
      (wine) => wine.countryCode.toUpperCase() === selectedCountryCode
    );
  }, [wines, selectedCountryCode]);

  const useScroll = sortedCountries.length > 3;
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
        <WineWorldMap
          countries={countries}
          selectedCountryCode={selectedCountryCode}
          onSelectCountry={setSelectedCountryCode}
        />
      </div>

      <WineCountryPanel
        country={selectedCountry}
        wines={selectedCountryWines}
      />

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
        <div className="mt-8 rounded-[30px] border border-rose-100/80 bg-white/72 p-5 shadow-[0_18px_50px_rgba(35,20,30,0.065)] backdrop-blur-md">
          <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Explored Countries
              </p>
              <h3 className="mt-2 text-lg font-black text-neutral-950">
                已探索國家
              </h3>
            </div>

            <p className="text-xs leading-6 text-neutral-500">
              依照酒款數量排序，作為地圖探索進度摘要。
            </p>
          </div>

            <div
              className={`divide-y divide-[#ead6dc]/80 ${
                useScroll ? "max-h-[260px] overflow-y-auto pr-2" : ""
              }`}
            style={
              useScroll
                ? {
                    scrollbarWidth: "thin",
                  }
                : undefined
            }
          >
            {sortedCountries.map((country) => {
              const fill = getCountryFill(country.wineCount);
              const useGold = shouldUseGoldAccent(country.wineCount);
              const isSelected = country.code === selectedCountryCode;

              return (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => setSelectedCountryCode(country.code)}
                  className={`grid w-full gap-3 rounded-[22px] px-4 py-4 text-left transition md:grid-cols-[1.2fr_0.8fr_1.4fr] md:items-center ${
                    isSelected
                      ? "border border-rose-100 bg-rose-50/85 shadow-[0_14px_36px_rgba(244,63,94,0.12)]"
                      : "border border-transparent hover:border-rose-100/70 hover:bg-white/80 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-3.5 w-3.5 rounded-full border transition ${
                        isSelected ? "scale-125" : ""
                      }`}
                      style={{
                        backgroundColor: fill,
                        borderColor: useGold
                          ? wineMapColors.gold
                          : isSelected
                          ? "rgba(244, 63, 94, 0.75)"
                          : "rgba(190, 120, 140, 0.28)",
                        boxShadow: useGold
                          ? `0 0 14px ${wineMapColors.gold}66`
                          : isSelected
                          ? "0 0 14px rgba(244,63,94,0.28)"
                          : "none",
                      }}
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-[0.22em] ${
                            isSelected ? "text-rose-500" : "text-rose-300"
                          }`}
                        >
                          {country.code}
                        </span>
                        <h4 className="text-base font-black text-neutral-950">
                          {country.displayName}
                        </h4>
                      </div>

                      <p className="mt-1 text-xs text-neutral-400">
                        {country.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-rose-50 px-3 py-1 font-semibold text-rose-500">
                      {country.wineCount}{" "}
                      {country.wineCount === 1 ? "bottle" : "bottles"}
                    </span>

                    <span className="rounded-full bg-neutral-100 px-3 py-1 font-semibold text-neutral-500">
                      Avg {country.averageRating.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {country.regions.length > 0 ? (
                      country.regions.slice(0, 4).map((region) => (
                        <span
                          key={region}
                          className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-500 shadow-sm"
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
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}