'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5
    }
  })
};

const heroText = "NIDZP — ELITE FOOTBALL & VIRAL AI VFX EDITS";
const heroSub = "Brutalni video editing za TikTok, Instagram i YouTube. Goated Edits, AI montaze, viralni efekti. 5M+ pregleda, 200+ zadovoljnih klijenata, top-brzina i kvalitet. Poveži se i poruči sledeći viral!";

const services = [
  "⚡ VFX montaže za TikTok / Instagram / YouTube",
  "🏆 Viralni sportski & AI highlight klipovi",
  "🎬 Ultra-brzi delivery (24h!)",
  "🔥 Ekskluzivne animacije, color grading & sound FX",
  "🤝 Poslovni i influencer editing",
];

const socials = [
  { url: "https://www.tiktok.com/@goatedits_nidzp", name: "TikTok", icon: "🎵" },
  { url: "https://instagram.com/nidzp.vfx", name: "Instagram", icon: "📸" },
  { url: "https://www.youtube.com/@goatedits_nidzp", name: "YouTube", icon: "▶️" },
];

export default function HomePage() {
  const [lang, setLang] = useState<"sr" | "en">("en");

  return (
    <main className="flex flex-col items-center justify-center py-10">
      {/* LANG TOGGLE */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setLang(l => (l === "en" ? "sr" : "en"))}
          className="button-main border border-cyan-400 bg-black/30 px-4 py-2 rounded-full shadow-main hover:bg-cyan-800 transition"
        >
          {lang === "en" ? "Srpski" : "English"}
        </button>
      </div>

      {/* HERO */}
      <section className="w-full flex flex-col items-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bebas font-bold tracking-wider mb-3 text-center drop-shadow-[0_3px_12px_#0ff8] animate-fade-in"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.3 } }
          }}
        >
          {[...heroText].map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block animate-letter-pop"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-center text-lg md:text-xl mb-5 text-desc font-poppins"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
        >
          {heroSub}
        </motion.p>

        <motion.div
          className="flex gap-4 mt-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          {socials.map(s => (
            <a
              href={s.url}
              key={s.name}
              target="_blank"
              rel="noopener noreferrer"
              className="button-main flex items-center gap-2"
            >
              <span>{s.icon}</span> {s.name}
            </a>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="section bg-black/50 rounded-2xl p-6 mb-8 shadow-main">
        <h2 className="text-2xl font-bebas tracking-wider mb-2 text-accent animate-fade-in">Šta nudim?</h2>
        <ul className="list-inside list-disc space-y-2 text-lg font-poppins text-main">
          {services.map((srv, idx) => (
            <motion.li
              key={idx}
              className="animate-fade-in"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + idx * 0.15 }}
            >
              {srv}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="section flex flex-col md:flex-row items-center justify-center gap-4 mb-14">
        <a
          href="mailto:nikola.djokic10@gmail.com"
          className="button-main bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-lg"
        >
          📬 Kontakt: nikola.djokic10@gmail.com
        </a>
        <a
          href="https://instagram.com/nidzp.vfx"
          target="_blank"
          className="button-main bg-gradient-to-r from-cyan-600 to-blue-900 hover:from-blue-900 hover:to-cyan-600"
        >
          📩 DM @nidzp.vfx
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 pb-10 text-center text-desc font-poppins text-base opacity-75">
        &copy; {new Date().getFullYear()} NIDZP.VFX | Portfolio iz budućnosti.
        <br />
        TikTok: <a href="https://www.tiktok.com/@goatedits_nidzp" className="text-accent underline">goatedits_nidzp</a>
      </footer>
    </main>
  );
}
