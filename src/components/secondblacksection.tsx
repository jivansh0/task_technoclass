import React from 'react';
import Image from 'next/image';

function SecondBlackSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#111] relative">

      <div className="absolute left-0 right-0 top-0 flex items-center overflow-x-hidden" style={{ transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <div className="flex items-center w-full">
          <div className="ml-[10vw] xl:ml-[10vw] 2xl:ml-[5vw] flex items-center gap-8">

            <div className="relative w-[220px] h-[340px] xl:w-[320px] xl:h-[480px] 2xl:w-[380px] 2xl:h-[560px] rounded-3xl overflow-hidden shadow-xl bg-black flex-shrink-0 z-[1000]">
              <Image src="/cards1.png" alt="Product 1" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-lg xl:text-xl 2xl:text-2xl font-medium">Some product image will be here</div>
            </div>

            <div className="relative w-[220px] h-[340px] xl:w-[320px] xl:h-[480px] 2xl:w-[380px] 2xl:h-[560px] rounded-3xl overflow-hidden shadow-xl bg-black flex-shrink-0 z-[1000]">
              <Image src="/cards2.png" alt="Product 2" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-lg xl:text-xl 2xl:text-2xl font-medium">Some product image will be here</div>
            </div>

            <div className="relative w-[220px] h-[340px] xl:w-[320px] xl:h-[480px] 2xl:w-[380px] 2xl:h-[560px] rounded-3xl overflow-hidden shadow-xl bg-black flex-shrink-0 z-[1000]">
              <Image src="/cards3.png" alt="Product 3" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-lg xl:text-xl 2xl:text-2xl font-medium">Some product image will be here</div>
            </div>

            <div className="relative w-[220px] h-[340px] xl:w-[320px] xl:h-[480px] 2xl:w-[380px] 2xl:h-[560px] rounded-3xl overflow-hidden shadow-xl bg-black flex-shrink-0 mr-[-110px] xl:mr-[-160px] 2xl:mr-[-190px] z-[1000]">
              <Image src="/cards4.png" alt="Product 4" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-lg xl:text-xl 2xl:text-2xl font-medium">Some feature image will be here</div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] mx-auto px-4 md:px-8 flex flex-col items-center z-30 mt-12 md:mt-24">
        <div className="w-full">
          <div className="flex flex-col md:flex-col xl:flex-row w-full items-center gap-y-2">
            <div className="md:w-full xl:w-1/2 w-full text-center pointer-events-auto">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-white">
                Video tile will be here
              </h2>
            </div>
            <div className="md:w-1/2 w-full text-center mt-2 md:mt-0 pointer-events-auto flex flex-col justify-center">
              <p className="text-gray-300 max-w-full md:max-w-[350px] lg:max-w-[400px] xl:max-w-none mx-auto md:text-lg lg:text-xl">
                Product description will be here in one small
                <br className="md:inline lg:inline xl:hidden" />
                <span className="text-orange-400"> paragraph</span>. Product description will be here
                <br className="md:inline lg:inline xl:hidden" /> in one small paragraph. Product description
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 px-4 md:px-8">
        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] md:max-w-[90%] md:mx-auto">
          <Image
            src="/image.png"
            alt="Overlapping Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default SecondBlackSection; 