import { wineMapLegendItems } from "./wineMapStyle";

export default function WineMapLegend() {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.045] p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">
            Map Legend
          </p>
          <h3 className="mt-2 text-lg font-black text-white">
            探索色階
          </h3>
        </div>

        <p className="max-w-md text-xs leading-6 text-white/45">
          色階代表各國已記錄的酒款數量；高探索度國家會以金色描邊作為成就標記。
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {wineMapLegendItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="relative h-8 w-8 rounded-xl border"
                style={{
                  backgroundColor: item.fill,
                  borderColor: item.accent ?? "rgba(255,255,255,0.18)",
                  boxShadow: item.accent
                    ? `0 0 16px ${item.accent}66`
                    : "none",
                }}
              />

              <div>
                <p className="text-sm font-bold text-white">
                  {item.label}
                </p>
                <p className="text-xs text-white/45">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}