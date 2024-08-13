'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? (
        <CiSun className="h-6 w-6" />
      ) : (
        <FaRegMoon className="h-6 w-6" />
      )}
    </button>
  )
}