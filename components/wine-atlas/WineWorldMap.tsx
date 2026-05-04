"use client";

import { useEffect, useMemo, useState } from "react";

import type { WineCountrySummary } from "../../types/wine-atlas";
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
  code: string;
  name: string;
  wineCount: number;
  averageRating: number;
  regions: string[];
  explored: boolean;
};

type WineWorldMapProps = {
  countries: WineCountrySummary[];
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
    props.SOVEREIGNT,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }

  return "Unknown Country";
}

export default function WineWorldMap({ countries }: WineWorldMapProps) {
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

  useEffect(() => {
    let cancelled = false;

    async function loadMap() {
      try {
        const response = await fetch("/wine-atlas/world-countries.geojson");

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
      <div className="rounded-[28px] border border-dashed border-white/15 bg-white/[0.04] p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
          Map Load Failed
        </p>
        <h3 className="mt-3 text-xl font-black text-white">
          世界地圖資料讀取失敗
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/50">
          請確認 public/wine-atlas/world-countries.geojson 是否存在，而且內容是有效的
          GeoJSON。
        </p>
      </div>
    );
  }

  if (!geoJson) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-10 text-center">
        <p className="text-sm text-white/45">Loading world map...</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0f0a10] p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(216,90,118,0.16),transparent_45%)]" />

      {hoveredCountry && (
        <div className="absolute left-5 top-5 z-20 max-w-[280px] rounded-2xl border border-white/10 bg-[#1c141b]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300">
            {hoveredCountry.code}
          </p>

          <h3 className="mt-2 text-lg font-black text-white">
            {hoveredCountry.name}
          </h3>

          {hoveredCountry.explored ? (
            <div className="mt-3 space-y-1 text-sm text-white/60">
              <p>酒款數：{hoveredCountry.wineCount}</p>
              <p>平均評分：{hoveredCountry.averageRating.toFixed(1)}</p>
              <p>
                產區：
                {hoveredCountry.regions.length > 0
                  ? hoveredCountry.regions.join(" / ")
                  : "尚未記錄"}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-white/45">
              尚未記錄酒款，仍被迷霧覆蓋。
            </p>
          )}
        </div>
      )}

      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label="Wine Atlas world map"
        className="relative z-10 h-auto w-full"
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
        </defs>

        {geoJson.features.map((feature, index) => {
          const pathData = geometryToPath(feature.geometry);

          if (!pathData) {
            return null;
          }

          const featureCode = getFeatureCode(feature);
          const featureName = getFeatureName(feature);
          const matchedCountry = countryMap.get(featureCode);
          const wineCount = matchedCountry?.wineCount ?? 0;

          return (
            <path
              key={`${featureCode || "unknown"}-${index}`}
              d={pathData}
              fill={getCountryFill(wineCount)}
              stroke={getCountryStroke(wineCount)}
              strokeWidth={getCountryStrokeWidth(wineCount)}
              vectorEffect="non-scaling-stroke"
              fillRule="evenodd"
              className={`cursor-pointer transition duration-200 hover:brightness-125 ${getCountryGlowClass(
                wineCount
              )}`}
              filter={wineCount >= 6 ? "url(#wine-gold-glow)" : undefined}
              onMouseEnter={() => {
                setHoveredCountry({
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