import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) return notFound();

  return (
    <>
      <main className="bg-[#fbfbfb] min-h-screen">

        {/* Header */}
        <div className="px-6 md:px-10 lg:px-16 xl:px-8">
          <Header showHeadline={false} />
        </div>

        {/* Project Description */}
        <div className="px-6 md:px-10 lg:px-16 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-black mb-10">
            <div></div>
            <div className="space-y-1">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.year}</p>
            </div>
            <div className="text-gray-700 text-[21px] leading-relaxed text-base pr-9">
              {project.description}
            </div>
          </div>
        </div>

        {/* Main Video */}
        <div className="relative aspect-video bg-black mb-8 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Case Study Images */}
        <div className="px-6 md:px-10 lg:px-16 xl:px-8">
          <section className="px-6 py-8 space-y-16">
            {/* Two-column grid for images (in pairs) */}
            {project.images?.map((src, index) =>
              index % 2 === 0 ? (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative aspect-square bg-gray-200">
                    <Image src={src} alt={`Image ${index}`} fill className="object-cover" />
                  </div>
                  {project.images[index + 1] && (
                    <div className="relative aspect-square bg-gray-200">
                      <Image src={project.images[index + 1]} alt={`Image ${index + 1}`} fill className="object-cover" />
                    </div>
                  )}
                </div>
              ) : null
            )}

            {/* Extra videos */}
            {project.extraVideos?.map((videoSrc, i) => (
              <div key={i} className="relative aspect-video bg-gray-200 mb-8">
                <video
                  className="w-full h-full object-cover"
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            ))}

            {/* Next Project */}
            <div className="text-right text-sm mb-8">
              <p className="text-gray-400">Next Project</p>
              <a
                href={`/work/${project.nextProject.slug}`}
                className="text-black font-bold hover:underline"
              >
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
