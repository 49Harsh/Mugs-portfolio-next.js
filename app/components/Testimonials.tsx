'use client'
import { useState } from 'react'
import Image from 'next/image'
import testImg from '@/public/images/Ellipse 10.png' 

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Name',
      role: 'CEO',
      content: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',

    },
    {
      name: 'Name',
      role: 'CEO',
      content: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',

    },
    {
      name: 'Name',
      role: 'CEO',
      content: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',

    },
    // Add more testimonials as needed
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(1)

  return (
    <section className="py-20 w-full bg-white dark:bg-[#1E1E1E] ">
      <div className="w-full ">
        <h2 className="text-4xl text-black dark:text-white font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-center text-gray-600  dark:text-white mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
          netus in. Aliquet donec morbi convallis pretium
        </p>

        <div className="flex items-center w-full justify-center">
          {[-1, 0, 1].map((offset) => {
            const index = (currentTestimonial + offset + testimonials.length) % testimonials.length
            const testimonial = testimonials[index]
            return (
              <div 
                key={index} 
                className={`w-full md:w-1/3 p-6 ${
                  offset === 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                } transition-all duration-300`}
              >
                <div className="bg-gray-100 rounded-lg p-8 w">
                  <div className="flex items-start">
                    <div className="w-16 h-16 mr-4 flex-shrink-0">
                      <Image
                        src={testImg}
                        alt={testimonial.name}
                        width={84}
                        height={84}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="mb-4 text-gray-700 text-sm">"{testimonial.content}"</p>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials