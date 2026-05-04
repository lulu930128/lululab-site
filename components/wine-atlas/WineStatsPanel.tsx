import type { WineStats } from "../../types/wine-atlas";

type WineStatsPanelProps = {
  stats: WineStats;
};

export default function WineStatsPanel({ stats }: WineStatsPanelProps) {
  const items = [
    {
      label: "Total Wines",
      value: stats.totalWines,
      desc: "已記錄酒款",
    },
    {
      label: "Countries",
      value: stats.exploredCountries,
      desc: "已探索國家",
    },
    {
      label: "Recommended",
      value: stats.recommendedWines,
      desc: "推薦酒款",
    },
    {
      label: "Avg. Rating",
      value: stats.averageRating.toFixed(1),
      desc: "平均評分",
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[26px] border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_rgba(35,20,30,0.07)] backdrop-blur-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
            {item.label}
          </p>
          <p className="mt-3 text-3xl font-black text-neutral-950">
            {item.value}
          </p>
          <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}