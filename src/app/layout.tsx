import "./globals.css";
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
    </html>
  );
}
