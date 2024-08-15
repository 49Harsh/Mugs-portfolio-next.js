

import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import peoples from '@/public/images/main011.png'

const HeroPage = () => {
  return (
    <section id='hero' className="bg-white dark:bg-[#1E1E1E] p-4 md:p-8 lg:p-12 min-h-screen flex flex-col items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 mx-10">
          <h2 className="text-black dark:text-white font-semibold mb-2">Hi I am</h2>
          <h1 className="text-4xl md:text-5xl lg:text-3xl text-orange-500 font-semibold mb-2">Muhammad Umair</h1>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold mb-4">UI & UX Designer</h3>
          <p className="text-grey-600 dark:text-white mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Hire Me
          </button>
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-center items-center ">
          <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] flex justify-center items-center rounded-full overflow-hidden">
            <Image
              src={peoples}
              alt="Muhammad Umair"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-row  justify-center items-center  space-x-4">
        <FaFacebook className="text-black dark:text-white hover:text-blue-700 cursor-pointer" />
        <FaTwitter className="text-black dark:text-white hover:text-blue-500 cursor-pointer" />
        <FaInstagram className="text-black dark:text-white hover:text-orange-500 cursor-pointer" />
        <FaLinkedin className="text-black dark:text-white hover:text-blue-500 cursor-pointer" />
      </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default HeroPage