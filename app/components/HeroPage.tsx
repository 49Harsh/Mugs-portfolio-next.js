import Image from 'next/image'

const HeroPage = () => {
  return (
         <section className="bg-gray-100 dark:bg-gray-800 py-20">
           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
               <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
                    <p className="text-xl mb-8">I'm a passionate web developer creating amazing digital experiences.</p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                      Get in touch           
                    </button>         
                </div>         
              <div className="md:w-1/2">           
                <Image
                   src="/images/hero-image.jpg"
                   alt="Hero Image"
                   width={500}
                   height={500}             
                   className="rounded-lg shadow-lg"           
                />         
              </div>       
            </div>     
          </section>   
) }

export default HeroPage