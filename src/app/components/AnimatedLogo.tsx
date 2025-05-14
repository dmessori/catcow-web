// components/AnimatedLogo.tsx
"use client";
import { useRive } from "@rive-app/react-canvas";

export default function AnimatedLogo() {
  const { RiveComponent } = useRive({
    src: "/images/logo-catcow.riv", // ← ruta correcta ahora
    autoplay: true,
  });

  return <div className="w-full h-full"><RiveComponent /></div>;
}
