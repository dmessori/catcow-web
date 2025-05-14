import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#fbfbfb] min-h-screen">
        {/* Header */}
        <div className="px-6 md:px-10 lg:px-16 xl:px-8">
          <Header showHeadline={false} />
        </div>

        {/* Contenido principal */}
        <section className="px-6 md:px-10 lg:px-16 xl:px-8 py-12">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed">

            <h1 className="text-4xl font-bold text-blue-600 mb-6 vercetti">About Us</h1>

            <p>
              CatCow is a creative studio that brings bold stories and wild ideas to life
              through animation, design, and a whole lot of heart. We work with brands, agencies,
              and causes that dare to stand out.
            </p>

            <p>
              From quirky character animations to bold motion design, we embrace storytelling in all forms.
              Our team is a collective of artists, thinkers, makers, and dreamers—spread across time zones,
              united by passion.
            </p>

            <p>
              We're not here to just make things pretty (though we do that too). We're here to connect,
              to move people, and to make magic through motion.
            </p>

            {/* Imagen ilustrativa opcional */}
            <div className="w-full aspect-[4/3] relative rounded overflow-hidden shadow-md">
              <Image
                src="/images/catcow-team.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
