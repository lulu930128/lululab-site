export type WineStampVariant =
  | "postcard"
  | "passport"
  | "ticket"
  | "airmail"
  | "seal"
  | "minimal";

export type WineStampPaletteName = "rose" | "sepia" | "violet";

export type WineStampPalette = {
  ink: string;
  weakInk: string;
  paleInk: string;
  paper: string;
  paperStroke: string;
  accentFill: string;
  textMain: string;
  textMuted: string;
};

export type WineStampStyle = {
  variant: WineStampVariant;
  paletteName: WineStampPaletteName;
  palette: WineStampPalette;
};

export const wineStampPalettes: Record<WineStampPaletteName, WineStampPalette> =
  {
    rose: {
      ink: "rgba(184, 70, 105, 0.48)",
      weakInk: "rgba(184, 70, 105, 0.28)",
      paleInk: "rgba(184, 70, 105, 0.16)",
      paper: "rgba(255, 249, 247, 0.78)",
      paperStroke: "rgba(220, 185, 150, 0.55)",
      accentFill: "rgba(225, 92, 122, 0.22)",
      textMain: "#262022",
      textMuted: "#7a6f73",
    },
    sepia: {
      ink: "rgba(150, 92, 62, 0.46)",
      weakInk: "rgba(150, 92, 62, 0.26)",
      paleInk: "rgba(150, 92, 62, 0.14)",
      paper: "rgba(255, 250, 239, 0.82)",
      paperStroke: "rgba(206, 170, 120, 0.58)",
      accentFill: "rgba(198, 132, 80, 0.20)",
      textMain: "#2c211c",
      textMuted: "#7a6b60",
    },
    violet: {
      ink: "rgba(125, 88, 164, 0.44)",
      weakInk: "rgba(125, 88, 164, 0.25)",
      paleInk: "rgba(125, 88, 164, 0.14)",
      paper: "rgba(250, 247, 255, 0.80)",
      paperStroke: "rgba(185, 160, 210, 0.54)",
      accentFill: "rgba(158, 116, 190, 0.19)",
      textMain: "#25202c",
      textMuted: "#746d7d",
    },
  };

const variants: WineStampVariant[] = [
  "postcard",
  "passport",
  "ticket",
  "airmail",
  "seal",
  "minimal",
];

const palettes: WineStampPaletteName[] = ["rose", "sepia", "violet"];

const countryStampOverrides: Record<
  string,
  Partial<{
    variant: WineStampVariant;
    paletteName: WineStampPaletteName;
  }>
> = {
  ITA: {
    variant: "postcard",
    paletteName: "rose",
  },
  ESP: {
    variant: "ticket",
    paletteName: "rose",
  },
  CHL: {
    variant: "passport",
    paletteName: "sepia",
  },
  FRA: {
    variant: "seal",
    paletteName: "violet",
  },
  JPN: {
    variant: "airmail",
    paletteName: "violet",
  },
  AUS: {
    variant: "minimal",
    paletteName: "sepia",
  },
};

export function getStampHash(countryCode: string): number {
  return countryCode
    .toUpperCase()
    .split("")
    .reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 1), 0);
}

export function getWineStampStyle(countryCode: string): WineStampStyle {
  const normalizedCode = countryCode.toUpperCase();
  const hash = getStampHash(normalizedCode);
  const override = countryStampOverrides[normalizedCode] ?? {};

  const variant = override.variant ?? variants[hash % variants.length];
  const paletteName =
    override.paletteName ?? palettes[Math.floor(hash / 6) % palettes.length];

  return {
    variant,
    paletteName,
    palette: wineStampPalettes[paletteName],
  };
}