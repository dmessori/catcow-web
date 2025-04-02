'use client';
import Link from "next/link";
import Image from "next/image";

// Agregamos una prop para controlar si se muestra el headline
type HeaderProps = {
  showHeadline?: boolean;
};

export default function Header({ showHeadline = true }: HeaderProps) {
  return (
    <header className="w-full px-6 py-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">

        {/* Logo */}
        <div className="w-full flex justify-start md:w-auto">
          <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo-catcow.svg"
            alt="CatCow logo"
            width={480}
            height={60}
            className="w-auto h-[60px] md:w-[480px] md:h-auto"
          />
          </Link>
        </div>

        {/* Headline, solo si está habilitado */}
        {showHeadline ? (
  <p className="headline w-full text-left leading-snug text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] md:max-w-[55%]">
    CatCow is a creative studio that brings bold stories and wild ideas to life through animation, design, and a whole lot of heart.
  </p>
) : (
  <div className="w-full md:max-w-[55%] h-[60px]"></div>
)}

        {/* Nav */}
        <nav className="flex flex-nowrap items-center justify-start gap-3 w-full text-blue-600 font-medium text-[16px] md:justify-end md:text-[20px] vercetti">
          <Link href="/work/vitalant" className="link-underline">Work</Link>
          <Link href="/about" className="link-underline">About</Link>
          <a className="link-underline" href="https://kf-lpdx.com" target="_blank" rel="noopener noreferrer">KFL PDX</a>
          <Link href="/contact" className="link-underline">Contact</Link>
          <Link href="/menu" className="text-[22px]" aria-label="Menu">☰</Link>
        </nav>
      </div>
    </header>
  );
}
