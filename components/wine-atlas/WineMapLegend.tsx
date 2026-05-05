import { wineMapLegendItems } from "./wineMapStyle";

export default function WineMapLegend() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1b121a]/80 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
        Bottle Count
      </p>

      <div className="flex flex-wrap gap-3">
        {wineMapLegendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full border"
              style={{
                backgroundColor: item.fill,
                borderColor: item.accent ?? "rgba(255,255,255,0.18)",
                boxShadow: item.accent
                  ? `0 0 12px ${item.accent}77`
                  : "none",
              }}
            />

            <span className="text-[11px] font-medium text-white/60">
              {item.level === 0 ? "0" : item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}