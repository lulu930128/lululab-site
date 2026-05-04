from pathlib import Path
import sqlite3

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "data" / "wine_atlas.db"
SCHEMA_PATH = BASE_DIR / "schema.sql"


def main() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)

    schema = SCHEMA_PATH.read_text(encoding="utf-8")

    with sqlite3.connect(DB_PATH) as conn:
        conn.executescript(schema)
        conn.commit()

    print(f"Database initialized: {DB_PATH}")


if __name__ == "__main__":
    main()