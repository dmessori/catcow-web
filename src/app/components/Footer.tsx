// src/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] px-12 pt-12 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
        {/* Logo + Address */}
        
        {/* Columna principal unificada */}
<div className="flex flex-col gap-8">
  {/* Fila 1: Título */}
  <div>
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] newake text-blue-600 leading-none">
  CatCow.tv
</h2>
    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl newake text-blue-600 leading-none">
  Portland, Oregon.
</h3>
  </div>

  {/* Fila 2: Dirección + Contacto */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 text-black text-[17px]">
    {/* Dirección */}
    <div>
      <p className="font-bold">HQ Address</p>
      <p>5020 NE Martin Luther King Jr Blvd, Portland, OR 97211</p>
    </div>
    {/* Contacto */}
    <div>
      <a href="mailto:hey@catcow.tv" className="link-underline text-blue-600 font-bold">
        hey@Catcow.tv
      </a>
      <p>+1 608 440 3292</p>
      <p>+1 503 290 6182</p>
    </div>
  </div>

  {/* Fila 3: Newsletter */}
  <div className="w-full md:w-[100%]">
    <p className="text-black text-base md:text-lg">
      Sign up for our newsletter — all fam, no spam.
    </p>
    <div className="flex flex-col md:flex-row gap-2 mt-2">
      <input
        type="email" placeholder="Email"  name="email" className="w-full md:w-[320px] px-4 py-2 rounded border"
      />
      <button className="bg-black text-white px-6 py-2 rounded-full">
        Signup
      </button>
    </div>
  </div>
</div>

      

        {/* Award */}
        <div className="flex flex-col items-start justify-start text-left md:items-center md:justify-center md:text-center">

        <Image src="/aaa_logo.svg" alt="AAA Awards Logo" width={200} height={120} />
          <p className="font-bold text-black">Gold Winner</p>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-end text-left text-blue-600 font-bold text-[20px] h-full">
          <ul className="space-y-3">
            <li><a href="#" className="relative inline-block after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Work</a></li>
            <li><a href="#" className="relative inline-block after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">About</a></li>
            <li><a href="#" className="relative inline-block after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Contact</a></li>
            <li><a href="#" className="relative inline-block after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Blog</a></li>
            <li><a href="#" className="relative inline-block after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">LinkedIn</a></li>
            <li><a href="#" className="relative inline-block after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-right text-xs mt-8 text-gray-500">
        © 2025 CatCow.tv. All Rights Reserved.
      </p>
    </footer>
  );
}

  