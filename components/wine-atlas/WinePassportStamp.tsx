"use client";

import { useEffect, useRef } from "react";

type WinePassportStampProps = {
  countryCode: string;
  variant?: "entry" | "cellar" | "atlas";
};

function getStampSeed(countryCode: string) {
  return countryCode
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export default function WinePassportStamp({
  countryCode,
  variant = "entry",
}: WinePassportStampProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const roughLayerRef = useRef<SVGGElement | null>(null);

  const normalizedCode = countryCode.toUpperCase();

  const topLabel =
    variant === "cellar"
      ? "CELLAR ENTRY"
      : variant === "atlas"
      ? "WINE ATLAS"
      : "WINE PASSPORT";

  const bottomLabel =
    variant === "cellar"
      ? "LOGGED"
      : variant === "atlas"
      ? "ENTRY MARK"
      : "ENTRY";

  useEffect(() => {
    let cancelled = false;

    async function drawStamp() {
      const svg = svgRef.current;
      const roughLayer = roughLayerRef.current;

      if (!svg || !roughLayer) {
        return;
      }

      const roughModule = await import("roughjs");

      if (cancelled) {
        return;
      }

      roughLayer.replaceChildren();

      const rough = roughModule.default;
      const rc = rough.svg(svg);

      const seed = getStampSeed(normalizedCode);
      const ink = "rgba(183, 68, 102, 0.56)";
      const weakInk = "rgba(183, 68, 102, 0.34)";

      const outer = rc.ellipse(75, 45, 136, 62, {
        seed,
        stroke: ink,
        strokeWidth: 2,
        roughness: 2.4,
        bowing: 2.2,
      });

      const inner = rc.ellipse(75, 45, 116, 47, {
        seed: seed + 7,
        stroke: weakInk,
        strokeWidth: 1.25,
        roughness: 2.1,
        bowing: 1.8,
      });

      const lineTop = rc.line(30, 32, 120, 32, {
        seed: seed + 11,
        stroke: weakInk,
        strokeWidth: 1,
        roughness: 1.8,
      });

      const lineBottom = rc.line(30, 58, 120, 58, {
        seed: seed + 13,
        stroke: weakInk,
        strokeWidth: 1,
        roughness: 1.8,
      });

      roughLayer.append(outer, inner, lineTop, lineBottom);
    }

    drawStamp();

    return () => {
      cancelled = true;
    };
  }, [normalizedCode]);

  return (
    <div className="pointer-events-none absolute bottom-4 left-5 z-[1] h-[86px] w-[148px] rotate-[-7deg] opacity-[0.62] mix-blend-multiply">
      <svg
        ref={svgRef}
        viewBox="0 0 150 90"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <g ref={roughLayerRef} />

        <text
          x="75"
          y="28"
          textAnchor="middle"
          className="fill-rose-600"
          style={{
            fontSize: 8.5,
            fontWeight: 900,
            letterSpacing: "0.22em",
          }}
        >
          {topLabel}
        </text>

        <text
          x="75"
          y="51"
          textAnchor="middle"
          className="fill-neutral-900"
          style={{
            fontSize: 22,
            fontWeight: 950,
            letterSpacing: "0.18em",
          }}
        >
          {normalizedCode}
        </text>

        <text
          x="75"
          y="66"
          textAnchor="middle"
          className="fill-neutral-500"
          style={{
            fontSize: 8,
            fontWeight: 900,
            letterSpacing: "0.24em",
          }}
        >
          {bottomLabel}
        </text>

        <g opacity="0.32">
          <circle cx="33" cy="44" r="1.3" className="fill-rose-500" />
          <circle cx="117" cy="44" r="1.3" className="fill-rose-500" />
          <circle cx="75" cy="75" r="0.9" className="fill-rose-500" />
        </g>
      </svg>
    </div>
  );
}