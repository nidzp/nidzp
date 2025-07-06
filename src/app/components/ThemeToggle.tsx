'use client';
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <button
      onClick={() => setDark(d => !d)}
      className="button-main bg-black/30 border border-cyan-400 px-4 py-2 rounded-full shadow-main hover:bg-cyan-800 transition"
      aria-label="Toggle dark/light mode"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
