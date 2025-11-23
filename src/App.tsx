import React, { useState } from "react";
import excuses from "./data/excuses.json";

type Tone = keyof typeof excuses | "any";
type Excuse = { text: string };

export default function App() {
  const [tone, setTone] = useState<Tone>("any");
  const [current, setCurrent] = useState<Excuse | null>(null);
  const [copied, setCopied] = useState(false);
  const [dark, setDark] = useState(true);

  function generate() {
    const pool =
      tone === "any"
        ? Object.values(excuses).flat()
        : excuses[tone as keyof typeof excuses];
    const random = pool[Math.floor(Math.random() * pool.length)];
    setCurrent(random);
    setCopied(false);
  }

  async function copy() {
    if (!current) return;
    await navigator.clipboard.writeText(current.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-10 transition ${
        dark ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6">🤖 AI Excuse Generator</h1>

        <div className="flex gap-2 justify-center mb-4">
          <select
            className="px-3 py-2 rounded-md text-white border border-gray-700 bg-gray-800 text-sm"
            value={tone}
            onChange={(e) => setTone(e.target.value as Tone)}
          >
            <option value="any">Any tone</option>
            {Object.keys(excuses).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>

          <button
            onClick={generate}
            id="generate-btn"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md font-semibold text-white transition"
          >
            🎲 Generate
          </button>

          <button
            onClick={() => setDark((d) => !d)}
            className="px-3 py-2 border   hover:text-white   border-gray-700 rounded-md text-sm hover:bg-gray-800 transition"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {current && (
          <div
            className=' `${
        dark ? "bg-gray-800 : "bg-gray-200 "
      }`
      
         border border-gray-700 rounded-xl p-6 mt-6 shadow-xl'
          >
            <p className="text-lg italic">“{current.text}”</p>
            <button
              onClick={copy}
              id="copy-btn"
              className=' `${
        dark ? "bg-gray-800 : "bg-gray-200 "
      }` mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded-md transition'
            >
              {copied ? "✅ Copied" : "📋 Copy"}
            </button>
          </div>
        )}

        <footer className="mt-10 text-sm text-gray-400">
          Press <kbd className="px-1 border border-gray-600 rounded">G</kbd> to
          generate,
          <kbd className="px-1 border border-gray-600 rounded ml-1">C</kbd> to
          copy.
        </footer>
      </div>
    </div>
  );
}
