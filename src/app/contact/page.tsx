'use client';
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/mblgzaqy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <>
      <main className="bg-[#fbfbfb] min-h-screen">
        <div className="px-6 md:px-10 lg:px-16 xl:px-8">
          <Header showHeadline={false} />
        </div>

        <div className="px-6 py-8 space-y-16">
          <section className="px-6 md:px-10 lg:px-16 xl:px-8 py-16 space-y-16">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-600 vercetti">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Formulario dinámico */}
              {submitted ? (
                <div className="text-green-600 text-xl font-semibold">
                  ✅ Thanks for contacting us! We’ll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={6}
                    className="w-full border border-gray-300 p-2 rounded"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              )}

              {/* Info de contacto estilo Buck */}
              <div className="text-gray-700 text-base space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Portland</h3>
                  <p>123 Creative Avenue<br />Portland, OR 97202<br />United States (Map it ↗)</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p>+1 (503) 555-1234</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">New Business</h3>
                  <p><a href="mailto:newbiz@catcow.tv" className="text-blue-600 hover:underline">newbiz@catcow.tv</a></p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">General Inquiries</h3>
                  <p><a href="mailto:info@catcow.tv" className="text-blue-600 hover:underline">info@catcow.tv</a></p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Press</h3>
                  <p><a href="mailto:press@catcow.tv" className="text-blue-600 hover:underline">press@catcow.tv</a></p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Social</h3>
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">Instagram</a>,{" "}
                    <a href="#" className="text-blue-600 hover:underline">Vimeo</a>,{" "}
                    <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full h-[500px] mt-20 border-t border-gray-200">
          <iframe
            className="w-full h-full grayscale-[70%] contrast-125 brightness-95"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5369216119984!2d-122.6611294553062!3d45.55964032527496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a710bb1a0293%3A0xa969935377c52bf7!2sCatCow%20Animation%20Studio!5e0!3m2!1sen!2sus!4v1743714085454!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
        <Footer />
      </main>
    </>
  );
}
