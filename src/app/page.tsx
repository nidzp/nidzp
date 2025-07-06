'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// TikTok glavni + ostali
const links = [
  { url: 'https://www.tiktok.com/@nidzp.vfx', label: 'TikTok @nidzp.vfx', icon: '🎵', main: true },
  { url: 'https://instagram.com/nidzp.vfx', label: 'Instagram @nidzp.vfx', icon: '📸' },
  { url: 'https://www.tiktok.com/@goatedits_nidzp', label: 'TikTok Goated', icon: '🔥' }
];

// Profi opis na oba jezika
const summary = {
  en: {
    hero: "Next-Level VFX, AI Video & Editing",
    desc: "5 years of professional experience in advanced video editing, VFX and AI automation. I deliver modern, scalable content for digital creators, brands and sports—with TikTok @nidzp.vfx as my main showcase. My AI-driven workflow speeds up production, giving clients rapid delivery and consistent quality.",
    highlights: [
      "AI-powered editing – up to 3x faster delivery",
      "Workflow focused on TikTok virality and trends",
      "Reliable partner for agencies, brands & athletes"
    ],
    about: [
      "• 5+ years in digital video, VFX and AI post-production",
      "• Top speed without quality compromise",
      "• Main focus: TikTok, short-form & viral content"
    ]
  },
  sr: {
    hero: "Vrhunski VFX, AI Video & Montaža",
    desc: "5 godina profesionalnog iskustva u naprednoj video montaži, VFX-u i AI automatizaciji. Kreiram moderan i skalabilan sadržaj za kreatore, brendove i sport – sa TikTok @nidzp.vfx kao glavnim referentnim kanalom. AI workflow značajno ubrzava produkciju i omogućava brzu isporuku uz dosledan kvalitet.",
    highlights: [
      "AI montaža – do 3x brža isporuka",
      "Workflow prilagođen TikTok viralnosti i trendovima",
      "Pouzdan partner za agencije, brendove i sportiste"
    ],
    about: [
      "• 5+ godina iskustva u digitalnom videu, VFX-u i AI montaži",
      "• Maksimalna brzina bez gubitka kvaliteta",
      "• Fokus: TikTok, short form i viralni sadržaj"
    ]
  }
};

// TypeScript-friendly animacija za karaktere
const heroCharAnim: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.028 * i, type: "spring" as const, stiffness: 160, damping: 13 }
  })
};

const sectionAnim: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const cardAnim: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: (i: number = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.11 * i, duration: 0.48, type: "spring" as const, stiffness: 110 }
  })
};

export default function HomePage() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const [lang, setLang] = useState<"sr" | "en">("en");
  const t = summary[lang];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[rgb(var(--color-bg))] transition-colors duration-300 font-sans">
      {/* Toggles */}
      <div className="fixed top-5 right-5 z-50 flex gap-2">
        <button
          onClick={() => setDark(d => !d)}
          className="button-main px-4 py-2 rounded-full bg-black/40 border border-cyan-400 shadow-main hover:bg-cyan-800 transition"
          aria-label="Toggle dark/light mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
        <button
          onClick={() => setLang(lang === "en" ? "sr" : "en")}
          className="button-main px-4 py-2 rounded-full bg-black/40 border border-cyan-400 shadow-main hover:bg-cyan-800 transition"
          aria-label="Change language"
        >
          {lang === "en" ? "Srpski" : "English"}
        </button>
      </div>

      {/* HERO */}
      <section className="w-full flex flex-col items-center mb-8 mt-10 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-widest text-center text-primary drop-shadow-[0_8px_32px_#38d4f7] select-none"
          initial="hidden"
          animate="visible"
        >
          {[...t.hero].map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={heroCharAnim}
              initial="hidden"
              animate="visible"
              className={char === " " ? "inline-block w-2" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-center text-lg md:text-2xl mt-6 mb-4 text-desc font-semibold animate-fade-in"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.1 }}
        >
          {t.desc}
        </motion.p>
      </section>

      {/* HIGHLIGHTS */}
      <AnimatePresence>
        <motion.section
          className="flex flex-col md:flex-row gap-5 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionAnim}
        >
          {t.highlights.map((h, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardAnim}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="card flex-1 min-w-[260px] max-w-xs text-base md:text-lg text-center font-medium bg-white/10 dark:bg-black/30 border border-cyan-500/20 shadow-main"
            >
              {h}
            </motion.div>
          ))}
        </motion.section>
      </AnimatePresence>

      {/* CTA BUTTONS */}
      <motion.section
        className="flex flex-wrap gap-5 mb-8"
        initial="hidden"
        animate="visible"
        variants={sectionAnim}
      >
        {links.map(link => (
          <motion.a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`button-main flex items-center gap-2 text-lg px-6 py-3 shadow-main transition-all duration-200 font-bold
              ${link.main ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white scale-105 hover:scale-110" : "bg-black/30 border border-cyan-400 hover:bg-cyan-900"}
            `}
            whileHover={{ scale: link.main ? 1.14 : 1.07 }}
            whileTap={{ scale: 0.97 }}
            aria-label={link.label}
          >
            <span>{link.icon}</span> {link.label}
          </motion.a>
        ))}
      </motion.section>

      {/* ABOUT */}
      <motion.section
        className="max-w-3xl mx-auto mb-14 px-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionAnim}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {lang === "en" ? "About Me" : "O meni"}
        </motion.h2>
        <ul className="flex flex-col gap-2 text-main text-lg md:text-xl font-semibold text-center">
          {t.about.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={cardAnim}
              initial="hidden"
              animate="visible"
              className="opacity-85"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* FOOTER */}
      <footer className="mt-10 pb-6 text-center text-desc font-medium text-base opacity-80">
        &copy; {new Date().getFullYear()} NIDZP | TikTok <a href="https://www.tiktok.com/@nidzp.vfx" className="text-accent underline"> @nidzp.vfx</a>
        <br />
        <a href="mailto:nikola.djokic10@gmail.com" className="text-accent underline">nikola.djokic10@gmail.com</a>
      </footer>
    </main>
  );
}
