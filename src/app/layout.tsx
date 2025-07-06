import "./globals.css";
<<<<<<< HEAD
import { Inter } from "next/font/google";

export const metadata = {
  title: "NIDZP.VFX | Brutalni VFX, Edit & AI Video Portfolio",
  description: "Viralni VFX i AI video editing – Goated Edits za TikTok, Instagram, YouTube, brendove i influensere.",
  openGraph: {
    title: "NIDZP.VFX | Brutalni VFX Portfolio",
    description: "Viralni VFX i AI video editing – Goated Edits. TikTok, Instagram, YouTube, brendovi i influenseri.",
    url: "https://nidzp-vfx-portfolio.vercel.app",
    siteName: "NIDZP.VFX Portfolio",
    images: [
      {
        url: "/pozadina.png",
        width: 1200,
        height: 630,
        alt: "NIDZP.VFX Portfolio Background"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
=======
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDZP.VFX | Elite Video Editor & Creative Studio",
  description: "World-class VFX, editing & AI content. TikTok, Instagram, YouTube, commercials. Fast delivery. Brutal results.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-main font-sans antialiased">{children}</body>
>>>>>>> 65334435ac05bf9c2a6ae4d3f33e50d0208d8583
    </html>
  );
}
