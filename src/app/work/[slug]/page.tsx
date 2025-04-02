
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

// ✅ Este es el tipado correcto para rutas dinámicas en Next.js 15
type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects[params.slug as keyof typeof projects];
  if (!project) return notFound();

  return (
    <>
    <main className="bg-[#fbfbfb] min-h-screen">

{/* header inside page <-------------------------------------------------------------------------- */}

      <div className="px-6 md:px-10 lg:px-16 xl:px-8">
      <Header showHeadline={false} />
        </div>

{/* Project description <-------------------------------------------------------------------------- */}
        
        <div className="px-6 md:px-10 lg:px-16 xl:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-black mb-10">
            {/* Columna vacía para margen */}
            <div></div>

            {/* Título y año */}
            <div className="space-y-1">
                <p className="project-title">{project.title}</p>
                <p className="project-description">{project.year}</p>
            </div>

            {/* Descripción del proyecto */}
            <div className="text-gray-700 text-[21px] leading-relaxed text-base pr-9">
                {project.description}
            </div>
        </div>
        </div>

        
{/* Main Video <-------------------------------------------------------------------------- */}

      <div className="relative aspect-video bg-black mb-8 overflow-hidden">
            <video
                className="w-full h-full object-cover"
                src="/videos/vitalant_part1.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
      </div>

         {/* case study develpment */}
         <div className="px-6 md:px-10 lg:px-16 xl:px-8">
        <section className="px-6 py-8 space-y-16">

        {/* Two Column Image Row1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/Vitalant_storyboard-32.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/scene_01.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>
         {/* Two Column Image Row2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/scene_02.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/scene_04.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>
         {/* Two Column Image Row3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/scene_03.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/scene_06.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>

        {/* Full Width Image */}
        <div className="relative aspect-video bg-gray-200 mb-8">
        <video
                className="w-full h-full object-cover"
                src="/videos/Vitalant_timming_story_v02.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>

        {/* Two Column Image Row4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/styleframe_all.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/Vita_01.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>
         {/* Two Column Image Row5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/vita_02.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/Vita_01.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>
         {/* Two Column Image Row6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/Vita_04.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/Vita_05.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>
          {/* Two Column Image Row7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/transition_A.png" alt="1" fill className="object-cover" />
            </div>

            <div className="relative aspect-square bg-gray-200">
            <Image src="/images/Vita_06.png" alt="2" fill className="object-cover" />
            </div>
            
        </div>

        {/* Final Full Image */}
        <div className="relative aspect-video bg-gray-200 mb-16">
        <video
            className="w-full h-full object-cover"
            src="/videos/vitalant-reel.mp4"
            controls // 👉 esto activa los controles de reproducción
            playsInline // 👈 opcional para mejor soporte móvil
            />
        </div>

        {/* Next Project Link */}
        <div className="text-right text-sm mb-8">
            <p className="text-gray-400">Next Project</p>
            <a href={`/work/${project.nextProject.slug}`} className="text-black font-bold hover:underline">
            {project.nextProject.title}
            </a>
        </div>
        </section>
        </div>
      
    </main>
    <Footer />
    </>
  );
}
