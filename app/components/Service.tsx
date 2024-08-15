import { IoDocumentTextOutline } from "react-icons/io5";
import { PiDesktopTower } from "react-icons/pi";
import { FaMobileRetro } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: 'UI/UX',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
      icon: <IoDocumentTextOutline className="h-12 w-12 text-orange-500" />,
    },
    {
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
      icon: <PiDesktopTower className="h-12 w-12 text-orange-500" />,
    },
    {
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
      icon: <FaMobileRetro className="h-12 w-12 text-orange-500" />,
    },
    {
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
      icon: <FaPaintBrush className="h-12 w-12 text-orange-500" />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-white dark:bg-[#1E1E1E] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">Services</h2>
        <p className="text-center text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
          netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F8F8F8] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4 bg-orange-100 p-4 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;