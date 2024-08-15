import Image from 'next/image'
import peoples2 from '@/public/images/main02.png'

const AboutMe = () => {

  const skills = [
    { name: 'UX', percentage: 90 },
    { name: 'Website Design', percentage: 85 },
    { name: 'App Design', percentage: 95 },
    { name: 'Graphic Design', percentage: 75 },
  ];

  return (
    <section id="about" className="bg-white dark:bg-[#1E1E1E] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:px-36">
          <div className="md:w-1/2 flex justify-center items-center mx-auto">
            <div className="w-72 h-72 md:w-96 md:h-96 mb-8 lg:w-[550px] lg:h-[550px] flex justify-center items-center rounded-full overflow-hidden">
              <Image
                src={peoples2}
                alt="Muhammad Umair"
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-12">
            <h2 className="text-4xl text-black dark:text-white font-bold mb-6">About Me</h2>
            <p className="text-lg text-black dark:text-white mb-8">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in.<br/> Aliquet donec morbi convallis pretium. Turpis
              tempus pharetra
            </p>
            <div className="space-y-6 max-w-md ">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 relative">
                    <div
                      className="bg-orange-500 h-1.5 rounded-full relative"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="absolute -right-1.5 -top-1.5 w-4 h-4 bg-white border-2 border-orange-500 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe