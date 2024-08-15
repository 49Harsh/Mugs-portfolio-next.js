'use client'

import { useState } from 'react'

const ContactMe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', email)
    // Here you would typically send the email to your server or a third-party service
    setEmail('')
  }

  return (
    <section id='contactme' className="py-20 px-4 md:px-8 bg-white dark:bg-[#1E1E1E] lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl text-black dark:text-white md:text-4xl lg:text-5xl font-bold text-center mb-4">
        Lets Design Together
      </h1>
      <p className="text-center text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
        netus in. Aliquet donec morbi convallis pretium
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
          className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Contact Me
        </button>
      </form>
    </section>
  )
}

export default ContactMe