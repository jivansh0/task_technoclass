import React from 'react';
import Image from 'next/image';

function TestimonialsSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white pt-[250px] sm:pt-[250px] md:pt-[200px] lg:pt-[300px] pb-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">Testimonials</h2>
      <div className="flex flex-col items-center w-full">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-2">
          <Image
            src="/profile.png"
            alt="Yung lee"
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-lg font-semibold mb-4 text-black">Yung lee</div>
        <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto mb-6">

          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[6rem] md:text-[8rem] text-gray-200 opacity-40 select-none pointer-events-none leading-none font-serif">&ldquo;</span>
          <p className="text-black text-center mx-auto px-1 md:px-2 text-base md:text-lg">
            Product description will be here in one small paragraph. Product description will be here in one small paragraph. Product description will be here in one small paragraph. Product descriptio.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
          <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
          <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
          <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
          <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">Contact Us</h2>
        <form className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-semibold text-black">First Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-black">Last Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-black">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-black">Contact number</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
          </div>
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-black">Message</label>
            <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none" />
          </div>
          <button type="submit" className="w-full bg-black text-white rounded-full py-3 text-lg font-medium hover:bg-gray-900 transition">Let&apos;s Talk</button>
        </form>
      </div>
    </section>
  );
}

export default TestimonialsSection; 