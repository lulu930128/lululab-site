\# Wine Atlas Components



Wine Atlas 是個人紅酒探索地圖系統的前端元件集合。  

此模組負責將 `public/wine-atlas/wine-data.json` 與 `world-countries-lite.geojson` 呈現為國家探索地圖、酒款卡片、統計摘要與旅行收藏風格的視覺裝飾。



---



\## Component Overview



\### `WineMap.tsx`



Wine Atlas 地圖區塊的主控元件。



Responsibilities:



\- 管理 `selectedCountryCode`

\- 渲染世界地圖 `WineWorldMap`

\- 渲染目前選取國家 `WineCountryPanel`

\- 渲染已探索國家列表

\- 處理地圖與國家列表的雙向選取



---



\### `WineWorldMap.tsx`



世界地圖 SVG 元件。



Responsibilities:



\- 載入 `/wine-atlas/world-countries-lite.geojson`

\- 將 GeoJSON country features 轉成 SVG paths

\- 根據 wine count 套用探索色階

\- 處理 hover tooltip

\- 處理 click country selection

\- 顯示 selected country highlight



Notes:



\- 正式頁面應使用 `world-countries-lite.geojson`

\- 不建議直接載入原始 `world-countries.geojson`



---



\### `WineMapLegend.tsx`



地圖色階圖例。



Responsibilities:



\- 顯示 bottle count 對應的探索色階

\- 目前作為地圖內部的小型 overlay 使用



---



\### `wineMapStyle.ts`



地圖色彩與樣式設定。



Responsibilities:



\- 定義 wine count 對應的 fill color

\- 定義 stroke color / stroke width

\- 定義 gold accent 與 glow 樣式

\- 集中管理地圖視覺規則



---



\### `WineCountryPanel.tsx`



目前選取國家資訊面板。



Responsibilities:



\- 顯示 Current Country

\- 顯示 Featured Bottle

\- 放置國家輪廓浮水印 `WineCountrySnapshot`

\- 放置旅行郵票裝飾 `WineTravelStamp`



---



\### `WineCountrySnapshot.tsx`



單一國家輪廓浮水印。



Responsibilities:



\- 根據 `countryCode` 從 `world-countries-lite.geojson` 找出對應 feature

\- 將該國 geometry normalize 成單國 silhouette

\- 放置於 Current Country 區塊右下角作為淡色背景裝飾



Tuning points:



\- `getWatermarkClass(countryCode)`

\- `getSilhouetteTuning(countryCode)`



---



\### `WineTravelStamp.tsx`



旅行郵票 / 郵戳裝飾元件。



Responsibilities:



\- 根據國家代碼顯示不同 stamp template

\- 使用 roughjs 產生手繪粗糙線條

\- 顯示國碼、國名、郵票、郵戳線或章樣式



Supported variants:



\- `postcard`

\- `passport`

\- `ticket`

\- `airmail`

\- `seal`

\- `minimal`



---



\### `wineStampStyle.ts`



Stamp 模板與色系設定。



Responsibilities:



\- 定義 stamp variants

\- 定義 stamp palettes

\- 根據 country code 產生固定 stamp style

\- 支援 country-specific overrides



Example:



```ts

const countryStampOverrides = {

&nbsp; ITA: {

&nbsp;   variant: "postcard",

&nbsp;   paletteName: "rose",

&nbsp; },

&nbsp; ESP: {

&nbsp;   variant: "ticket",

&nbsp;   paletteName: "rose",

&nbsp; },

&nbsp; CHL: {

&nbsp;   variant: "passport",

&nbsp;   paletteName: "sepia",

&nbsp; },

};

