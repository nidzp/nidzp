import "./globals.css";
import { Inter, Poppins, Bebas_Neue } from "next/font/google";
import { ReactNode } from "react";

// Inicijalizacija Google fontova sa CSS varijablama za Tailwind
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins"
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas"
});

export const metadata = {
  title: "NIDZP.VFX | Brutalni VFX, Edit & AI Video Portfolio",
  description: "Viralni VFX i AI video editing, Goated Edits. TikTok, Instagram, YouTube, brendovi i influenseri.",
  openGraph: {
    title: "NIDZP.VFX | Brutalni VFX Portfolio",
    description: "Viralni VFX i AI video editing, Goated Edits. TikTok, Instagram, YouTube, brendovi i influenseri.",
    url: "https://nidzp-aegs.vercel.app",
    siteName: "NIDZP.VFX Portfolio",
    images: [
      {
        url: "/pozadina.png",
        width: 1200,
        height: 630,
        alt: "NIDZP.VFX Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bebas.variable} dark`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/pozadina.png" />
        <meta property="og:url" content="https://nidzp-aegs.vercel.app" />
      </head>
      <body className="min-h-screen font-inter antialiased text-main">
        {/* NAVIGATION (navigacija sajta) može se dodati ovde po potrebi */}
        {children}
      </body>
    </html>
  );
}
