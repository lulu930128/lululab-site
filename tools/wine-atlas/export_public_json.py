from pathlib import Path
import json
import sqlite3
from collections import defaultdict
from datetime import datetime

BASE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BASE_DIR.parents[1]

DB_PATH = BASE_DIR / "data" / "wine_atlas.db"
OUTPUT_PATH = PROJECT_ROOT / "public" / "wine-atlas" / "wine-data.json"


def split_text(value: str | None) -> list[str]:
    if not value:
        return []

    return [
        item.strip()
        for item in value.replace("、", ",").split(",")
        if item.strip()
    ]


def fetch_wines() -> list[dict]:
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row

        rows = conn.execute(
            """
            SELECT
                id,
                name,
                winery,
                country,
                country_code,
                region,
                vintage,
                type,
                grapes,
                rating,
                price_twd,
                tasted_date,
                tags,
                recommend,
                repurchase,
                note,
                image
            FROM wines
            ORDER BY tasted_date DESC, id DESC
            """
        ).fetchall()

    wines: list[dict] = []

    for row in rows:
        wines.append(
            {
                "id": f"wine-{row['id']:03d}",
                "name": row["name"],
                "winery": row["winery"],
                "country": row["country"],
                "countryCode": row["country_code"],
                "region": row["region"],
                "vintage": row["vintage"],
                "type": row["type"],
                "grapes": split_text(row["grapes"]),
                "rating": row["rating"],
                "priceTwd": row["price_twd"],
                "tastedDate": row["tasted_date"],
                "tags": split_text(row["tags"]),
                "recommend": bool(row["recommend"]),
                "repurchase": bool(row["repurchase"]),
                "note": row["note"],
                "image": row["image"],
            }
        )

    return wines


def build_country_summary(wines: list[dict]) -> list[dict]:
    grouped: dict[str, list[dict]] = defaultdict(list)

    for wine in wines:
        grouped[wine["countryCode"]].append(wine)

    countries = []

    for country_code, items in grouped.items():
        rated = [wine for wine in items if isinstance(wine.get("rating"), (int, float))]
        avg_rating = (
            round(sum(wine["rating"] for wine in rated) / len(rated), 2)
            if rated
            else 0
        )

        top_wine = max(
            rated,
            key=lambda wine: wine["rating"],
            default=None,
        )

        regions = sorted(
            {
                wine["region"]
                for wine in items
                if wine.get("region")
            }
        )

        countries.append(
            {
                "code": country_code,
                "name": items[0]["country"],
                "displayName": items[0]["country"],
                "wineCount": len(items),
                "averageRating": avg_rating,
                "topWineId": top_wine["id"] if top_wine else None,
                "regions": regions,
            }
        )

    countries.sort(key=lambda item: item["wineCount"], reverse=True)
    return countries


def main() -> None:
    if not DB_PATH.exists():
        raise FileNotFoundError(
            f"Database not found: {DB_PATH}\n"
            "Please run init_db.py first."
        )

    wines = fetch_wines()
    countries = build_country_summary(wines)

    data = {
        "meta": {
            "projectName": "Wine Atlas",
            "description": "A personal wine cellar map powered by tasting records.",
            "version": "0.1.0",
            "updatedAt": datetime.now().strftime("%Y-%m-%d"),
        },
        "countries": countries,
        "wines": wines,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    OUTPUT_PATH.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"Exported public JSON: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()