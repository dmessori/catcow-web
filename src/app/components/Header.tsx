'use client';
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ← AGREGÁ ESTO
import AnimatedLogo from "./AnimatedLogo";

export default function Header({ showHeadline = true }: { showHeadline?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full px-6 py-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        {/* Logo */}
        <div className="w-full flex justify-start md:w-auto">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="block w-[200px] h-[150px] "
        >
          <AnimatedLogo />
        </Link>

        </div>

        {/* Headline */}
        {showHeadline ? (
          <p className="headline w-full text-left leading-snug text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] md:max-w-[55%]">
            CatCow is a creative studio that brings bold stories and wild ideas to life through animation, design, and a whole lot of heart.
          </p>
        ) : (
          <div className="w-full md:max-w-[55%] h-[60px]"></div>
        )}

        {/* Nav + Burger */}
        <nav className="flex items-center justify-end gap-4 w-full text-blue-600 font-medium text-[16px] md:text-[20px] vercetti">
          <Link href="/work" className="link-underline">Work</Link>
          <Link href="/about" className="link-underline">About</Link>
          <Link href="https://kf-lpdx.com" target="_blank" rel="noopener noreferrer" className="link-underline">KFL PDX</Link>
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="text-[26px] md:text-[28px]">☰</button>
        </nav>
      </div>

      {/* FULLSCREEN OVERLAY MENU */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#fbfbfb]/95 backdrop-blur-sm flex flex-col justify-center items-center text-center text-4xl font-bold text-blue-600 vercetti"
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-4xl"
        aria-label="Close menu"
      >
        ×
      </button>

      <div className="space-y-6">
        <Link href="/work" onClick={() => setMenuOpen(false)} className="block hover:underline">Work</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:underline">About</Link>
        <Link href="https://kf-lpdx.com" target="_blank" rel="noopener noreferrer" className="block hover:underline">KFL PDX</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)} className="block hover:underline">Blog</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:underline">Contact</Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
