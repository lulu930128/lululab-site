"use client";

import { useEffect, useMemo, useRef } from "react";
import { getStampHash, getWineStampStyle } from "./wineStampStyle";
import type { WineStampVariant } from "./wineStampStyle";

type WineTravelStampProps = {
  countryCode: string;
  countryName: string;
};

function getShortCountryName(countryName: string) {
  const normalized = countryName.trim();

  if (normalized.length <= 11) {
    return normalized;
  }

  return normalized.slice(0, 11);
}

function getContainerClass(variant: WineStampVariant) {
  if (variant === "passport") {
    return "bottom-4 left-5 h-[90px] w-[150px] rotate-[-8deg] opacity-[0.58]";
  }

  if (variant === "ticket") {
    return "bottom-3 left-4 h-[104px] w-[176px] rotate-[-5deg] opacity-[0.72]";
  }

  if (variant === "airmail") {
    return "bottom-3 left-4 h-[96px] w-[176px] rotate-[-3deg] opacity-[0.70]";
  }

  if (variant === "seal") {
    return "bottom-3 left-5 h-[98px] w-[154px] rotate-[6deg] opacity-[0.60]";
  }

  if (variant === "minimal") {
    return "bottom-5 left-5 h-[78px] w-[150px] rotate-[-4deg] opacity-[0.52]";
  }

  return "bottom-3 left-4 h-[102px] w-[174px] rotate-[-7deg] opacity-[0.74]";
}

