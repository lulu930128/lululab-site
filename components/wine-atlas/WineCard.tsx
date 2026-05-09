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

function formatOrigin(wine: WineItem) {
  return [wine.country, wine.region].filter(Boolean).join(" · ");
}

function formatGrapes(grapes: string[]) {
  if (grapes.length === 0) {
    return "";
  }

  if (grapes.length <= 2) {
    return grapes.join(", ");
  }

  return `${grapes.slice(0, 2).join(", ")} +${grapes.length - 2}`;
}

function formatPrice(priceTwd?: number) {
  if (typeof priceTwd !== "number") {
    return "";
  }

  return `NT$ ${priceTwd.toLocaleString("zh-TW")}`;
}

export default function WineCard({ wine }: WineCardProps) {
  const typeLabel = typeLabelMap[wine.type] ?? wine.type;
  const origin = formatOrigin(wine);
  const grapes = formatGrapes(wine.grapes);
  const price = formatPrice(wine.priceTwd);

  const detailItems = [
    wine.vintage ? `${wine.vintage}` : "",
    grapes,
    price,
  ].filter(Boolean);

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_20px_60px_rgba(35,20,30,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-rose-100 hover:bg-white/90 hover:shadow-[0_26px_80px_rgba(80,25,45,0.14)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-rose-100/35 blur-3xl transition duration-300 group-hover:bg-rose-100/55" />

      <div className="relative z-[1]">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-400">
              {typeLabel}
            </p>

            <h3 className="mt-3 line-clamp-2 text-lg font-black leading-7 text-neutral-950">
              {wine.name}
            </h3>

            <p className="mt-1 line-clamp-1 text-sm text-neutral-500">
              {wine.winery || "Unknown Winery"}
            </p>
          </div>

          {typeof wine.rating === "number" && (
            <div className="shrink-0 rounded-2xl bg-neutral-950 px-3 py-2 text-right text-white shadow-[0_12px_28px_rgba(0,0,0,0.14)]">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                Rating
              </p>
              <p className="text-lg font-bold">{wine.rating.toFixed(1)}</p>
            </div>
          )}
        </div>

        {origin && (
          <p className="text-sm font-medium leading-6 text-neutral-700">
            {origin}
          </p>
        )}

        {detailItems.length > 0 && (
          <p className="mt-2 line-clamp-1 text-sm leading-6 text-neutral-500">
            {detailItems.join(" · ")}
          </p>
        )}

        {wine.note && (
          <p className="mt-4 line-clamp-2 text-sm leading-7 text-neutral-600">
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
      </div>
    </article>
  );
}