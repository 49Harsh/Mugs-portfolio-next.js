import { IoCodeSlashOutline } from "react-icons/io5";
import { PiDesktopTower } from "react-icons/pi";
import { FaMobileRetro } from "react-icons/fa6";

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and performant websites using modern technologies.',
      icon: <IoCodeSlashOutline className="h-12 w-12 text-blue-500" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces.',
      icon: <PiDesktopTower className="h-12 w-12 text-blue-500" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Developing cross-platform mobile applications for iOS and Android.',
      icon: <FaMobileRetro className="h-12 w-12 text-blue-500" />,
    },
  ]

  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service