export default function WineTravelStamp({
  countryCode,
  countryName,
}: WineTravelStampProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const roughLayerRef = useRef<SVGGElement | null>(null);

  const normalizedCode = countryCode.toUpperCase();
  const shortName = useMemo(
    () => getShortCountryName(countryName),
    [countryName]
  );

  const stampStyle = useMemo(
    () => getWineStampStyle(normalizedCode),
    [normalizedCode]
  );

  const { variant, palette } = stampStyle;

  useEffect(() => {
    let cancelled = false;

    async function drawRoughLayer() {
      const svg = svgRef.current;
      const roughLayer = roughLayerRef.current;

      if (!svg || !roughLayer) {
        return;
      }

      const roughModule = await import("roughjs");

      if (cancelled) {
        return;
      }

      const rough = roughModule.default;
      const rc = rough.svg(svg);
      const seed = getStampHash(normalizedCode);

      roughLayer.replaceChildren();

      if (variant === "postcard") {
        const travelLine1 = rc.curve(
          [
            [0, 36],
            [28, 27],
            [56, 42],
            [84, 33],
            [112, 44],
            [158, 35],
          ],
          {
            seed: seed + 20,
            stroke: palette.ink,
            strokeWidth: 1.1,
            roughness: 1.2,
          }
        );

        const travelLine2 = rc.curve(
          [
            [0, 45],
            [30, 36],
            [60, 50],
            [90, 41],
            [118, 53],
            [160, 44],
          ],
          {
            seed: seed + 22,
            stroke: palette.weakInk,
            strokeWidth: 1,
            roughness: 1.2,
          }
        );

        const travelLine3 = rc.curve(
          [
            [0, 54],
            [28, 46],
            [58, 58],
            [88, 50],
            [118, 60],
            [158, 52],
          ],
          {
            seed: seed + 24,
            stroke: palette.paleInk,
            strokeWidth: 0.95,
            roughness: 1.2,
          }
        );

        const stampFrame = rc.rectangle(34, 18, 76, 60, {
          seed,
          stroke: palette.ink,
          strokeWidth: 1.2,
          roughness: 1.6,
          bowing: 1.4,
        });

        const postmarkCircle = rc.circle(128, 42, 42, {
          seed: seed + 6,
          stroke: palette.weakInk,
          strokeWidth: 1.2,
          roughness: 2.1,
          bowing: 1.8,
        });

        const postmarkCircleInner = rc.circle(128, 42, 30, {
          seed: seed + 11,
          stroke: palette.paleInk,
          strokeWidth: 0.9,
          roughness: 1.7,
          bowing: 1.4,
        });

        roughLayer.append(
          travelLine1,
          travelLine2,
          travelLine3,
          stampFrame,
          postmarkCircle,
          postmarkCircleInner
        );

        return;
      }

      if (variant === "passport") {
        const outer = rc.ellipse(78, 46, 140, 62, {
          seed,
          stroke: palette.ink,
          strokeWidth: 2,
          roughness: 2.4,
          bowing: 2.1,
        });

        const inner = rc.ellipse(78, 46, 116, 46, {
          seed: seed + 8,
          stroke: palette.weakInk,
          strokeWidth: 1.2,
          roughness: 2,
          bowing: 1.8,
        });

        const topLine = rc.line(31, 33, 125, 33, {
          seed: seed + 12,
          stroke: palette.weakInk,
          strokeWidth: 1,
          roughness: 1.8,
        });

        const bottomLine = rc.line(31, 58, 125, 58, {
          seed: seed + 14,
          stroke: palette.weakInk,
          strokeWidth: 1,
          roughness: 1.8,
        });

        roughLayer.append(outer, inner, topLine, bottomLine);

        return;
      }

      if (variant === "ticket") {
        const ticketOuter = rc.polygon(
          [
            [20, 20],
            [138, 12],
            [150, 70],
            [32, 82],
          ],
          {
            seed,
            stroke: palette.ink,
            strokeWidth: 1.3,
            roughness: 1.8,
            bowing: 1.3,
          }
        );

        const ticketInner = rc.polygon(
          [
            [29, 28],
            [130, 21],
            [139, 63],
            [38, 73],
          ],
          {
            seed: seed + 9,
            stroke: palette.weakInk,
            strokeWidth: 1,
            roughness: 1.5,
            bowing: 1.1,
          }
        );

        const tearLine = rc.line(112, 22, 120, 66, {
          seed: seed + 17,
          stroke: palette.weakInk,
          strokeWidth: 1,
          roughness: 1.4,
        });

        const wave = rc.curve(
          [
            [0, 48],
            [34, 38],
            [62, 56],
            [96, 43],
            [134, 58],
            [172, 45],
          ],
          {
            seed: seed + 30,
            stroke: palette.weakInk,
            strokeWidth: 1.1,
            roughness: 1.2,
          }
        );

        roughLayer.append(wave, ticketOuter, ticketInner, tearLine);

        return;
      }

      if (variant === "airmail") {
        const label = rc.rectangle(22, 20, 118, 58, {
          seed,
          stroke: palette.ink,
          strokeWidth: 1.25,
          roughness: 1.8,
          bowing: 1.2,
        });

        const inner = rc.rectangle(30, 28, 102, 42, {
          seed: seed + 8,
          stroke: palette.weakInk,
          strokeWidth: 0.9,
          roughness: 1.4,
          bowing: 1,
        });

        const routeLine = rc.curve(
          [
            [0, 34],
            [34, 26],
            [72, 42],
            [112, 31],
            [160, 44],
          ],
          {
            seed: seed + 18,
            stroke: palette.weakInk,
            strokeWidth: 1.2,
            roughness: 1.2,
          }
        );

        const seal = rc.circle(137, 30, 30, {
          seed: seed + 28,
          stroke: palette.paleInk,
          strokeWidth: 1.1,
          roughness: 2,
        });

        roughLayer.append(routeLine, label, inner, seal);

        return;
      }

      if (variant === "seal") {
        const outer = rc.circle(78, 48, 76, {
          seed,
          stroke: palette.ink,
          strokeWidth: 2,
          roughness: 2.5,
          bowing: 2,
        });

        const inner = rc.circle(78, 48, 57, {
          seed: seed + 7,
          stroke: palette.weakInk,
          strokeWidth: 1.3,
          roughness: 2,
          bowing: 1.5,
        });

        const crossLine = rc.line(45, 49, 111, 49, {
          seed: seed + 10,
          stroke: palette.weakInk,
          strokeWidth: 1,
          roughness: 1.8,
        });

        roughLayer.append(outer, inner, crossLine);

        return;
      }

      const minimalTop = rc.line(18, 30, 134, 24, {
        seed,
        stroke: palette.weakInk,
        strokeWidth: 1.2,
        roughness: 1.6,
      });

      const minimalBottom = rc.line(22, 62, 138, 56, {
        seed: seed + 5,
        stroke: palette.weakInk,
        strokeWidth: 1.2,
        roughness: 1.6,
      });

      const minimalBox = rc.rectangle(24, 25, 104, 40, {
        seed: seed + 9,
        stroke: palette.paleInk,
        strokeWidth: 1,
        roughness: 1.6,
        bowing: 1.3,
      });

      roughLayer.append(minimalTop, minimalBottom, minimalBox);
    }

    drawRoughLayer();

    return () => {
      cancelled = true;
    };
  }, [normalizedCode, variant, palette]);

  return (
    <div
      className={`pointer-events-none absolute z-[1] mix-blend-multiply ${getContainerClass(
        variant
      )}`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 174 102"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <g ref={roughLayerRef} />

        {variant === "postcard" && (
          <>
            <g transform="translate(34 18) rotate(-3 38 30)">
              <rect
                x="0"
                y="0"
                width="76"
                height="60"
                rx="3"
                fill={palette.paper}
                stroke={palette.paperStroke}
                strokeWidth="1"
                strokeDasharray="2.5 2.5"
              />

              <rect
                x="6"
                y="6"
                width="64"
                height="48"
                rx="2"
                fill="rgba(255,255,255,0.42)"
                stroke={palette.paleInk}
              />

              <path
                d="M14 41 C20 29, 27 34, 32 24 C37 15, 45 20, 51 13 C56 22, 65 20, 67 31 C60 34, 59 45, 48 44 C39 52, 24 51, 14 41Z"
                fill={palette.accentFill}
                stroke={palette.weakInk}
                strokeWidth="1"
              />

              <text
                x="38"
                y="17"
                textAnchor="middle"
                fill={palette.ink}
                style={{
                  fontSize: 6.5,
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                }}
              >
                WINE
              </text>

              <text
                x="38"
                y="35"
                textAnchor="middle"
                fill={palette.textMain}
                style={{
                  fontSize: 18,
                  fontWeight: 950,
                  letterSpacing: "0.12em",
                }}
              >
                {normalizedCode}
              </text>

              <text
                x="38"
                y="49"
                textAnchor="middle"
                fill={palette.textMuted}
                style={{
                  fontSize: 7,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                {shortName}
              </text>
            </g>

            <g transform="translate(128 42)">
              <circle
                cx="0"
                cy="0"
                r="17"
                fill="rgba(255,255,255,0.18)"
                stroke={palette.weakInk}
                strokeWidth="1"
              />

              <path
                d="M0 -10 L2.5 -3.5 L9 -3.5 L3.8 0.8 L5.8 7 L0 3.2 L-5.8 7 L-3.8 0.8 L-9 -3.5 L-2.5 -3.5Z"
                fill={palette.weakInk}
              />

              <text
                x="0"
                y="27"
                textAnchor="middle"
                fill={palette.ink}
                style={{
                  fontSize: 6.5,
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                }}
              >
                POSTED
              </text>
            </g>
          </>
        )}

        {variant === "passport" && (
          <>
            <text
              x="78"
              y="30"
              textAnchor="middle"
              fill={palette.ink}
              style={{
                fontSize: 8.5,
                fontWeight: 900,
                letterSpacing: "0.22em",
              }}
            >
              WINE PASSPORT
            </text>

            <text
              x="78"
              y="53"
              textAnchor="middle"
              fill={palette.textMain}
              style={{
                fontSize: 22,
                fontWeight: 950,
                letterSpacing: "0.18em",
              }}
            >
              {normalizedCode}
            </text>

            <text
              x="78"
              y="68"
              textAnchor="middle"
              fill={palette.textMuted}
              style={{
                fontSize: 8,
                fontWeight: 900,
                letterSpacing: "0.24em",
              }}
            >
              ENTRY
            </text>
          </>
        )}

        {variant === "ticket" && (
          <g transform="rotate(-4 86 51)">
            <polygon
              points="25,24 134,17 145,68 35,78"
              fill={palette.paper}
              stroke={palette.paperStroke}
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <text
              x="55"
              y="39"
              textAnchor="middle"
              fill={palette.ink}
              style={{
                fontSize: 7,
                fontWeight: 900,
                letterSpacing: "0.18em",
              }}
            >
              CELLAR
            </text>

            <text
              x="61"
              y="59"
              textAnchor="middle"
              fill={palette.textMain}
              style={{
                fontSize: 22,
                fontWeight: 950,
                letterSpacing: "0.12em",
              }}
            >
              {normalizedCode}
            </text>

            <text
              x="123"
              y="44"
              textAnchor="middle"
              fill={palette.textMuted}
              transform="rotate(82 123 44)"
              style={{
                fontSize: 6,
                fontWeight: 900,
                letterSpacing: "0.12em",
              }}
            >
              TICKET
            </text>
          </g>
        )}

        {variant === "airmail" && (
          <g transform="rotate(-3 84 50)">
            <rect
              x="24"
              y="22"
              width="114"
              height="54"
              rx="5"
              fill={palette.paper}
              stroke={palette.paperStroke}
              strokeWidth="1"
            />

            {[0, 1, 2, 3, 4].map((item) => (
              <rect
                key={item}
                x={28 + item * 22}
                y="24"
                width="10"
                height="50"
                fill={item % 2 === 0 ? palette.accentFill : palette.paleInk}
                opacity="0.45"
              />
            ))}

            <rect
              x="34"
              y="31"
              width="88"
              height="34"
              rx="4"
              fill="rgba(255,255,255,0.62)"
            />

            <text
              x="78"
              y="43"
              textAnchor="middle"
              fill={palette.ink}
              style={{
                fontSize: 7,
                fontWeight: 900,
                letterSpacing: "0.22em",
              }}
            >
              AIR WINE
            </text>

            <text
              x="78"
              y="61"
              textAnchor="middle"
              fill={palette.textMain}
              style={{
                fontSize: 20,
                fontWeight: 950,
                letterSpacing: "0.14em",
              }}
            >
              {normalizedCode}
            </text>
          </g>
        )}

        {variant === "seal" && (
          <g transform="translate(78 48)">
            <circle
              cx="0"
              cy="0"
              r="31"
              fill="rgba(255,255,255,0.18)"
              stroke={palette.weakInk}
              strokeWidth="1"
            />

            <text
              x="0"
              y="-14"
              textAnchor="middle"
              fill={palette.ink}
              style={{
                fontSize: 7,
                fontWeight: 900,
                letterSpacing: "0.16em",
              }}
            >
              CELLAR
            </text>

            <text
              x="0"
              y="6"
              textAnchor="middle"
              fill={palette.textMain}
              style={{
                fontSize: 22,
                fontWeight: 950,
                letterSpacing: "0.14em",
              }}
            >
              {normalizedCode}
            </text>

            <text
              x="0"
              y="21"
              textAnchor="middle"
              fill={palette.textMuted}
              style={{
                fontSize: 7,
                fontWeight: 900,
                letterSpacing: "0.16em",
              }}
            >
              LOGGED
            </text>
          </g>
        )}

        {variant === "minimal" && (
          <g transform="rotate(-3 76 45)">
            <text
              x="76"
              y="38"
              textAnchor="middle"
              fill={palette.ink}
              style={{
                fontSize: 8,
                fontWeight: 900,
                letterSpacing: "0.26em",
              }}
            >
              WINE ATLAS
            </text>

            <text
              x="76"
              y="58"
              textAnchor="middle"
              fill={palette.textMain}
              style={{
                fontSize: 24,
                fontWeight: 950,
                letterSpacing: "0.18em",
              }}
            >
              {normalizedCode}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}