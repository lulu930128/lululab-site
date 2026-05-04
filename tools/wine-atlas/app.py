from pathlib import Path
import sqlite3
import subprocess
import sys
from datetime import date
import tkinter as tk
from tkinter import ttk, messagebox


# =====================================================
# Path settings
# =====================================================

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "data" / "wine_atlas.db"
SCHEMA_PATH = BASE_DIR / "schema.sql"
EXPORT_SCRIPT = BASE_DIR / "export_public_json.py"


# =====================================================
# UI theme settings
# =====================================================

APP_BG = "#F6F1EE"
CARD_BG = "#FFFDFC"
PANEL_BG = "#FBF7F5"
TEXT_MAIN = "#2B1F24"
TEXT_MUTED = "#7A6870"
ACCENT = "#7B2C3B"
ACCENT_HOVER = "#632330"
ACCENT_SOFT = "#EFDDE2"
BORDER = "#E7D8DC"
TREE_BG = "#FFFDFC"
TREE_ALT = "#FAF4F6"
DANGER = "#9B2F46"
DANGER_SOFT = "#F5D9E0"

FONT_UI = ("Microsoft JhengHei UI", 10)
FONT_UI_BOLD = ("Microsoft JhengHei UI", 10, "bold")
FONT_TITLE = ("Microsoft JhengHei UI", 22, "bold")
FONT_SUBTITLE = ("Microsoft JhengHei UI", 10)
FONT_TABLE = ("Microsoft JhengHei UI", 10)
FONT_TABLE_HEAD = ("Microsoft JhengHei UI", 10, "bold")


# =====================================================
# Form constants
# =====================================================

WINE_TYPES = [
    "red",
    "white",
    "sparkling",
    "rose",
    "dessert",
    "fortified",
    "other",
]

COMMON_COUNTRIES = [
    ("France", "FRA"),
    ("Italy", "ITA"),
    ("Chile", "CHL"),
    ("Spain", "ESP"),
    ("Australia", "AUS"),
    ("United States", "USA"),
    ("Argentina", "ARG"),
    ("Germany", "DEU"),
    ("Portugal", "PRT"),
    ("Japan", "JPN"),
    ("Taiwan", "TWN"),
]


# =====================================================
# Utility functions
# =====================================================

def init_db_if_needed() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)

    if not SCHEMA_PATH.exists():
        raise FileNotFoundError(f"schema.sql not found: {SCHEMA_PATH}")

    schema = SCHEMA_PATH.read_text(encoding="utf-8")

    with sqlite3.connect(DB_PATH) as conn:
        conn.executescript(schema)
        conn.commit()


def parse_int(value: str) -> int | None:
    value = value.strip()

    if not value:
        return None

    try:
        return int(value)
    except ValueError:
        raise ValueError(f"整數欄位格式錯誤：{value}")


def parse_float(value: str) -> float | None:
    value = value.strip()

    if not value:
        return None

    try:
        return float(value)
    except ValueError:
        raise ValueError(f"數字欄位格式錯誤：{value}")


# =====================================================
# Main App
# =====================================================

