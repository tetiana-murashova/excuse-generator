# 📊 Murray Irrigation Dashboard

A lightweight React + TypeScript dashboard for visualizing time-series data with interactive zooming and panning.  
Built with **Vite**, **Chart.js**, and **TailwindCSS**.

---

## 🚀 Features

- 📈 Interactive time-series charts using Chart.js
- 🔍 Zoom & pan support via chartjs-plugin-zoom
- 🕒 Time-based x-axis powered by chartjs-adapter-date-fns
- 🎨 Modern responsive layout using TailwindCSS
- ⚡ Super-fast dev server with Vite
- ✅ Clean, fully typed codebase (TypeScript)
- 💅 Auto-formatting with Prettier

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React 18 + TypeScript |
| Charts | Chart.js, chartjs-plugin-zoom, chartjs-plugin-annotation |
| Date Adapter | chartjs-adapter-date-fns |
| Styling | TailwindCSS |
| Build Tool | Vite |
| Code Quality | Prettier |
| Package Manager | npm |

---

## 🛠️ Setup

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start development server
```bash
npm run dev
```

### 3️⃣ Build for production
```bash
npm run build
```

### 4️⃣ Preview production build
```bash
npm run preview
```

---

## 🎨 TailwindCSS Setup

Your TailwindCSS configuration should look like this (`tailwind.config.js`):

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Use Tailwind utility classes directly in your JSX:

```tsx
<div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
  <h1 className="text-2xl font-semibold mb-4">Murray Irrigation Dashboard</h1>
  <TimeSeriesChart />
</div>
```

---

## 🧠 TypeScript Types

Located in [`src/types/chartTypes.ts`](src/types/chartTypes.ts):

- `Point`, `Tag`, `Asset`, `Site`, `DataJson`
- `TimeSeriesDataset`, `TimeSeriesChartData`
- `LineChartOptionsWithZoom` for Chart.js + zoom plugin

---

## 📊 Example Chart Component

```tsx
import { Line } from 'react-chartjs-2';
import { options, data } from './chartConfig';

export function TimeSeriesChart() {
  return (
    <div className="w-full h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}
```

---

## 🧹 Code Formatting

Prettier runs automatically on save in VS Code.

Manual formatting:
```bash
npx prettier --write src/.
```

Recommended VS Code settings (`.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## 🌍 Deployment

### ✅ Deploy to Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Click **"Add New Project" → "Import Git Repository"**
3. Select your GitHub repo.
4. Build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy** 🚀

> Your dashboard will be live at: `https://your-project-name.vercel.app`

---


## 💡 Tips

- Use `as const` for Chart.js scale types (`type: 'time' as const`)
- For better date formatting, ensure you register `'chartjs-adapter-date-fns'`
- Zoom and pan modes must be `'x' | 'y' | 'xy'`
- Prettier auto-formats on `Cmd + S` (if configured)
- Use Tailwind for layout and responsive sizing (`w-full`, `h-[400px]`, etc.)

---

## 📜 License

MIT © 2025 Tetiana Murashova
# excuse-generator
