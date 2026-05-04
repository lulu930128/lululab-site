import type { WineItem } from "../../types/wine-atlas";

type WineCardProps = {
  wine: WineItem;
};

const typeLabelMap: Record<string, string> = {
  red: "Red Wine",
  white: "White Wine",
  sparkling: "Sparkling",
  rose: "Rosé",
  dessert: "Dessert",
  fortified: "Fortified",
  other: "Other",
};

export default function WineCard({ wine }: WineCardProps) {
  const typeLabel = typeLabelMap[wine.type] ?? wine.type;

  return (
    <article className="group rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_20px_60px_rgba(35,20,30,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(80,25,45,0.14)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-400">
            {typeLabel}
          </p>
          <h3 className="mt-2 text-lg font-bold text-neutral-950">
            {wine.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            {wine.winery || "Unknown Winery"}
          </p>
        </div>

        {typeof wine.rating === "number" && (
          <div className="rounded-2xl bg-neutral-950 px-3 py-2 text-right text-white">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
              Rating
            </p>
            <p className="text-lg font-bold">{wine.rating.toFixed(1)}</p>
          </div>
        )}
      </div>

      <div className="space-y-2 text-sm text-neutral-600">
        <p>
          <span className="font-semibold text-neutral-900">Origin：</span>
          {wine.country}
          {wine.region ? ` / ${wine.region}` : ""}
        </p>

        <p>
          <span className="font-semibold text-neutral-900">Vintage：</span>
          {wine.vintage ?? "N/A"}
        </p>

        {wine.grapes.length > 0 && (
          <p>
            <span className="font-semibold text-neutral-900">Grapes：</span>
            {wine.grapes.join(", ")}
          </p>
        )}

        {typeof wine.priceTwd === "number" && (
          <p>
            <span className="font-semibold text-neutral-900">Price：</span>
            NT$ {wine.priceTwd.toLocaleString("zh-TW")}
          </p>
        )}
      </div>

      {wine.note && (
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-600">
          {wine.note}
        </p>
      )}

      {wine.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {wine.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}