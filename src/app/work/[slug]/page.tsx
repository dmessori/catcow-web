import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // ✅ Import correcto, sin conflictos inside Page



export default function ProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug as keyof typeof projects;
    const project = projects[slug];

  if (!project) return notFound();

  return (
    <>
    <main className="bg-[#fbfbfb] min-h-screen">

         {/* header inside page */}

      <div className="px-6 md:px-12 lg:px-6 xl:px-4">
        <Header />
        </div>

        {/* Project description */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-black mb-10">
            <div className="space-y-1">
                <p className="project-title">{project.title}</p>
                <p className="project-description">{project.year}</p>
            </div>

            <div className="md:col-span-2 text-gray-700 leading-relaxed text-base">
                {project.description}
            </div>
        </div>

        

      {/* Main Video */}

      <div className="relative aspect-video bg-gray-300 mb-8">
        <Image src={project.images[0]} alt="Main" fill className="object-cover" />
      </div>
      
      <section className="px-6 py-8 space-y-16">
        {/* Two Column Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative aspect-square bg-gray-200">
            <Image src={project.images[1]} alt="1" fill className="object-cover" />
            </div>
            <div className="relative aspect-square bg-gray-200">
            <Image src={project.images[2]} alt="2" fill className="object-cover" />
            </div>
        </div>

        {/* Full Width Image */}
        <div className="relative aspect-video bg-gray-200 mb-8">
            <Image src={project.images[3]} alt="3" fill className="object-cover" />
        </div>

        {/* Two More Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative aspect-square bg-gray-200">
            <Image src={project.images[4]} alt="4" fill className="object-cover" />
            </div>
            <div className="relative aspect-square bg-gray-200">
            <Image src={project.images[5]} alt="5" fill className="object-cover" />
            </div>
        </div>

        {/* Final Full Image */}
        <div className="relative aspect-video bg-gray-200 mb-16">
            <Image src={project.images[3]} alt="Final" fill className="object-cover" />
        </div>

        {/* Next Project Link */}
        <div className="text-right text-sm mb-8">
            <p className="text-gray-400">Next Project</p>
            <a href={`/work/${project.nextProject.slug}`} className="text-black font-bold hover:underline">
            {project.nextProject.title}
            </a>
        </div>
        </section>
      
    </main>
    <Footer />
    </>
  );
}
