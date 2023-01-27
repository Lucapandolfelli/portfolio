import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar(true) : setShowNavbar(false)
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])

  return (
    <header className='h-[60px] w-full fixed top-0 z-20 bg-[#1d1f25] flex justify-center'>
      <nav className='flex justify-center items-center'>
        [<ul className='list-none flex gap-3 text-xl font-thin lowercase px-2'>
          <li><a href="#home" className='transition-all duration-300 hover:text-amber-600'>Home</a><span className='pl-1'>,</span></li>
          <li><a href="#about" className='transition-all duration-300 hover:text-amber-600'>About</a><span className='pl-1'>,</span></li>
          <li><a href="#projects" className='transition-all duration-300 hover:text-amber-600'>Projects</a><span className='pl-1'>,</span></li>
          <li><a href="#experience" className='transition-all duration-300 hover:text-amber-600'>Experience</a><span className='pl-1'>,</span></li>
          <li><a href="#technologies" className='transition-all duration-300 hover:text-amber-600'>Technologies</a><span className='pl-1'>,</span></li>
          <li><a href="#contact" className='transition-all duration-300 hover:text-amber-600'>Contact</a></li>
        </ul>]
      </nav>
    </header>
  )
}