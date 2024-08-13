import Image from 'next/image'

const MyProject = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store built with Next.js and Stripe integration.',
      image: '/images/project1.jpg',
    },
    {
      title: 'Task Management App',
      description: 'A React-based application for organizing and tracking personal tasks.',
      image: '/images/project2.jpg',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting app using OpenWeatherMap API and React.',
      image: '/images/project3.jpg',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProject