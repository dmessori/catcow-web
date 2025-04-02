import Header from "./components/Header";
import WorkGrid from "./components/WorkGrid";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fbfbfb] min-h-screen">
      <div className="px-6 md:px-10 lg:px-16 xl:px-8">
        <Header />
        <WorkGrid />
      </div>
         <Footer />


            {/* Infinite Marquee */}
              <a href="/contact" className="block w-full overflow-hidden bg-[#f0f0f0] m-0 p-0" aria-label="Go to Contact Page">
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
