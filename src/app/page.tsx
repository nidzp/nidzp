"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const text = {
  en: {
    headline: "NIDZP.VFX — BRUTAL VISUAL FX & VIRAL EDITS",
    sub: "Elite VFX • AI Video • Goated Edits",
    desc: "Viral AI edits with world-class visuals. Over 5M+ views and 200+ clients. Delivery in 24h. TikTok, YouTube, Instagram, brand and influencer content with cutting-edge effects.",
    services: "Services & Results",
    details: [
      "⚡ Viral VFX/AI TikTok, Reels & Shorts",
      "📦 Top-tier meme & branded edits",
      "📬 Fast delivery & responsive communication",
      "🌐 Worldwide service (EN/SR bilingual)"
    ],
    results: "2024: 5M+ total views — TikTok, YouTube, Instagram, TV",
    clients: "Clients served: Balkans, EU, USA",
    avg: "Avg. delivery time: ~24h",
    contact: "Contact me",
    email: "Email: nikola.djokic10@gmail.com",
    dm: "DM on Instagram: @nidzp.vfx",
    toggleLabel: "Српски"  // label on button to switch to Serbian
  },
  sr: {
    headline: "NIDZP.VFX — BRUTALNI VIZUELNI EFEKTI & VIRALNI EDITOVI",
    sub: "Elitni VFX • AI Video • Goated Edits",
    desc: "Viralni AI editovi sa svetskim vizuelima. Preko 5M+ pregleda i 200+ klijenata. Isporuka za 24h. TikTok, YouTube, Instagram, brend i influencer sadržaj sa vrhunskim efektima.",
    services: "Usluge & Rezultati",
    details: [
      "⚡ Viralni VFX/AI TikTok, Reels i Shorts",
      "📦 Vrhunski meme i brendirani editovi",
      "📬 Brza isporuka i odlična komunikacija",
      "🌐 Globalno (dvojezično EN/SR)"
    ],
    results: "2024: 5M+ ukupnih pregleda — TikTok, YouTube, Instagram, TV",
    clients: "Klijenti: Balkan, EU, SAD",
    avg: "Prosečno vreme isporuke: ~24h",
    contact: "Kontaktiraj me",
    email: "Email: nikola.djokic10@gmail.com",
    dm: "Kontakt preko Instagrama (DM): @nidzp.vfx",
    toggleLabel: "English"  // label on button to switch to English
  }
};

// Linkovi ka profilima na društvenim mrežama
const links = [
  { name: "TikTok (main)", url: "https://www.tiktok.com/@nidzp.vfx" },
  { name: "TikTok (GoatedEdits)", url: "https://www.tiktok.com/@goated.edits" },
  { name: "Instagram", url: "https://www.instagram.com/nidzp.vfx/" },
  { name: "YouTube", url: "https://www.youtube.com/@nidzp" }
];

export default function Home() {
  // Lokalno stanje za jezik (en ili sr)
  const [lang, setLang] = useState<"en" | "sr">("en");

  return (
    <main className="min-h-screen w-full text-main font-sans flex flex-col">
      {/* Header navigacija */}
      <header className="sticky top-0 z-20 w-full bg-bg/90 backdrop-blur border-b border-border flex items-center justify-between px-5 py-4">
        {/* Logo / ime sajta */}
        <Link href="/" className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase select-none">
          NIDZP.VFX
        </Link>
        {/* Meni sa desne strane: linkovi ka stranicama + toggle jezik */}
        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-base font-semibold hover:text-accent">
            Projects
          </Link>
          <Link href="/about" className="text-base font-semibold hover:text-accent">
            About
          </Link>
          <button
            onClick={() => setLang(lang === "en" ? "sr" : "en")}
            className="px-4 py-1 border border-accent rounded-lg text-accent font-bold hover:bg-bg2 transition"
          >
            {text[lang].toggleLabel}
          </button>
        </nav>
      </header>

      {/* Hero sekcija */}
      <section className="flex-1 w-full flex flex-col items-center justify-center text-center mt-16 mb-12 px-3">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight uppercase"
        >
          {text[lang].headline}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-accent mb-3 font-bold tracking-wide"
        >
          {text[lang].sub}
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl text-lg md:text-xl text-desc mb-8"
        >
          {text[lang].desc}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
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
        </motion.div>
      </section>

      {/* Usluge/Rezultati sekcija */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">{text[lang].services}</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {text[lang].details.map((item, i) => (
            <span 
              key={i} 
              className="bg-bg2 px-3 py-2 rounded-lg text-base font-semibold text-accent2 shadow"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="text-base md:text-lg text-desc mb-1">{text[lang].results}</div>
        <div className="text-base md:text-lg text-desc mb-1">{text[lang].clients}</div>
        <div className="text-base md:text-lg text-desc">{text[lang].avg}</div>
      </motion.section>

      {/* CTA sekcija - Contact Me dugme */}
      <section className="text-center mb-10">
        <a href="mailto:nikola.djokic10@gmail.com" className="button-main inline-block">
          {text[lang].contact}
        </a>
      </section>

      {/* Footer (kontakt informacije) */}
      <footer className="w-full py-6 text-center text-base md:text-lg text-accent2 border-t border-border mt-auto bg-bg/80">
        <div className="mb-2 font-bold">{text[lang].contact}</div>
        <div className="mb-1">{text[lang].email}</div>
        <div>{text[lang].dm}</div>
      </footer>
    </main>
  );
}
