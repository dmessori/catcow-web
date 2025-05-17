import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function WorkPage() {
  return (
    <main className="bg-[#fbfbfb] min-h-screen px-6 md:px-10 lg:px-16 xl:px-8 py-10">
      <Header showHeadline={false} />
      <div className="w-full px-6 py-8">

      <h1 className="text-4xl font-bold mb-10 text-blue-600 vercetti">Our Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(projects).map(([slug, project]) => (
          <Link key={slug} href={`/work/${slug}`} className="group border border-gray-200 rounded-md overflow-hidden hover:bg-gray-50 transition">
            {project.thumbnail && (
              <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            )}
            <div className="p-4">
              <h2 className="text-2xl text-blue-600 font-bold group-hover:underline">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-2 text-sm text-gray-400">{project.year}</p>
            </div>
          </Link>
        ))}
      </div>

      
      </div>
      <Footer />
    </main>
  );
}