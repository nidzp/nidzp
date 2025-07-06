"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const text = {
  en: {
    pageTitle: "Projects Portfolio",
    intro: "Explore some of the featured projects showcasing VFX and editing work. Each project leveraged creative effects and AI tools to achieve viral impact and engaging visuals.",
    projects: [
      {
        title: "Neon City Loop (Cinemagraph)",
        description: "A seamless neon-lit city cinemagraph created with AI, featured as a viral loop on TikTok (1M+ views)."
      },
      {
        title: "Brand X Ad Campaign Edit",
        description: "30-second high-paced promo edit for Brand X, combining motion graphics and VFX (featured on Instagram)."
      },
      {
        title: "Goated Meme Compilation",
        description: "A rapid-fire meme edit series that amassed over 500k views, blending humor with advanced visual effects."
      },
      {
        title: "Influencer Y Highlight Reel",
        description: "Stylized montage for Influencer Y, integrating AI-driven effects to transform footage into a cinematic experience."
      }
    ],
    toggleLabel: "Српски"
  },
  sr: {
    pageTitle: "Portfolio Projekti",
    intro: "Pregled istaknutih projekata koji prikazuju VFX i montažni rad. Svaki projekat koristi kreativne efekte i AI alate kako bi postigao viralan domet i upečatljive vizuale.",
    projects: [
      {
        title: "Loop Neonski Grad (Cinemagraph)",
        description: "Bezšavni cinemagraph neonskog grada kreiran uz pomoć AI, postao viralan loop na TikToku (preko 1M pregleda)."
      },
      {
        title: "Reklamna kampanja za brend X",
        description: "Montirani promo video od 30 sekundi za brend X, koji kombinuje motion grafiku i VFX (objavljen na Instagramu)."
      },
      {
        title: "Goated Meme kompilacija",
        description: "Serija munjevitih meme editova koja je sakupila preko 500k pregleda, spajajući humor sa naprednim vizuelnim efektima."
      },
      {
        title: "Promo video za influensera Y",
        description: "Stilizovani montažni video za influensera Y, sa AI efektima koji snimke transformišu u filmsko iskustvo."
      }
    ],
    toggleLabel: "English"
  }
};

export default function ProjectsPage() {
  const [lang, setLang] = useState<"en" | "sr">("en");

  return (
    <main className="min-h-screen w-full text-main font-sans flex flex-col">
      {/* Header (reuse same as Home) */}
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

      {/* Naslov i uvod */}
      <section className="section text-center mt-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{text[lang].pageTitle}</h1>
        <p className="text-lg md:text-xl text-desc">{text[lang].intro}</p>
      </section>

      {/* Lista projekata */}
      <section className="section flex flex-col gap-8 mb-12">
        {text[lang].projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-bg2/50 p-5 rounded-xl border border-border shadow-md"
          >
            <h3 className="text-xl font-bold text-accent mb-2">{proj.title}</h3>
            <p className="text-base text-desc">{proj.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer (kontakt) */}
      <footer className="w-full py-6 text-center text-base md:text-lg text-accent2 border-t border-border mt-auto bg-bg/80">
        <div className="mb-2 font-bold">{lang === "en" ? "Contact me" : "Kontaktiraj me"}</div>
        <div className="mb-1">Email: nikola.djokic10@gmail.com</div>
        <div>{lang === "en" ? "DM on Instagram: @nidzp.vfx" : "DM na Instagramu: @nidzp.vfx"}</div>
      </footer>
    </main>
  );
}
