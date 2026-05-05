"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";

import type { WineCountrySummary } from "../../types/wine-atlas";
import WineMapLegend from "./WineMapLegend";
import {
  getCountryFill,
  getCountryGlowClass,
  getCountryStroke,
  getCountryStrokeWidth,
} from "./wineMapStyle";

type GeoJsonPosition = [number, number];

type GeoJsonPolygon = GeoJsonPosition[][];

type GeoJsonMultiPolygon = GeoJsonPosition[][][];

type GeoJsonGeometry =
  | {
      type: "Polygon";
      coordinates: GeoJsonPolygon;
    }
  | {
      type: "MultiPolygon";
      coordinates: GeoJsonMultiPolygon;
    };

type GeoJsonFeature = {
  type: "Feature";
  properties?: Record<string, unknown>;
  geometry?: GeoJsonGeometry | null;
};

type GeoJsonFeatureCollection = {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
};

type HoveredCountry = {
  featureKey: string;
  code: string;
  name: string;
  wineCount: number;
  averageRating: number;
  regions: string[];
  explored: boolean;
};

type WineWorldMapProps = {
  countries: WineCountrySummary[];
  selectedCountryCode?: string | null;
  onSelectCountry?: (countryCode: string) => void;
};

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 520;

function projectPosition(position: GeoJsonPosition): [number, number] {
  const [longitude, latitude] = position;

  const x = ((longitude + 180) / 360) * MAP_WIDTH;
  const y = ((90 - latitude) / 180) * MAP_HEIGHT;

  return [x, y];
}

