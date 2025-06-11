'use client'

import Image from 'next/image'

function FirstSection() {
  return (
    <>
      <section className="bg-white min-h-screen flex items-center px-6 py-12 overflow-hidden border-none">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col xl:flex-row items-center gap-12">
            {/* Left side text */}
            <div className="xl:w-[40%] flex flex-col items-center xl:items-start text-center xl:text-left">
              <h1 className="text-6xl md:text-7xl xl:text-[60px] font-bold leading-tight mb-6 text-black">
                Technoclass
              </h1>
              <h2 className="text-3xl md:text-4xl xl:text-[40px] text-black mb-8 font-bold">
                Experience the future of teaching
              </h2>
              <div className="xl:hidden w-full mb-8 relative overflow-hidden">
                <Image
                  src="/ipadpro.png"
                  alt="iPad Pro"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* bxes which are over the ipad image */}
                <div className="absolute h-[70px] w-[170px] max-w-full top-4 right-4 lg:w-[40vw] bg-white rounded-2xl shadow-lg p-4 px-2 flex flex-col justify-center items-center text-center mb-2 overflow-hidden">
                  <div className="font-semibold text-xs sm:text-sm text-black mb-1 truncate w-full whitespace-nowrap overflow-hidden">Some feature</div>
                  <div className="text-black text-xs sm:text-sm truncate w-full whitespace-nowrap overflow-hidden">Feature description. Feature description. Feature description.</div>
                </div>
                <div className="absolute h-[70px] w-[170px] left-4 bottom-4 md:left-1/2 md:-translate-x-1/2 md:bottom-[8%] md:w-2/3 md:max-w-lg lg:left-4 lg:bottom-4 lg:w-[40vw] lg:max-w-full lg:-translate-x-0 bg-white rounded-2xl shadow-lg p-4 px-2 flex flex-col justify-center items-center text-center overflow-hidden">
                  <div className="font-semibold text-xs sm:text-sm text-black mb-1 truncate w-full whitespace-nowrap overflow-hidden">Some feature</div>
                  <div className="text-black text-xs sm:text-sm truncate w-full whitespace-nowrap overflow-hidden">Feature description. Feature description. Feature description.</div>
                </div>
              </div>
              <p className="text-lg md:text-xl xl:text-xl text-black mb-8 xl:mb-12">
                Discover innovative tools and methods that will revolutionize your teaching approach. 
                Join thousands of educators who are already transforming their classrooms with our 
                cutting-edge solutions.
              </p>
              <button className="bg-black text-white px-4 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors">
                Get Quotation
              </button>
            </div>
            {/* Right side only visible on desktop */}
            <div className="hidden xl:block xl:w-[60%] relative overflow-hidden">
              <Image
                src="/ipadpro.png"
                alt="iPad Pro"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Feature box 1: Top right on xl */}
              <div className="absolute xl:right-4 xl:top-4 w-80 max-w-full bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start xl:flex">
                <div className="font-semibold text-lg text-black mb-1 truncate w-full whitespace-nowrap overflow-hidden">Some feature</div>
                <div className="text-black text-sm truncate w-full whitespace-nowrap overflow-hidden">Feature description. Feature description. Feature description.</div>
              </div>
              {/* Feature box 2: Bottom left on xl */}
              <div className="absolute xl:left-4 xl:bottom-4 w-80 max-w-full bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start xl:flex">
                <div className="font-semibold text-lg text-black mb-1 truncate w-full whitespace-nowrap overflow-hidden">Some feature</div>
                <div className="text-black text-sm truncate w-full whitespace-nowrap overflow-hidden">Feature description. Feature description. Feature description.</div>
              </div>
              {/* Feature box 3: Bottom right, only on xl and up */}
              <div className="absolute right-4 bottom-4 w-80 max-w-full bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start xl:flex">
                <div className="font-semibold text-lg text-black mb-1 truncate w-full whitespace-nowrap overflow-hidden">Some feature</div>
                <div className="text-black text-sm truncate w-full whitespace-nowrap overflow-hidden">Feature description. Feature description. Feature description.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Technoclass Section */}
      <section className="w-full pt-12 pb-16 bg-white border-none">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-[70px] font-bold text-center mb-4 decoration-4 text-black">
            Why Technoclass
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-3xl font-medium text-center mb-6 text-black">Think. Create. Innovate.</h3>
          <p className="text-center text-lg md:text-xl max-w-6xl mx-auto mb-12 text-black">
            Product description will be here in one small paragrapgh. Product description will be here in one small paragrapgh. Product descriptionProduct description will be here in one small paragrapgh. Product description Prodmjnidkjnidndijndijnjndcjdcuct description will be here in one small paragrapgh. Product description will be here in one small paragrapgh. Product descriptionProduct description will be here in one small pacription  Product description will be here in one small paragr
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 max-w-6xl mx-auto mb-60">
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center bg-white text-black">
              <div className="text-3xl font-bold mb-1">105 <span className="text-base font-normal whitespace-nowrap">lbs</span></div>
              <div className="text-black text-base whitespace-nowrap">Net Weight</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center bg-white text-black">
              <div className="text-3xl font-bold mb-1">26 <span className="text-base font-normal whitespace-nowrap">mph</span></div>
              <div className="text-black text-base whitespace-nowrap">Top Speed</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center bg-white text-black">
              <div className="text-3xl font-bold mb-1">38 <span className="text-base font-normal whitespace-nowrap">miles</span></div>
              <div className="text-black text-base whitespace-nowrap">Max Range</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center bg-white text-black">
              <div className="text-3xl font-bold mb-1">89 <span className="text-base font-normal whitespace-nowrap">nm</span></div>
              <div className="text-black text-base whitespace-nowrap">Max Torques</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center bg-white text-black">
              <div className="text-3xl font-bold mb-1">22%<span className="text-base font-normal whitespace-nowrap"> slope</span></div>
              <div className="text-black text-base whitespace-nowrap">Hill Climbing</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center bg-white text-black">
              <div className="text-3xl font-bold mb-1">2x</div>
              <div className="text-black text-base whitespace-nowrap">Hydralic Disc Brakes</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FirstSection 