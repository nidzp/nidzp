'use client';
import { useState } from "react";

export default function LanguageToggle({ lang, setLang }: { lang: "sr" | "en"; setLang: (lang: "sr" | "en") => void }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "sr" : "en")}
      className="button-main border border-cyan-400 bg-black/30 px-4 py-2 rounded-full shadow-main hover:bg-cyan-800 transition"
      aria-label="Promeni jezik / Switch language"
    >
      {lang === "en" ? "Srpski" : "English"}
    </button>
  );
}
