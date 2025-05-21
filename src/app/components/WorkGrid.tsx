// src/components/WorkGrid.tsx
import Image from "next/image";
import Link from "next/link";


export default function WorkGrid() {
  return (
   
    <section className="px-6 py-8 space-y-16">
      {/* Work Item Row */}
      <div className="flex flex-col md:flex-row gap-6">
        
        
        
        {/* Main Project (60%)------------------------------- */}
        <Link href="/work/fior-di-maso" className="w-full md:w-[60%] group">
          {/* Imagen */}
          <div className="bg-gray-300 aspect-video relative overflow-hidden">
            <Image
              src="/images/fior_de_maso.png"
              alt="Project 1"
              fill
              priority
              className="object-cover transition duration-300 group-hover:brightness-70"
            />
          </div>
          {/* Info: Work (izquierda) + Título y descripción (derecha) */}
          <div className="pt-4 flex justify-between items-start">
              {/* Título + Descripción alineados a la izquierda */}
              <div>
              <h2 className="text-[22px] font-bold text-blue-600 md:text-xl vercetti">Fior di Maso Comercial</h2>
                <p className="text-gray-500 text-base w-full md:w-[70%]">A handcrafted identity for a family-owned cheese company rooted in Italian tradition. We blended rustic charm with modern minimalism to tell a story of flavor, heritage, and timeless craftsmanship — transforming Fior di Maso into a bold, contemporary brand that still feels like home.</p>
              </div>
                {/* "Work" alineado a la derecha */}
                
                <div className="hidden md:flex items-center gap-1 text-blue-600 text-sm shrink-0">
          <span>Work</span>
          <Image src="/images/ojos-03.svg" alt="icon enter view" width={22} height={22} style={{ height: "auto" }} className="inline-block"/>
        </div>
          </div>
        </Link>





        {/* Secondary Project (40%) */}
       {/* Secondary Project (40%) */}
        <Link href="/work/vitalant" className="w-full md:w-[40%] group">
          <div className="bg-gray-300 aspect-video relative overflow-hidden">
            <Image 
              src="/images/vitalant.png" 
              alt="Project 2" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover transition duration-300 group-hover:brightness-70" 
            />
          </div>
          <div className="pt-4 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            {/* Texto: título y descripción */}
            <div className="w-full md:max-w-[80%]">
              <h2 className="text-[22px] font-bold text-blue-600 md:text-xl vercetti">
                Vitalant – Blood Donation Campaign
              </h2>
              <p className="text-gray-500 text-base">
                We partnered with Vitalant to bring urgency and emotion to the forefront of blood donation. Through dynamic animation and human-centered storytelling, we crafted a powerful campaign that highlights how just a few seconds can save a life. A bold visual language meets a compassionate call to action — inspiring audiences to give more than blood: to give hope.
              </p>
            </div>

            {/* Etiqueta "Work" */}
            <div className="hidden md:flex items-center gap-1 text-blue-600 text-sm shrink-0 md:ml-4">
              <span>Work</span>
              <Image
                src="/images/ojos-03.svg"
                alt="icon enter view"
                width={22}
                height={22}
                style={{ height: "auto" }}
                className="inline-block"
              />
            </div>
          </div>
        </Link>

      </div>

      {/* Work Item Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Fila 2 Secondary Project (40%) */}
        <Link href="#" className="w-full md:w-[40%] group">
          <div className="bg-gray-300 aspect-video relative">
            <Image src="/images/enfamil.png" alt="Project 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
          {/* Info: Work (izquierda) + Título y descripción (derecha) */}
          <div className="pt-4 flex justify-between items-start">
              {/* Título + Descripción alineados a la izquierda */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 vercetti">Fior di Maso Comercial</h2>
                <p className="text-gray-500 text-base w-full md:w-[70%]">A handcrafted identity for a family-owned cheese company rooted in Italian tradition. We blended rustic charm with modern minimalism to tell a story of flavor, heritage, and timeless craftsmanship — transforming Fior di Maso into a bold, contemporary brand that still feels like home.</p>
              </div>
                {/* "Work" alineado a la derecha */}
                <div className="hidden md:flex items-center gap-1 text-blue-600 text-sm shrink-0">
                  <span>Work</span>
                  <Image src="/images/ojos-03.svg" alt="icon enter view"
                    width={22}
                    height={22}
                    style={{ height: "auto" }} 
                    className="inline-block"
                  />
                </div>
          </div>
        </Link>

         {/* Main Project (60%) */}
         <Link href="#" className="w-full md:w-[60%] group">
          <div className="bg-gray-300 aspect-video relative">
            <Image src="/images/blueheart.jpg" alt="Project 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
          {/* Info: Work (izquierda) + Título y descripción (derecha) */}
          <div className="pt-4 flex justify-between items-start">
              {/* Título + Descripción alineados a la izquierda */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 vercetti">Fior di Maso Comercial</h2>
                <p className="text-gray-500 text-base w-full md:w-[70%]">A handcrafted identity for a family-owned cheese company rooted in Italian tradition. We blended rustic charm with modern minimalism to tell a story of flavor, heritage, and timeless craftsmanship — transforming Fior di Maso into a bold, contemporary brand that still feels like home.</p>
              </div>
                {/* "Work" alineado a la derecha */}
                <div className="hidden md:flex items-center gap-1 text-blue-600 text-sm shrink-0">
                  <span>Work</span>
                  <Image src="/images/ojos-03.svg" alt="icon enter view"
                    width={22}
                    height={22}
                    style={{ height: "auto" }} 
                    className="inline-block"
                  />
                </div>
          </div>
        </Link>
      </div>

      {/* Más filas pueden agregarse igual que arriba */}
    </section>
  );
}

  