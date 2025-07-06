import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
        alt: "NIDZP.VFX Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/pozadina.png" />
        <meta property="og:url" content="https://nidzp-aegs.vercel.app" />
      </head>
      <body className="bg-hero-gradient min-h-screen font-inter text-white antialiased">
        <div className="w-full min-h-screen bg-custom-dark bg-cover bg-no-repeat bg-fixed">
          {/* NAVIGATION could go here */}
          {children}
        </div>
      </body>
    </html>
  );
}
