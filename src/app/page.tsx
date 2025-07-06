"use client";

import { useState } from "react";

const text = {
  en: {
    headline: "NDZP.VFX — BRUTAL VISUAL FX & VIRAL EDITS",
    sub: "Elite VFX • AI Video • Goated Edits",
    desc: "Viral AI edits. Over 5M+ views, 200+ clients. Delivery: 24h. TikTok/YouTube/Instagram/Brand/Influencer edits. Modern workflow, world-class speed & visuals.",
    services: "Services & Results",
    details: [
      "⚡ Viral VFX/AI TikTok, Reels, Shorts edits",
      "📦 Goated meme & branded edits",
      "📬 Fast delivery & top communication",
      "🌐 Worldwide, bilingual (EN/SR)",
    ],
    results: "2024: 5M+ views — TikTok, YouTube, Instagram, TV",
    clients: "Clients: Balkans, EU, USA",
    avg: "Avg. delivery: 24h, global reach",
    contact: "Contact me",
    email: "Email: nikola.djokic10@gmail.com",
    dm: "DM on Instagram: @nidzp.vfx",
    srpski: "Српски"
  },
  sr: {
    headline: "NDZP.VFX — BRUTALNI VIZUELNI EFEKTI & VIRALNI EDITOVI",
    sub: "Elitni VFX • AI Video • Goated Edits",
    desc: "Viralni AI editovi. 5M+ pregleda, 200+ klijenata. Isporuka: 24h. TikTok/YouTube/Instagram/Brend/Influencer editovanje. Moderan workflow, svetska brzina i vizuali.",
    services: "Usluge & Rezultati",
    details: [
      "⚡ Viralni VFX/AI TikTok, Reels, Shorts editovi",
      "📦 Goated meme i brendirani editovi",
      "📬 Brza isporuka & top komunikacija",
      "🌐 Globalno, EN/SR jezici",
    ],
    results: "2024: 5M+ pregleda — TikTok, YouTube, Instagram, TV",
    clients: "Klijenti: Balkan, EU, SAD",
    avg: "Prosek isporuke: 24h, globalno",
    contact: "Kontaktiraj me",
    email: "Email: nikola.djokic10@gmail.com",
    dm: "DM na Instagramu: @nidzp.vfx",
    srpski: "English"
  }
};

const links = [
  { name: "TikTok main profile", url: "https://www.tiktok.com/@nidzp.vfx" },
  { name: "Goated Edits TikTok", url: "https://www.tiktok.com/@goated.edits" },
  { name: "Instagram", url: "https://www.instagram.com/nidzp.vfx/" },
  { name: "YouTube", url: "https://www.youtube.com/@nidzp" }
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "sr">("en");

  return (
    <main className="min-h-screen w-full bg-bg text-main font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full bg-bg/90 backdrop-blur border-b border-border flex items-center justify-between px-5 py-4">
        <span className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase select-none">
          NDZP.VFX
        </span>
        <button
          className="px-4 py-1 border border-accent rounded-lg text-accent font-bold hover:bg-bg2 transition"
          onClick={() => setLang(lang === "en" ? "sr" : "en")}
        >
          {text[lang].srpski}
        </button>
      </header>

      {/* Hero */}
      <section className="flex-1 w-full flex flex-col items-center justify-center text-center mt-14 mb-8 px-3">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight uppercase">{text[lang].headline}</h1>
        <div className="text-2xl md:text-3xl text-accent mb-2 font-bold tracking-wide">{text[lang].sub}</div>
        <p className="max-w-xl text-lg md:text-xl text-desc mb-8">{text[lang].desc}</p>
        <div className="flex flex-wrap gap-4 justify-center mb-2">
          {links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl border-2 border-accent text-accent font-bold hover:bg-bg2 hover:text-accent2 transition shadow"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="w-full max-w-3xl mx-auto mb-10 px-3">
        <h2 className="text-2xl font-bold mb-3">{text[lang].services}</h2>
        <div className="flex flex-wrap gap-3 mb-3">
          {text[lang].details.map((d, i) => (
            <span key={i} className="bg-bg2 px-3 py-2 rounded-lg text-base font-semibold text-accent2 shadow">{d}</span>
          ))}
        </div>
        <div className="text-base md:text-lg text-desc mb-2">{text[lang].results}</div>
        <div className="text-base md:text-lg text-desc mb-1">{text[lang].clients}</div>
        <div className="text-base md:text-lg text-desc">{text[lang].avg}</div>
      </section>

      {/* Contact */}
      <footer className="w-full py-7 text-center text-lg text-accent2 border-t border-border mt-auto bg-bg/80">
        <div className="mb-2 font-bold">{text[lang].contact}</div>
        <div className="mb-1">{text[lang].email}</div>
        <div>{text[lang].dm}</div>
      </footer>
    </main>
  );
}