function ringToPath(ring: GeoJsonPosition[]): string {
  if (ring.length === 0) {
    return "";
  }

  const [firstX, firstY] = projectPosition(ring[0]);

  const rest = ring
    .slice(1)
    .map((position) => {
      const [x, y] = projectPosition(position);
      return `L ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return `M ${firstX.toFixed(2)} ${firstY.toFixed(2)} ${rest} Z`;
}

function geometryToPath(geometry?: GeoJsonGeometry | null): string {
  if (!geometry) {
    return "";
  }

  if (geometry.type === "Polygon") {
    return geometry.coordinates.map(ringToPath).join(" ");
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates
      .flatMap((polygon) => polygon.map(ringToPath))
      .join(" ");
  }

  return "";
}

function normalizeCode(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = value.trim().toUpperCase();

  if (!normalized || normalized === "-99") {
    return "";
  }

  return normalized;
}

function getFeatureCode(feature: GeoJsonFeature): string {
  const props = feature.properties ?? {};

  return (
    normalizeCode(props.ISO_A3) ||
    normalizeCode(props.ADM0_A3) ||
    normalizeCode(props.SU_A3) ||
    normalizeCode(props.SOV_A3) ||
    normalizeCode(props.ISO_A3_EH) ||
    normalizeCode(props.iso_a3) ||
    normalizeCode(props.adm0_a3) ||
    normalizeCode(props["ISO3166-1-Alpha-3"]) ||
    normalizeCode(props["Alpha-3"]) ||
    normalizeCode(props.id)
  );
}

function getFeatureName(feature: GeoJsonFeature): string {
  const props = feature.properties ?? {};

  const candidates = [
    props.ADMIN,
    props.NAME,
    props.name,
    props.NAME_EN,
    props.NAME_LONG,
    props.name_long,
    props.SOVEREIGNT,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }

  return "Unknown Country";
}

function formatBottleCount(count: number): string {
  return count === 1 ? "1 bottle" : `${count} bottles`;
}

export default function WineWorldMap({
  countries,
  selectedCountryCode,
  onSelectCountry,
}: WineWorldMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const [geoJson, setGeoJson] = useState<GeoJsonFeatureCollection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountry | null>(
    null
  );

  const countryMap = useMemo(() => {
    return new Map(
      countries.map((country) => [country.code.toUpperCase(), country])
    );
  }, [countries]);
  const normalizedSelectedCountryCode = selectedCountryCode?.toUpperCase() ?? null;

  function moveTooltip(event: MouseEvent<SVGElement>) {
    const container = mapContainerRef.current;
    const tooltip = tooltipRef.current;

    if (!container || !tooltip) {
      return;
    }

    const rect = container.getBoundingClientRect();

    const tooltipWidth = 300;
    const tooltipHeight = 190;
    const offset = 18;

    let x = event.clientX - rect.left + offset;
    let y = event.clientY - rect.top + offset;

    if (x > rect.width - tooltipWidth) {
      x = event.clientX - rect.left - tooltipWidth - offset;
    }

    if (y > rect.height - tooltipHeight) {
      y = event.clientY - rect.top - tooltipHeight - offset;
    }

    x = Math.max(16, x);
    y = Math.max(16, y);

    tooltip.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  useEffect(() => {
    let cancelled = false;

    async function loadMap() {
      try {
        const response = await fetch("/wine-atlas/world-countries-lite.geojson");

        if (!response.ok) {
          throw new Error(`Failed to load world map: ${response.status}`);
        }

        const data = (await response.json()) as GeoJsonFeatureCollection;

        if (!cancelled) {
          setGeoJson(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown map error");
        }
      }
    }

    loadMap();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-[28px] border border-dashed border-rose-100 bg-white/55 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">
          Map Load Failed
        </p>
        <h3 className="mt-3 text-xl font-black text-neutral-950">
          世界地圖資料讀取失敗
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-500">
          請確認 public/wine-atlas/world-countries.geojson 是否存在，而且內容是有效的
          GeoJSON。
        </p>
      </div>
    );
  }

  if (!geoJson) {
    return (
      <div className="rounded-[30px] border border-rose-100/40 bg-[#211821] p-10 text-center">
        <p className="text-sm text-white/45">Loading world map...</p>
      </div>
    );
  }

  return (
    <div
      ref={mapContainerRef}
      className="relative overflow-hidden rounded-[30px] border border-rose-100/20 bg-[#211821] p-4 shadow-[inset_0_0_80px_rgba(255,255,255,0.035)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(229,109,135,0.20),transparent_50%)]" />

      <div className="pointer-events-none absolute bottom-5 left-5 z-20 hidden md:block">
        <WineMapLegend />
      </div>

      <div
        ref={tooltipRef}
        aria-hidden={!hoveredCountry}
        className={`pointer-events-none absolute left-0 top-0 z-30 w-[280px] rounded-3xl p-4 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-md transition-opacity duration-150 ${
          hoveredCountry ? "opacity-100" : "opacity-0"
        } ${
          hoveredCountry?.explored
            ? "border border-rose-300/25 bg-[#2a1822]/92"
            : "border border-white/10 bg-[#1b151b]/88"
        }`}
        style={{ transform: "translate3d(24px, 24px, 0)" }}
      >
        {hoveredCountry && (
          <>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                    hoveredCountry.explored
                      ? "text-rose-300"
                      : "text-white/35"
                  }`}
                >
                  {hoveredCountry.code || "---"}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {hoveredCountry.name}
                </h3>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                  hoveredCountry.explored
                    ? "bg-rose-400/18 text-rose-200"
                    : "bg-white/7 text-white/45"
                }`}
              >
                {hoveredCountry.explored ? "Unlocked" : "Locked"}
              </span>
            </div>

            {hoveredCountry.explored ? (
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-2xl border border-white/8 bg-white/[0.055] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Bottles
                  </p>
                  <p className="mt-1 font-bold text-white">
                    {formatBottleCount(hoveredCountry.wineCount)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.055] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Avg.
                  </p>
                  <p className="mt-1 font-bold text-white">
                    {hoveredCountry.averageRating.toFixed(1)}
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/8 bg-white/[0.055] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Regions
                  </p>
                  <p className="mt-1 leading-6 text-white/70">
                    {hoveredCountry.regions.length > 0
                      ? hoveredCountry.regions.join(" / ")
                      : "尚未記錄產區"}
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-4 rounded-2xl border border-white/8 bg-white/[0.045] p-3 text-sm leading-6 text-white/48">
                尚未記錄酒款，仍被迷霧覆蓋。
              </p>
            )}
          </>
        )}
      </div>

      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label="Wine Atlas world map"
        className="relative z-10 h-auto w-full"
        onMouseMove={(event) => moveTooltip(event)}
        onMouseLeave={() => setHoveredCountry(null)}
      >
        <defs>
          <filter id="wine-gold-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="wine-hover-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {geoJson.features.map((feature, index) => {
          const pathData = geometryToPath(feature.geometry);

          if (!pathData) {
            return null;
          }

          const featureCode = getFeatureCode(feature);
          const featureName = getFeatureName(feature);
          const featureKey = `${featureCode || featureName}-${index}`;

          const matchedCountry = countryMap.get(featureCode);
          const wineCount = matchedCountry?.wineCount ?? 0;
          const isHovered = hoveredCountry?.featureKey === featureKey;
          const isSelected =
            Boolean(matchedCountry) &&
            matchedCountry?.code.toUpperCase() === normalizedSelectedCountryCode;

          const strokeColor = isSelected
            ? "#FFD7E2"
            : isHovered
            ? matchedCountry
              ? "#F4A2B6"
              : "rgba(255,255,255,0.32)"
            : getCountryStroke(wineCount);

          const strokeWidth = isSelected
            ? 1.8
            : isHovered
            ? matchedCountry
              ? 1.25
              : 0.8
            : getCountryStrokeWidth(wineCount);

          const filter =
            wineCount >= 6
              ? "url(#wine-gold-glow)"
              : (isHovered || isSelected) && matchedCountry
              ? "url(#wine-hover-glow)"
              : undefined;

          return (
            <path
              key={featureKey}
              d={pathData}
              fill={getCountryFill(wineCount)}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              vectorEffect="non-scaling-stroke"
              fillRule="evenodd"
              opacity={matchedCountry ? 1 : isHovered ? 0.88 : 0.68}
              className={`cursor-pointer transition duration-200 hover:brightness-125 ${getCountryGlowClass(
                wineCount
              )}`}
              filter={filter}
              onClick={() => {
                if (matchedCountry) {
                  onSelectCountry?.(matchedCountry.code);
                }
              }}
              onMouseEnter={(event) => {
                moveTooltip(event);

                setHoveredCountry({
                  featureKey,
                  code: featureCode || "---",
                  name: matchedCountry?.displayName ?? featureName,
                  wineCount,
                  averageRating: matchedCountry?.averageRating ?? 0,
                  regions: matchedCountry?.regions ?? [],
                  explored: Boolean(matchedCountry),
                });
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}