import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto w-full">

        <div className="block md:hidden">
          <div className="flex flex-row flex-wrap justify-center gap-4 w-full mb-8">
            <div className="flex-1 min-w-0">
              <div className="text-orange-500 font-semibold mb-2 text-left">Navigate</div>
              <ul className="space-y-1 text-sm text-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-orange-500 font-semibold mb-2 text-left">Categories</div>
              <ul className="space-y-1 text-sm text-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-orange-500 font-semibold mb-2 text-left">Features</div>
              <ul className="space-y-1 text-sm text-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="mb-2">
              <Image src="/footer_logo.png" alt="Footer Logo" width={40} height={40} />
            </div>
            <div className="text-sm">Hello@RecomCompany.co</div>
            <div className="text-sm mb-2">+91-157-256-4862</div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs">get social</span>
              <a href="#"><Image src="/twitter.png" alt="Twitter" width={20} height={20} className="object-contain" /></a>
              <a href="#"><Image src="/instagram.png" alt="Instagram" width={20} height={20} className="object-contain" /></a>
              <a href="#"><Image src="/facebook.png" alt="Facebook" width={20} height={20} className="object-contain" /></a>
            </div>
            <div className="text-xs text-gray-400 mt-2">powered by <span className="text-white font-bold">SAASPECT</span></div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:justify-between md:items-start gap-10">

          <div className="flex-1 flex flex-col gap-4 min-w-[220px] items-start">
            <div className="mb-2">
              <Image src="/footer_logo.png" alt="Footer Logo" width={40} height={40} />
            </div>
            <div className="text-sm">Hello@RecomCompany.co</div>
            <div className="text-sm mb-2">+91-157-256-4862</div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs">get social</span>
              <a href="#"><Image src="/twitter.png" alt="Twitter" width={20} height={20} className="object-contain" /></a>
              <a href="#"><Image src="/instagram.png" alt="Instagram" width={20} height={20} className="object-contain" /></a>
              <a href="#"><Image src="/facebook.png" alt="Facebook" width={20} height={20} className="object-contain" /></a>
            </div>
            <div className="text-xs text-gray-400 mt-2">powered by <span className="text-white font-bold">SAASPECT</span></div>
          </div>

          <div className="flex-[2] grid grid-cols-3 gap-16 w-auto">

            <div>
              <div className="text-orange-500 font-semibold mb-2 text-left">Navigate</div>
              <ul className="space-y-1 text-sm text-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <div className="text-orange-500 font-semibold mb-2 text-left">Categories</div>
              <ul className="space-y-1 text-sm text-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <div className="text-orange-500 font-semibold mb-2 text-left">Features</div>
              <ul className="space-y-1 text-sm text-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        Copyright © 2023 Saaspect. By Saaspect Inc | All rights reserved | Privacy Policy | Terms of use
      </div>
    </footer>
  );
}

export default Footer;