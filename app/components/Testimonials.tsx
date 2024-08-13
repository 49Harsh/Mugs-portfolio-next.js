import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Company',
      content: 'Working with this developer was a great experience. They delivered high-quality work on time and were always responsive to our needs.',
    //   avatar: '/images/avatar1.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      content: 'The website they built for us exceeded our expectations. It s beautiful, fast, and has helped increase our online conversions.'
    //   avatar: '/images/avatar1.jpg',
    },
    {
      name: 'Mike Johnson',
      role: 'Startup Founder',
      content: 'I highly recommend this developer. They have a great eye for design and strong technical skills. They were crucial in launching our MVP.',
    //   avatar: '/images/avatar3.jpg',
    },
  ]

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                {/* <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" /> */}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials