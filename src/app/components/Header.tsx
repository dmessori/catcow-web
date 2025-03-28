import Link from "next/link";

export default function Header() {
    return (
      <header className="w-full px-6 py-8">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
    
    {/* Logo + Headline en fila */}
    <div className="flex items-center gap-6">
      <img src="/logo-catcow.svg" alt="CatCow logo" width={230} />
      <p className="headline max-w-[55%] ml-10">
        CatCow is a creative studio that brings bold stories and wild ideas to life through animation, design, and a whole lot of heart.
      </p>
    </div>

    {/* Menú */}
    <nav className="flex items-center gap-6 font-vercetti text-[18px] md:text-[20px] text-blue-600 font-medium">
  <Link href="/work" className="link-underline hidden md:block">Work</Link>
  <Link href="/about" className="link-underline hidden md:block">About</Link>
  <a href="https://kf-lpdx.com" target="_blank" rel="noopener noreferrer" className="link-underline hidden md:block">KFL&nbsp;PDX</a>
  <Link href="/contact" className="link-underline hidden md:block">Contact</Link>
  <Link href="/work" className="text-[26px]" aria-label="Menu">☰</Link>
</nav>



  </div>
</header>

    );
  }
  