"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  Feature,
  FeatureCollection,
  Geometry,
  GeoJsonProperties,
  Position,
} from "geojson";

type WineCountrySnapshotProps = {
  countryCode: string;
};

type WorldFeature = Feature<Geometry, GeoJsonProperties>;

type Point = [number, number];

const VIEW_WIDTH = 320;
const VIEW_HEIGHT = 220;
const PADDING = 18;

function normalizeCode(value: unknown): string {
  return typeof value === "string" ? value.trim().toUpperCase() : "";
}

function getFeatureCode(feature: WorldFeature): string {
  const props = feature.properties ?? {};

  return (
    normalizeCode(props["ISO3166-1-Alpha-3"]) ||
    normalizeCode(props["ISO_A3"]) ||
    normalizeCode(props["ADM0_A3"]) ||
    normalizeCode(props["SU_A3"]) ||
    normalizeCode(props["SOV_A3"])
  );
}

function isValidPoint(position: Position): position is Point {
  return (
    Array.isArray(position) &&
    position.length >= 2 &&
    typeof position[0] === "number" &&
    typeof position[1] === "number" &&
    Number.isFinite(position[0]) &&
    Number.isFinite(position[1])
  );
}

function getRingsFromGeometry(geometry: Geometry | null): Point[][] {
  if (!geometry) {
    return [];
  }

  if (geometry.type === "Polygon") {
    return geometry.coordinates.map((ring) => ring.filter(isValidPoint));
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.flatMap((polygon) =>
      polygon.map((ring) => ring.filter(isValidPoint))
    );
  }

  return [];
}

function getBounds(rings: Point[][]) {
  const points = rings.flat();

  if (points.length === 0) {
    return null;
  }

  const longitudes = points.map(([longitude]) => longitude);
  const latitudes = points.map(([, latitude]) => latitude);

  return {
    minLongitude: Math.min(...longitudes),
    maxLongitude: Math.max(...longitudes),
    minLatitude: Math.min(...latitudes),
    maxLatitude: Math.max(...latitudes),
  };
}

function ringsToPath(rings: Point[][]): string {
  const bounds = getBounds(rings);

  if (!bounds) {
    return "";
  }

  const geoWidth = bounds.maxLongitude - bounds.minLongitude || 1;
  const geoHeight = bounds.maxLatitude - bounds.minLatitude || 1;

  const usableWidth = VIEW_WIDTH - PADDING * 2;
  const usableHeight = VIEW_HEIGHT - PADDING * 2;

  const scale = Math.min(usableWidth / geoWidth, usableHeight / geoHeight);

  const fittedWidth = geoWidth * scale;
  const fittedHeight = geoHeight * scale;

  const offsetX = (VIEW_WIDTH - fittedWidth) / 2;
  const offsetY = (VIEW_HEIGHT - fittedHeight) / 2;

  return rings
    .map((ring) => {
      if (ring.length === 0) {
        return "";
      }

      const commands = ring.map(([longitude, latitude], index) => {
        const x = offsetX + (longitude - bounds.minLongitude) * scale;
        const y = offsetY + (bounds.maxLatitude - latitude) * scale;

        return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
      });

      return `${commands.join(" ")} Z`;
    })
    .join(" ");
}

function getWatermarkClass(countryCode: string) {
  if (countryCode === "CHL") {
    return "bottom-[-34px] right-[-28px] h-[210px] w-[230px]";
  }

  if (countryCode === "ITA") {
    return "bottom-[-34px] right-[-30px] h-[210px] w-[250px]";
  }

  if (countryCode === "ESP") {
    return "bottom-[-36px] right-[-28px] h-[210px] w-[270px]";
  }

  return "bottom-[-36px] right-[-30px] h-[210px] w-[270px]";
}

function getSilhouetteTuning(countryCode: string) {
  if (countryCode === "CHL") {
    return {
      scale: 1.2,
      translateX: 18,
      translateY: 0,
      strokeWidth: 5,
    };
  }

  if (countryCode === "ITA") {
    return {
      scale: 1.12,
      translateX: 10,
      translateY: 4,
      strokeWidth: 3.4,
    };
  }

  if (countryCode === "ESP") {
    return {
      scale: 1.08,
      translateX: 0,
      translateY: 4,
      strokeWidth: 2.2,
    };
  }

  return {
    scale: 1.08,
    translateX: 0,
    translateY: 0,
    strokeWidth: 2.2,
  };
}

export default function WineCountrySnapshot({
  countryCode,
}: WineCountrySnapshotProps) {
  const [features, setFeatures] = useState<WorldFeature[]>([]);
  const normalizedCountryCode = countryCode.toUpperCase();

  useEffect(() => {
    let cancelled = false;

    async function loadFeatures() {
      try {
        const response = await fetch("/wine-atlas/world-countries-lite.geojson");

        if (!response.ok) {
          throw new Error(`Failed to load country silhouette: ${response.status}`);
        }

        const geoJson = (await response.json()) as FeatureCollection<
          Geometry,
          GeoJsonProperties
        >;

        if (!cancelled) {
          setFeatures(geoJson.features ?? []);
        }
      } catch {
        if (!cancelled) {
          setFeatures([]);
        }
      }
    }

    loadFeatures();

    return () => {
      cancelled = true;
    };
  }, []);

  const pathData = useMemo(() => {
    const feature = features.find(
      (item) => getFeatureCode(item) === normalizedCountryCode
    );

    if (!feature) {
      return "";
    }

    const rings = getRingsFromGeometry(feature.geometry);
    return ringsToPath(rings);
  }, [features, normalizedCountryCode]);

  const tuning = getSilhouetteTuning(normalizedCountryCode);

  if (!pathData) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none absolute z-0 opacity-[0.16] ${getWatermarkClass(
        normalizedCountryCode
      )}`}
    >
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <g
          transform={`translate(${tuning.translateX} ${tuning.translateY}) translate(${
            VIEW_WIDTH / 2
          } ${VIEW_HEIGHT / 2}) scale(${tuning.scale}) translate(${
            -VIEW_WIDTH / 2
          } ${-VIEW_HEIGHT / 2})`}
        >
          <path
            d={pathData}
            fill="#ef9fb4"
            stroke="rgba(180,72,104,0.34)"
            strokeWidth={tuning.strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}