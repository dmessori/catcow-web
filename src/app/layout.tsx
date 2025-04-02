import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🐱🐮 CatCow.tv – Animation & Design Studio",
  description: "CatCow is a creative studio that brings bold stories and wild ideas to life through animation, design, and a whole lot of heart.",
  icons: {
    icon: "/favicon.svg", // Asegúrate de que este archivo esté en /public
  },
  openGraph: {
    title: "CatCow.tv – Animation & Design Studio",
    description: "We bring wild ideas to life through animation, design, and a whole lot of heart.",
    url: "https://catcow-web.vercel.app", // actualizalo si tu dominio es otro
    siteName: "CatCow.tv",
    images: [
      {
        url: "/catcow_redes.png", // opcional, si querés una imagen para redes
        width: 1200,
        height: 630,
        alt: "CatCow.tv Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🐱🐮CatCow.tv – Animation & Design Studio",
    description: "Bold storytelling in animation and design.",
    images: ["/og-image.jpg"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
