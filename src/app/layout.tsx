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

export const metadata = {
  title: "CatCow.tv – Animation & Design Studio",
  description: "Animation & Design by CatCow",
  icons: {
    icon: "/favicon.svg", // o .svg si usás otro tipo
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
