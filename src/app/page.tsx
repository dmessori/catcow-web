"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import WorkGrid from "./components/WorkGrid";
import Footer from "./components/Footer";

export default function Home() {
  const [showHero, setShowHero] = useState(true);
  const [showHeroText, setShowHeroText] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideoTimer = setTimeout(() => {
      videoRef.current?.play();
    }, 3000);

    const fadeOutTextTimer = setTimeout(() => {
      setShowHeroText(false);
    }, 4600);

    const hideHeroTimer = setTimeout(() => {
      setShowHero(false);
    }, 11000);

    return () => {
      clearTimeout(playVideoTimer);
      clearTimeout(fadeOutTextTimer);
      clearTimeout(hideHeroTimer);
    };
  }, []);

  return (
    <main className="relative bg-[#fbfbfb] min-h-screen">

      {/* HERO OVERLAY */}
      <section
  className={`fixed inset-0 z-50 flex items-center justify-center text-center overflow-hidden ${
    showHero ? "opacity-100 pointer-events-auto" : "hidden"
  }`}
>
  {/* Video de fondo */}
  <video
    ref={videoRef}
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
  >
    <source src="/videos/hero_033.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  {/* Texto por delante del video */}
  <div
  className={`absolute z-20 px-4 transition-opacity duration-1000 ease-in-out ${
    showHeroText ? "opacity-100" : "opacity-0"
  }`}
>
  
    <h1 className="text-4xl sm:text-6xl font-bold mb-6 max-w-3xl text-[#155cfb] leading-[1.15]">
      CatCow is a creative studio that brings bold stories and wild ideas to life through animation, design, and a whole lot of heart.
    </h1>
    <button
  onClick={() => setShowHero(false)}
  className="mt-6 w-8 h-8 mx-auto flex items-center justify-center text-white border-3 border-blue-600 bg-blue-600 rounded-full transition duration-300 ease-in-out hover:bg-[#fdcd7b] hover:text-blue-600"
>
  ✕
</button>
  </div>
</section>


      {/* CONTENIDO DEL SITIO */}
      <div className="px-6 md:px-10 lg:px-16 xl:px-8 pt-12 relative z-0">
        <Header />
        <WorkGrid />
        
      </div>
      <Footer />
      {/* MARQUEE */}
      <a
        href="/contact"
        className="block w-full overflow-hidden bg-[#f0f0f0] m-0 p-0"
        aria-label="Go to Contact Page"
      >
        <div className="animate-marquee whitespace-nowrap text-[70px] text-blue-600 newake leading-none m-0 p-0">
          <span className="inline-block mr-20">
            Come connect with us in every{" "}
            <span className="underline decoration-blue-600 decoration-5 underline-offset-4">
              KFL-PDX
            </span>
          </span>
          <span className="pr-16">-</span>
          <span className="inline-block mr-20">
            Come connect with us in every{" "}
            <span className="underline decoration-blue-600 decoration-5 underline-offset-4">
              KFL-PDX
            </span>
          </span>
          <span className="pr-16">-</span>
          <span className="inline-block mr-20">
            Come connect with us in every{" "}
            <span className="underline decoration-blue-600 decoration-5 underline-offset-4">
              KFL-PDX
            </span>
          </span>
          <span className="pr-16">-</span>
        </div>
      </a>
    </main>
  );
}
