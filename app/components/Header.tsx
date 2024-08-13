'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import Logo from '@/public/images/Subtract.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-8 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="Mumair Logo" width={56} height={56} className="mr-2" />
          <h1 className="text-2xl font-bold text-black dark:text-white">Mumair</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-black dark:text-white hover:text-orange-500">Home</Link>
          <Link href="/about" className="text-black dark:text-white hover:text-orange-500">About Me</Link>
          <Link href="/services" className="text-black dark:text-white hover:text-orange-500">Services</Link>
          <Link href="/projects" className="text-black dark:text-white hover:text-orange-500">Projects</Link>
          <Link href="/testimonials" className="text-black dark:text-white hover:text-orange-500">Testimonials</Link>
          <Link href="/contact" className="text-black dark:text-white hover:text-orange-500">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === 'dark' ? <FaSun className="h-6 w-6 text-white" /> : <FaMoon className="h-6 w-6 text-black" />}
          </button>
          <a href="/cv.pdf" download className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            Download CV
          </a>
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isMenuOpen ? <FaTimes className="h-6 w-6 text-black dark:text-white" /> : <FaBars className="h-6 w-6 text-black dark:text-white" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2">
          <Link href="/" className="block py-2 text-black dark:text-white hover:text-orange-500">Home</Link>
          <Link href="/about" className="block py-2 text-black dark:text-white hover:text-orange-500">About Me</Link>
          <Link href="/services" className="block py-2 text-black dark:text-white hover:text-orange-500">Services</Link>
          <Link href="/projects" className="block py-2 text-black dark:text-white hover:text-orange-500">Projects</Link>
          <Link href="/testimonials" className="block py-2 text-black dark:text-white hover:text-orange-500">Testimonials</Link>
          <Link href="/contact" className="block py-2 text-black dark:text-white hover:text-orange-500">Contact</Link>
          <a href="/cv.pdf" download className="block py-2 text-orange-500 hover:text-orange-600">Download CV</a>
        </div>
      )}
    </header>
  )
}

export default Header