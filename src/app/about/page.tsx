"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const text = {
  en: {
    pageTitle: "About Me",
    paragraphs: [
      "Hello! I'm Nikola Djokić, also known as NIDZP, a passionate VFX and video editing artist. I specialize in creating engaging and viral video content using both traditional editing techniques and cutting-edge AI tools. With years of experience, I have delivered hundreds of projects for clients worldwide.",
      "My work blends creative storytelling with technical expertise. From fast-paced TikTok edits to cinematic AI-enhanced visuals, I always strive to deliver world-class quality on tight deadlines. I'm constantly exploring new effects and technologies to keep my edits ahead of the curve."
    ],
    bulletsTitle: "Key Achievements & Skills:",
    bullets: [
      "5M+ total views across social platforms on my edits in 2024.",
      "200+ projects completed for clients in Balkans, EU, and USA.",
      "Expert in Adobe After Effects, Premiere Pro, DaVinci Resolve.",
      "Proficient with AI video tools and visual effect software.",
      "Bilingual communication (English / Serbian) and 24h delivery."
    ],
    toggleLabel: "Српски"
  },
  sr: {
    pageTitle: "O meni",
    paragraphs: [
      "Ćao! Ja sam Nikola Djokić, poznat i kao NIDZP, strastveni umetnik za VFX i montažu videa. Specijalizovan sam za kreiranje atraktivnog i viralnog video sadržaja koristeći tradicionalne tehnike montaže kao i najmodernije AI alate. Sa višegodišnjim iskustvom, isporučio sam stotine projekata klijentima širom sveta.",
      "Moj rad spaja kreativno pripovedanje sa tehničkom stručnošću. Od brzih TikTok editova do kinematičnih vizuala poboljšanih AI-jem, uvek se trudim da isporučim kvalitet svetskog nivoa i u najkraćem roku. Stalno istražujem nove efekte i tehnologije kako bih održao svoje editove inovativnim."
    ],
    bulletsTitle: "Ključna dostignuća i veštine:",
    bullets: [
      "5M+ ukupnih pregleda na društvenim mrežama u 2024. na mojim editovima.",
      "Preko 200 projekata završeno za klijente u regionu, EU i SAD.",
      "Ekspert u Adobe After Effects, Premiere Pro, DaVinci Resolve.",
      "Iskustvo sa AI alatima za video i softverima za vizuelne efekte.",
      "Komunikacija na engleskom i srpskom; isporuka često u roku od 24h."
    ],
    toggleLabel: "English"
  }
};

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "sr">("en");

  return (
    <main className="min-h-screen w-full text-main font-sans flex flex-col">
      {/* Header (isti kao i na drugim stranicama) */}
      <header className="sticky top-0 z-20 w-full bg-bg/90 backdrop-blur border-b border-border flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase select-none">
          NIDZP.VFX
        </Link>
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

      {/* Sadržaj About stranice */}
      <section className="section mt-12 mb-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          {text[lang].pageTitle}
        </motion.h1>
        {text[lang].paragraphs.map((para, idx) => (
          <motion.p
            key={idx}
            className="text-base md:text-lg text-desc mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 + 0.2 }}
          >
            {para}
          </motion.p>
        ))}
        <motion.h2 
          className="text-xl font-semibold mt-6 mb-3" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {text[lang].bulletsTitle}
        </motion.h2>
        <ul className="list-disc list-inside text-desc">
          {text[lang].bullets.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.5 }}
              className="mb-2"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-base md:text-lg text-accent2 border-t border-border mt-auto bg-bg/80">
        <div className="mb-2 font-bold">{lang === "en" ? "Contact me" : "Kontaktiraj me"}</div>
        <div className="mb-1">Email: nikola.djokic10@gmail.com</div>
        <div>{lang === "en" ? "DM on Instagram: @nidzp.vfx" : "DM na Instagramu: @nidzp.vfx"}</div>
      </footer>
    </main>
  );
}
