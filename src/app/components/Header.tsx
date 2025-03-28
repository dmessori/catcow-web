import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-8">
  <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
    
    {/* Logo */}
    <div className="w-full flex justify-start md:w-auto">
      <img
        src="/logo-catcow.svg"
        alt="CatCow logo"
        width={480}
        height={60}
        className="w-auto h-auto md:w-[480px] md:h-auto"
      />
    </div>

    {/* Headline */}
    <p className="headline w-full text-left leading-snug text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] md:max-w-[55%]">
      CatCow is a creative studio that brings bold stories and wild ideas to life through animation, design, and a whole lot of heart.
    </p>

    {/* Nav */}
    <nav className="flex flex-nowrap items-center justify-start gap-3 w-full text-blue-600 font-medium text-[16px] md:justify-end md:text-[20px] font-vercetti">
      <a className="link-underline" href="/work">Work</a>
      <a className="link-underline" href="/about">About</a>
      <a className="link-underline" href="https://kf-lpdx.com" target="_blank" rel="noopener noreferrer">KFL PDX</a>
      <a className="link-underline" href="/contact">Contact</a>
      <a href="/menu" className="text-[22px]" aria-label="Menu">☰</a>
    </nav>
  </div>
</header>

  );
}
