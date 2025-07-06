import "./globals.css";
import { Inter, Poppins, Bebas_Neue } from "next/font/google";
import { ReactNode } from "react";

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
  title: "NIDZP | VFX & AI Video Portfolio",
  description: "Specijalizovan za napredan video editing, VFX i AI produkciju za digitalne brendove, sport i društvene mreže. Profesionalno. Efikasno. Dokazano.",
  openGraph: {
    title: "NIDZP | VFX & AI Video Portfolio",
    description: "Advanced video editing, VFX & AI content for brands, sport and agencies. Premium results, fast turnaround.",
    url: "https://nidzp.vercel.app",
    siteName: "NIDZP Portfolio",
    images: [
      { url: "/pozadina.png", width: 1200, height: 630, alt: "NIDZP Portfolio" }
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
        <meta property="og:url" content="https://nidzp.vercel.app" />
      </head>
      <body className="min-h-screen font-inter antialiased text-main">
        {children}
      </body>
    </html>
  );
}
