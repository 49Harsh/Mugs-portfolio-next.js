import Image from 'next/image'
import bluLow from '@/public/images/bluLow.svg'
import bluUpr from '@/public/images/bluUpr.svg'
import grnLow from '@/public/images/grnLow.svg'
import grnUpr from '@/public/images/grnUpr.svg'
import orgLow from '@/public/images/orgLow.svg'
import orgUpr from '@/public/images/orgUpr.svg'

const MyProject = () => {
  const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design']
  
  return (
    <section className="py-16 container px-4 max-w-6xl mx-auto bg-white dark:bg-[#1E1E1E]">
      <h1 className="text-4xl text-black dark:text-white font-bold text-center mb-4">My Projects</h1>
      <p className="text-center text-gray-600 dark:text-white mb-8">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus
        lectus. Phasellus consequat urna tellus
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              category === 'Web Design'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap lg:flex-row w-full justify-center gap-8 mb-8">

        {/* all image section */}
        <div className=' flex flex-col '>
          <div className='bg-[#FFEBDB] w-[314px] h-[405px] relative'>
            <div className='h-full w-full z-0 absolute'>
              <Image 
                src={bluLow}
                alt="bluLow"
                width={227}
                height={227}
                className='absolute  top-0 right-4'
                />

            </div>
            {/* div image tow uprr */}
            <div className='absolute h-full w-full z-10'>
              <Image 
                  src={bluUpr}
                  alt="bluLow"
                  width={220}
                  height={220}
                  className='absolute top-[85px]  mb-0 left-6'
                  />
            </div>
            
          </div>
          
          <h6 className='text-sm mt-2 text-orange-500'> Web Design</h6>
          <h3 className='font-bold mt-2 text-black dark:text-white'>AirCalling Landing Page Design</h3>
        </div>
        

        {/* image div 2 mag */}
        <div className='flex flex-col'>
          <div className='bg-[#FFEBDB] w-[314px] h-[405px] relative'>
            <div className='h-full w-full z-0 absolute'>
              <Image 
                src={grnLow}
                alt="bluLow"
                width={226}
                height={226}
                className='absolute bottom-0 top-0 right-4'
                />

            </div>
            {/* div image tow uprr */}
            <div className='absolute h-full w-full z-10'>
              <Image 
                  src={grnUpr}
                  alt="bluLow"
                  width={220}
                  height={220}
                  className='absolute top-[78px]  mb-0 left-6'
                  />
            </div>
            
          </div>

          <h6 className='text-sm mt-2 text-orange-500'> Web Design</h6>
          <h3 className='font-bold mt-2 text-black dark:text-white'>Business Landing Page Design</h3>

        </div>

        {/* image div 3 mag */}
        <div className='flex flex-col'>
          <div className='bg-[#FFEBDB] w-[314px] h-[405px] relative'>
            <div className='h-full w-full z-0 absolute'>
              <Image 
                src={orgLow}
                alt="bluLow"
                width={227}
                height={227}
                className='absolute  top-0 right-4'
                />

            </div>
            {/* div image tow uprr */}
            <div className='absolute h-full w-full z-10'>
              <Image 
                  src={orgUpr}
                  alt="bluLow"
                  width={220}
                  height={220}
                  className='absolute top-[80px]  mb-0 left-6'
                  />
            </div>
            
          </div>

          <h6 className='text-sm mt-2 text-orange-500'> Web Design</h6>
          <h3 className='font-bold mt-2 text-black dark:text-white'>Ecom Web Page Design</h3>


        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
      </div>

     
    </section>
  )
}

export default MyProject