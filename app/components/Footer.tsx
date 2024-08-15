import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/Subtract.png'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8] dark:bg-[#1E1E1E] pt-16 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-16 md:justify-between">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-2xl flex flex-row justify-center items-center">
                <Image src={Logo} alt="Mumair Logo" width={38} height={38} className="mr-2" />
                <span className="text-black dark:text-white font-bold">M</span>
                <span className="text-gray-800 dark:text-white">umair</span>
              </span>
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600  dark:text-white">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-[#545454] w-full h-10 flex justify-center items-center text-sm text-white">
        © 2023 <span className='text-orange-500 mx-2'>Mumair</span>  All Rights Reserved , Inc.
      </div>
    </footer>
  );
};

export default Footer;