class WineAtlasApp(tk.Tk):
    def __init__(self) -> None:
        super().__init__()

        self.title("Wine Atlas Manager")
        self.geometry("1160x740")
        self.minsize(1020, 660)
        self.configure(bg=APP_BG)

        self.auto_export_var = tk.BooleanVar(value=True)
        self.recommend_var = tk.BooleanVar(value=True)
        self.repurchase_var = tk.BooleanVar(value=False)

        self.country_var = tk.StringVar(value="France")
        self.country_code_var = tk.StringVar(value="FRA")

        self.entries: dict[str, tk.Entry | ttk.Combobox | tk.Text] = {}
        self.selected_wine_id: int | None = None

        init_db_if_needed()
        self.configure_styles()
        self.build_ui()
        self.load_recent_wines()

    # =====================================================
    # Styles
    # =====================================================

    def configure_styles(self) -> None:
        style = ttk.Style(self)
        style.theme_use("clam")

        style.configure(".", font=FONT_UI)

        style.configure("TFrame", background=APP_BG)

        style.configure(
            "Card.TFrame",
            background=CARD_BG,
        )

        style.configure(
            "TLabel",
            background=CARD_BG,
            foreground=TEXT_MAIN,
            font=FONT_UI,
        )

        style.configure(
            "Title.TLabel",
            background=APP_BG,
            foreground=TEXT_MAIN,
            font=FONT_TITLE,
        )

        style.configure(
            "Subtitle.TLabel",
            background=APP_BG,
            foreground=TEXT_MUTED,
            font=FONT_SUBTITLE,
        )

        style.configure(
            "TLabelframe",
            background=APP_BG,
            borderwidth=0,
        )

        style.configure(
            "TLabelframe.Label",
            background=APP_BG,
            foreground=TEXT_MAIN,
            font=FONT_UI_BOLD,
        )

        style.configure(
            "Card.TLabelframe",
            background=CARD_BG,
            bordercolor=BORDER,
            borderwidth=1,
            relief="solid",
        )

        style.configure(
            "Card.TLabelframe.Label",
            background=CARD_BG,
            foreground=TEXT_MAIN,
            font=FONT_UI_BOLD,
        )

        style.configure(
            "TEntry",
            fieldbackground="#FFFFFF",
            foreground=TEXT_MAIN,
            bordercolor=BORDER,
            lightcolor=BORDER,
            darkcolor=BORDER,
            padding=6,
            font=FONT_UI,
        )

        style.map(
            "TEntry",
            bordercolor=[("focus", ACCENT)],
            lightcolor=[("focus", ACCENT)],
            darkcolor=[("focus", ACCENT)],
        )

        style.configure(
            "TCombobox",
            fieldbackground="#FFFFFF",
            background="#FFFFFF",
            foreground=TEXT_MAIN,
            bordercolor=BORDER,
            lightcolor=BORDER,
            darkcolor=BORDER,
            arrowsize=14,
            padding=5,
            font=FONT_UI,
        )

        style.map(
            "TCombobox",
            bordercolor=[("focus", ACCENT)],
            lightcolor=[("focus", ACCENT)],
            darkcolor=[("focus", ACCENT)],
            fieldbackground=[("readonly", "#FFFFFF")],
            foreground=[("readonly", TEXT_MAIN)],
        )

        style.configure(
            "Primary.TButton",
            background=ACCENT,
            foreground="white",
            borderwidth=0,
            focusthickness=0,
            padding=(14, 8),
            font=FONT_UI_BOLD,
        )

        style.map(
            "Primary.TButton",
            background=[("active", ACCENT_HOVER), ("pressed", ACCENT_HOVER)],
            foreground=[("active", "white"), ("pressed", "white")],
        )

        style.configure(
            "Secondary.TButton",
            background=ACCENT_SOFT,
            foreground=ACCENT,
            borderwidth=0,
            focusthickness=0,
            padding=(14, 8),
            font=FONT_UI,
        )

        style.map(
            "Secondary.TButton",
            background=[("active", "#E8CFD6"), ("pressed", "#E8CFD6")],
            foreground=[("active", ACCENT), ("pressed", ACCENT)],
        )

        style.configure(
            "Danger.TButton",
            background=DANGER_SOFT,
            foreground=DANGER,
            borderwidth=0,
            focusthickness=0,
            padding=(14, 8),
            font=FONT_UI_BOLD,
        )

        style.map(
            "Danger.TButton",
            background=[("active", "#EBC8D1"), ("pressed", "#EBC8D1")],
            foreground=[("active", DANGER), ("pressed", DANGER)],
        )

        style.configure(
            "TCheckbutton",
            background=CARD_BG,
            foreground=TEXT_MAIN,
            font=FONT_UI,
        )

        style.map(
            "TCheckbutton",
            background=[("active", CARD_BG)],
            foreground=[("active", TEXT_MAIN)],
        )

        style.configure(
            "Treeview",
            background=TREE_BG,
            fieldbackground=TREE_BG,
            foreground=TEXT_MAIN,
            rowheight=30,
            bordercolor=BORDER,
            lightcolor=BORDER,
            darkcolor=BORDER,
            font=FONT_TABLE,
        )

        style.configure(
            "Treeview.Heading",
            background=ACCENT_SOFT,
            foreground=ACCENT,
            borderwidth=0,
            font=FONT_TABLE_HEAD,
            padding=8,
        )

        style.map(
            "Treeview.Heading",
            background=[("active", "#E8CFD6")],
            foreground=[("active", ACCENT)],
        )

        style.configure(
            "Vertical.TScrollbar",
            background="#E8D9DE",
            troughcolor="#F7EFF2",
            bordercolor="#F7EFF2",
            arrowcolor=ACCENT,
        )

    # =====================================================
    # UI layout
    # =====================================================

    def build_ui(self) -> None:
        root = ttk.Frame(self, padding=20, style="TFrame")
        root.pack(fill="both", expand=True)

        header = ttk.Frame(root, style="TFrame")
        header.pack(fill="x", pady=(0, 16))

        title = ttk.Label(
            header,
            text="Wine Atlas Manager",
            style="Title.TLabel",
        )
        title.pack(anchor="w")

        subtitle = ttk.Label(
            header,
            text="本地酒款資料輸入工具：SQLite → public JSON → Next.js Wine Atlas",
            style="Subtitle.TLabel",
        )
        subtitle.pack(anchor="w", pady=(4, 0))

        main = ttk.Frame(root, style="TFrame")
        main.pack(fill="both", expand=True)

        form = ttk.LabelFrame(
            main,
            text="新增 / 編輯酒款",
            padding=16,
            style="Card.TLabelframe",
        )
        form.pack(side="left", fill="y", expand=False)

        list_area = ttk.LabelFrame(
            main,
            text="最近資料",
            padding=16,
            style="Card.TLabelframe",
        )
        list_area.pack(side="right", fill="both", expand=True, padx=(18, 0))

        self.build_form(form)
        self.build_table(list_area)

    def build_form(self, parent: ttk.Frame) -> None:
        row = 0

        def add_entry(
            label: str,
            key: str,
            width: int = 34,
            default: str = "",
        ) -> tk.Entry:
            nonlocal row

            ttk.Label(parent, text=label).grid(
                row=row,
                column=0,
                sticky="w",
                pady=5,
                padx=(0, 10),
            )

            entry = ttk.Entry(parent, width=width)
            entry.insert(0, default)
            entry.grid(row=row, column=1, sticky="ew", pady=5)

            self.entries[key] = entry
            row += 1
            return entry

        add_entry("酒名 *", "name")
        add_entry("酒莊", "winery")

        ttk.Label(parent, text="國家 *").grid(
            row=row,
            column=0,
            sticky="w",
            pady=5,
            padx=(0, 10),
        )

        country_combo = ttk.Combobox(
            parent,
            textvariable=self.country_var,
            width=31,
            values=[country for country, _ in COMMON_COUNTRIES],
            state="normal",
        )
        country_combo.grid(row=row, column=1, sticky="ew", pady=5)
        country_combo.bind("<<ComboboxSelected>>", self.on_country_selected)
        self.entries["country"] = country_combo
        row += 1

        add_entry("國家代碼 *", "country_code", default="FRA")
        add_entry("產區", "region")
        add_entry("年份", "vintage")
        add_entry("葡萄品種", "grapes")
        add_entry("評分", "rating")
        add_entry("價格 TWD", "price_twd")
        add_entry("品飲日期", "tasted_date", default=date.today().isoformat())
        add_entry("標籤", "tags", default="推薦")

        ttk.Label(parent, text="類型").grid(
            row=row,
            column=0,
            sticky="w",
            pady=5,
            padx=(0, 10),
        )

        type_combo = ttk.Combobox(
            parent,
            width=31,
            values=WINE_TYPES,
            state="normal",
        )
        type_combo.set("red")
        type_combo.grid(row=row, column=1, sticky="ew", pady=5)
        self.entries["type"] = type_combo
        row += 1

        ttk.Label(parent, text="簡短心得").grid(
            row=row,
            column=0,
            sticky="nw",
            pady=5,
            padx=(0, 10),
        )

        note_text = tk.Text(
            parent,
            width=34,
            height=5,
            bg="#FFFFFF",
            fg=TEXT_MAIN,
            insertbackground=TEXT_MAIN,
            relief="solid",
            bd=1,
            highlightthickness=1,
            highlightbackground=BORDER,
            highlightcolor=ACCENT,
            font=FONT_UI,
        )
        note_text.grid(row=row, column=1, sticky="ew", pady=5)
        self.entries["note"] = note_text
        row += 1

        check_frame = ttk.Frame(parent, style="Card.TFrame")
        check_frame.grid(row=row, column=0, columnspan=2, sticky="w", pady=(8, 4))

        ttk.Checkbutton(
            check_frame,
            text="推薦",
            variable=self.recommend_var,
        ).pack(side="left", padx=(0, 12))

        ttk.Checkbutton(
            check_frame,
            text="可回購",
            variable=self.repurchase_var,
        ).pack(side="left", padx=(0, 12))

        ttk.Checkbutton(
            check_frame,
            text="新增/更新後自動匯出 JSON",
            variable=self.auto_export_var,
        ).pack(side="left")

        row += 1

        button_frame = ttk.Frame(parent, style="Card.TFrame")
        button_frame.grid(row=row, column=0, columnspan=2, sticky="ew", pady=(14, 0))

        ttk.Button(
            button_frame,
            text="新增酒款",
            command=self.add_wine,
            style="Primary.TButton",
        ).grid(row=0, column=0, sticky="ew", padx=(0, 8), pady=(0, 8))

        ttk.Button(
            button_frame,
            text="更新酒款",
            command=self.update_wine,
            style="Secondary.TButton",
        ).grid(row=0, column=1, sticky="ew", padx=(0, 8), pady=(0, 8))

        ttk.Button(
            button_frame,
            text="刪除酒款",
            command=self.delete_wine,
            style="Danger.TButton",
        ).grid(row=0, column=2, sticky="ew", pady=(0, 8))

        ttk.Button(
            button_frame,
            text="清空",
            command=self.clear_form,
            style="Secondary.TButton",
        ).grid(row=1, column=0, sticky="ew", padx=(0, 8))

        ttk.Button(
            button_frame,
            text="匯出 JSON",
            command=self.export_json,
            style="Secondary.TButton",
        ).grid(row=1, column=1, sticky="ew", padx=(0, 8))

        for col in range(3):
            button_frame.columnconfigure(col, weight=1)

        parent.columnconfigure(1, weight=1)

    def build_table(self, parent: ttk.Frame) -> None:
        columns = (
            "id",
            "name",
            "country",
            "region",
            "vintage",
            "rating",
            "recommend",
            "repurchase",
        )

        table_frame = ttk.Frame(parent, style="Card.TFrame")
        table_frame.pack(fill="both", expand=True)

        self.tree = ttk.Treeview(
            table_frame,
            columns=columns,
            show="headings",
            height=20,
        )

        headers = {
            "id": "ID",
            "name": "酒名",
            "country": "國家",
            "region": "產區",
            "vintage": "年份",
            "rating": "評分",
            "recommend": "推薦",
            "repurchase": "回購",
        }

        widths = {
            "id": 60,
            "name": 260,
            "country": 120,
            "region": 140,
            "vintage": 80,
            "rating": 80,
            "recommend": 80,
            "repurchase": 80,
        }

        for col in columns:
            self.tree.heading(col, text=headers[col])
            self.tree.column(col, width=widths[col], anchor="center")

        self.tree.column("name", anchor="w")
        self.tree.column("country", anchor="w")
        self.tree.column("region", anchor="w")

        scrollbar = ttk.Scrollbar(
            table_frame,
            orient="vertical",
            command=self.tree.yview,
            style="Vertical.TScrollbar",
        )
        self.tree.configure(yscrollcommand=scrollbar.set)

        self.tree.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")

        self.tree.bind("<<TreeviewSelect>>", self.on_tree_select)

        self.tree.tag_configure("odd", background=TREE_BG)
        self.tree.tag_configure("even", background=TREE_ALT)

        bottom = ttk.Frame(parent, style="Card.TFrame")
        bottom.pack(fill="x", pady=(12, 0))

        ttk.Button(
            bottom,
            text="重新整理",
            command=self.load_recent_wines,
            style="Secondary.TButton",
        ).pack(side="left")

    # =====================================================
    # Data helpers
    # =====================================================

    def get_field(self, key: str) -> str:
        widget = self.entries[key]

        if isinstance(widget, tk.Text):
            return widget.get("1.0", "end").strip()

        return widget.get().strip()

    def set_field(self, key: str, value) -> None:
        widget = self.entries[key]
        text = "" if value is None else str(value)

        if isinstance(widget, tk.Text):
            widget.delete("1.0", "end")
            widget.insert("1.0", text)
        elif isinstance(widget, ttk.Combobox):
            widget.set(text)
        else:
            widget.delete(0, "end")
            widget.insert(0, text)

    def collect_wine_data(self) -> dict | None:
        name = self.get_field("name")
        country = self.get_field("country")
        country_code = self.get_field("country_code").upper()
        wine_type = self.get_field("type") or "red"

        if not name:
            messagebox.showwarning("資料不足", "酒名是必填欄位。")
            return None

        if not country:
            messagebox.showwarning("資料不足", "國家是必填欄位。")
            return None

        if not country_code:
            messagebox.showwarning(
                "資料不足",
                "國家代碼是必填欄位，例如 FRA、ITA、CHL。",
            )
            return None

        vintage = parse_int(self.get_field("vintage"))
        rating = parse_float(self.get_field("rating"))
        price_twd = parse_int(self.get_field("price_twd"))

        if rating is not None and not (0 <= rating <= 5):
            messagebox.showwarning("格式錯誤", "評分請輸入 0 ~ 5 之間的數字。")
            return None

        return {
            "name": name,
            "winery": self.get_field("winery") or None,
            "country": country,
            "country_code": country_code,
            "region": self.get_field("region") or None,
            "vintage": vintage,
            "type": wine_type,
            "grapes": self.get_field("grapes") or None,
            "rating": rating,
            "price_twd": price_twd,
            "tasted_date": self.get_field("tasted_date") or None,
            "tags": self.get_field("tags") or None,
            "recommend": 1 if self.recommend_var.get() else 0,
            "repurchase": 1 if self.repurchase_var.get() else 0,
            "note": self.get_field("note") or None,
            "image": None,
        }

    def on_country_selected(self, event=None) -> None:
        selected = self.country_var.get()

        for country, code in COMMON_COUNTRIES:
            if country == selected:
                country_code_entry = self.entries.get("country_code")

                if isinstance(country_code_entry, tk.Entry):
                    country_code_entry.delete(0, "end")
                    country_code_entry.insert(0, code)

                return

    def on_tree_select(self, event=None) -> None:
        selected = self.tree.selection()

        if not selected:
            return

        values = self.tree.item(selected[0], "values")

        if not values:
            return

        wine_id = int(values[0])
        self.load_wine_to_form(wine_id)

    def load_wine_to_form(self, wine_id: int) -> None:
        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row

            row = conn.execute(
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
                WHERE id = ?
                """,
                (wine_id,),
            ).fetchone()

        if row is None:
            messagebox.showwarning("資料不存在", f"找不到 ID={wine_id} 的酒款。")
            return

        self.clear_form(keep_defaults=False)
        self.selected_wine_id = row["id"]

        self.set_field("name", row["name"])
        self.set_field("winery", row["winery"])
        self.set_field("country", row["country"])
        self.set_field("country_code", row["country_code"])
        self.set_field("region", row["region"])
        self.set_field("vintage", row["vintage"])
        self.set_field("type", row["type"])
        self.set_field("grapes", row["grapes"])
        self.set_field("rating", row["rating"])
        self.set_field("price_twd", row["price_twd"])
        self.set_field("tasted_date", row["tasted_date"])
        self.set_field("tags", row["tags"])
        self.set_field("note", row["note"])

        self.recommend_var.set(bool(row["recommend"]))
        self.repurchase_var.set(bool(row["repurchase"]))

    # =====================================================
    # Actions
    # =====================================================

    def add_wine(self) -> None:
        try:
            data = self.collect_wine_data()

            if data is None:
                return

            with sqlite3.connect(DB_PATH) as conn:
                conn.execute(
                    """
                    INSERT INTO wines (
                        name, winery, country, country_code, region,
                        vintage, type, grapes, rating, price_twd,
                        tasted_date, tags, recommend, repurchase, note, image
                    )
                    VALUES (
                        :name, :winery, :country, :country_code, :region,
                        :vintage, :type, :grapes, :rating, :price_twd,
                        :tasted_date, :tags, :recommend, :repurchase, :note, :image
                    )
                    """,
                    data,
                )
                conn.commit()

            if self.auto_export_var.get():
                self.export_json(show_success=False)

            self.load_recent_wines()
            self.clear_form(keep_defaults=True)

            messagebox.showinfo("新增成功", f"已新增酒款：{data['name']}")

        except ValueError as exc:
            messagebox.showerror("格式錯誤", str(exc))
        except Exception as exc:
            messagebox.showerror("新增失敗", str(exc))

    def update_wine(self) -> None:
        if self.selected_wine_id is None:
            messagebox.showwarning("尚未選取資料", "請先從右側表格選取一筆酒款。")
            return

        try:
            data = self.collect_wine_data()

            if data is None:
                return

            data["id"] = self.selected_wine_id

            with sqlite3.connect(DB_PATH) as conn:
                cursor = conn.execute(
                    """
                    UPDATE wines
                    SET
                        name = :name,
                        winery = :winery,
                        country = :country,
                        country_code = :country_code,
                        region = :region,
                        vintage = :vintage,
                        type = :type,
                        grapes = :grapes,
                        rating = :rating,
                        price_twd = :price_twd,
                        tasted_date = :tasted_date,
                        tags = :tags,
                        recommend = :recommend,
                        repurchase = :repurchase,
                        note = :note,
                        image = :image,
                        updated_at = CURRENT_TIMESTAMP
                    WHERE id = :id
                    """,
                    data,
                )
                conn.commit()

            if cursor.rowcount == 0:
                messagebox.showwarning(
                    "更新失敗",
                    f"找不到 ID={self.selected_wine_id} 的酒款，可能已被刪除。",
                )
                return

            if self.auto_export_var.get():
                self.export_json(show_success=False)

            self.load_recent_wines()
            self.clear_form(keep_defaults=True)

            messagebox.showinfo("更新成功", f"已更新酒款：{data['name']}")

        except ValueError as exc:
            messagebox.showerror("格式錯誤", str(exc))
        except Exception as exc:
            messagebox.showerror("更新失敗", str(exc))

    def delete_wine(self) -> None:
        if self.selected_wine_id is None:
            messagebox.showwarning("尚未選取資料", "請先從右側表格選取一筆酒款。")
            return

        wine_name = self.get_field("name") or f"ID={self.selected_wine_id}"

        confirmed = messagebox.askyesno(
            "確認刪除",
            f"確定要刪除這筆酒款嗎？\n\n{wine_name}\n\n此操作會從 SQLite 移除資料。",
        )

        if not confirmed:
            return

        try:
            with sqlite3.connect(DB_PATH) as conn:
                conn.execute(
                    "DELETE FROM wines WHERE id = ?",
                    (self.selected_wine_id,),
                )
                conn.commit()

            if self.auto_export_var.get():
                self.export_json(show_success=False)

            self.load_recent_wines()
            self.clear_form(keep_defaults=True)

            messagebox.showinfo("刪除成功", f"已刪除酒款：{wine_name}")

        except Exception as exc:
            messagebox.showerror("刪除失敗", str(exc))

    def export_json(self, show_success: bool = True) -> None:
        try:
            result = subprocess.run(
                [sys.executable, str(EXPORT_SCRIPT)],
                cwd=str(BASE_DIR.parents[1]),
                text=True,
                capture_output=True,
                check=True,
            )

            if show_success:
                messagebox.showinfo("匯出成功", result.stdout.strip())

        except subprocess.CalledProcessError as exc:
            messagebox.showerror(
                "匯出失敗",
                f"{exc.stdout}\n{exc.stderr}".strip(),
            )
        except Exception as exc:
            messagebox.showerror("匯出失敗", str(exc))

    def load_recent_wines(self) -> None:
        for item in self.tree.get_children():
            self.tree.delete(item)

        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row

            rows = conn.execute(
                """
                SELECT
                    id,
                    name,
                    country,
                    region,
                    vintage,
                    rating,
                    recommend,
                    repurchase
                FROM wines
                ORDER BY id DESC
                LIMIT 20
                """
            ).fetchall()

        for index, row in enumerate(rows):
            tag = "even" if index % 2 == 0 else "odd"

            self.tree.insert(
                "",
                "end",
                values=(
                    row["id"],
                    row["name"],
                    row["country"],
                    row["region"] or "",
                    row["vintage"] or "",
                    row["rating"] if row["rating"] is not None else "",
                    "Y" if row["recommend"] else "",
                    "Y" if row["repurchase"] else "",
                ),
                tags=(tag,),
            )

    def clear_form(self, keep_defaults: bool = False) -> None:
        self.selected_wine_id = None

        for widget in self.entries.values():
            if isinstance(widget, tk.Text):
                widget.delete("1.0", "end")
            elif isinstance(widget, ttk.Combobox):
                widget.set("")
            else:
                widget.delete(0, "end")

        if keep_defaults:
            country_widget = self.entries["country"]
            if isinstance(country_widget, ttk.Combobox):
                country_widget.set("France")
            else:
                country_widget.insert(0, "France")

            self.entries["country_code"].insert(0, "FRA")

            type_widget = self.entries["type"]
            if isinstance(type_widget, ttk.Combobox):
                type_widget.set("red")
            else:
                type_widget.insert(0, "red")

            self.entries["tasted_date"].insert(0, date.today().isoformat())
            self.entries["tags"].insert(0, "推薦")

        self.recommend_var.set(True)
        self.repurchase_var.set(False)


def main() -> None:
    app = WineAtlasApp()
    app.mainloop()


if __name__ == "__main__":
    main()
