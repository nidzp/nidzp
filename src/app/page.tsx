"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TEXT = {
  en: {
    headline: "NDZP.VFX — Brutal World-Class VFX & Video Editing",
    desc: "Elite post-production. Fastest viral edits. 200+ clients. 5M+ views. Your content — leveled up.",
    services: "Services",
    showcase: "Showcase",
    contact: "Contact",
    portfolio: "Portfolio",
    switchLang: "Српски",
    contactBtn: "Get in touch",
    links: [
      { name: "TikTok", url: "https://www.tiktok.com/@nidzp.vfx" },
      { name: "Goated Edits", url: "https://www.tiktok.com/@goated.edits" },
      { name: "Instagram", url: "https://www.instagram.com/nidzp.vfx/" },
      { name: "YouTube", url: "https://www.youtube.com/@nidzp" },
      { name: "Linktree", url: "https://linktr.ee/nidzp" }
    ],
    servicesList: [
      "Ultra-fast VFX & AI Editing (TikTok, Shorts, Reels)",
      "Brand promo & commercials",
      "Overlay packs & green screen FX",
      "Full-cycle post-production (AI, captions, meme FX, delivery in 24h)",
    ],
    showcaseNote: "See my viral edits, showreels & client work below.",
    footer: "NDZP.VFX © " + new Date().getFullYear() + " — Elite standards only.",
  },
  sr: {
    headline: "NDZP.VFX — Brutalni Svetski VFX & Video Editing",
    desc: "Elitna postprodukcija. Najbrži viral editovi. 200+ klijenata. 5M+ pregleda. Tvoj sadržaj — na višem nivou.",
    services: "Usluge",
    showcase: "Portfolio",
    contact: "Kontakt",
    portfolio: "Radovi",
    switchLang: "English",
    contactBtn: "Kontaktiraj",
    links: [
      { name: "TikTok", url: "https://www.tiktok.com/@nidzp.vfx" },
      { name: "Goated Edits", url: "https://www.tiktok.com/@goated.edits" },
      { name: "Instagram", url: "https://www.instagram.com/nidzp.vfx/" },
      { name: "YouTube", url: "https://www.youtube.com/@nidzp" },
      { name: "Linktree", url: "https://linktr.ee/nidzp" }
    ],
    servicesList: [
      "Ultra-brz VFX & AI editing (TikTok, Shorts, Reels)",
      "Brendirani promo & reklame",
      "Overlay paketi & green screen FX",
      "Full-cycle postprodukcija (AI, captioni, meme efekti, isporuka 24h)",
    ],
    showcaseNote: "Pogledaj viralne editove, showreel i rad sa klijentima ispod.",
    footer: "NDZP.VFX © " + new Date().getFullYear() + " — Samo brutalni standardi.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "sr">("en");
  const t = TEXT[lang];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start z-0">
      {/* Overlay animacija pozadine */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#08182b] via-[#151d34ee] to-[#1e233a] opacity-95" />
        <img
          src="/pozadina.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none select-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000b] via-transparent to-transparent" />
      </div>

      {/* Header + lang toggle */}
      <header className="w-full max-w-6xl flex items-center justify-between px-4 md:px-10 py-4 mb-6">
        <span className="text-3xl font-black tracking-tight bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow">NDZP.VFX</span>
        <button
          onClick={() => setLang(lang === "en" ? "sr" : "en")}
          className="border px-4 py-1 rounded-xl font-bold bg-bg/70 hover:bg-bg2 transition text-accent border-accent"
        >{t.switchLang}</button>
      </header>

      {/* HERO */}
      <motion.section
        className="flex flex-col items-center text-center max-w-3xl mb-8 px-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-500 bg-clip-text text-transparent">{t.headline}</h1>
        <p className="text-xl md:text-2xl text-accent2 mb-4">{t.desc}</p>
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          {t.links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-xl border-2 border-accent text-accent font-bold hover:bg-bg2 hover:text-accent2 transition shadow"
            >{link.name}</a>
          ))}
        </div>
        <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-2 rounded-2xl font-bold shadow-lg hover:scale-105 transition">{t.contactBtn}</a>
      </motion.section>

      {/* SERVICES */}
      <section className="w-full max-w-3xl mb-10 px-4">
        <h2 className="text-2xl font-bold mb-3 text-accent">{t.services}</h2>
        <ul className="space-y-2 text-base md:text-lg text-desc">
          {t.servicesList.map((s, i) => <li key={i}>• {s}</li>)}
        </ul>
      </section>

      {/* SHOWCASE */}
      <section className="w-full max-w-5xl mb-14 px-4" id="portfolio">
        <h3 className="text-xl font-bold mb-5 text-center text-accent">{t.showcase}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video primeri */}
          <div className="rounded-2xl shadow-2xl bg-bg2 overflow-hidden p-4 flex flex-col items-center">
            <video
              className="rounded-xl w-full mb-3"
              controls
              poster="/poster.jpg"
            >
              <source src="/video1.mp4" type="video/mp4" />
              Showreel
            </video>
            <span className="text-lg font-bold text-accent">Showreel 2024</span>
          </div>
          <div className="rounded-2xl shadow-2xl bg-bg2 overflow-hidden p-4 flex flex-col items-center">
            <video
              className="rounded-xl w-full mb-3"
              controls
              poster="/poster.jpg"
            >
              <source src="/video2.mp4" type="video/mp4" />
              Client Edit
            </video>
            <span className="text-lg font-bold text-accent">Brand Edit Example</span>
          </div>
        </div>
        <div className="text-xs text-accent2 mt-4 text-center">{t.showcaseNote}</div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-6 text-center text-sm text-accent2 border-t border-border mt-auto bg-bg/50">
        {t.footer}
      </footer>
    </main>
  );
}
