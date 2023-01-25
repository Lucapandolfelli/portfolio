import React, { useEffect, useState } from 'react'

type Props = {}

export default function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar(true) : setShowNavbar(false)
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])

  if(showNavbar){
    return (
      <nav className='navbar h-[60px] w-[100%] flex items-center justify-center text-[1.5rem] font-extralight fixed top-0 z-10 bg-[#1d1f25]'>
      [<ul className='list-none flex gap-3 text-xl font-extralight lowercase px-2'>
        <li><a href="#home" className='transition-all duration-300 hover:text-amber-600'>Home</a><span className='pl-1'>,</span></li>
        <li><a href="#about" className='transition-all duration-300 hover:text-amber-600'>About</a><span className='pl-1'>,</span></li>
        <li><a href="#education" className='transition-all duration-300 hover:text-amber-600'>Education</a><span className='pl-1'>,</span></li>
        <li><a href="#technologies" className='transition-all duration-300 hover:text-amber-600'>Technologies</a><span className='pl-1'>,</span></li>
        <li><a href="#projects" className='transition-all duration-300 hover:text-amber-600'>Projects</a><span className='pl-1'>,</span></li>
        <li><a href="#contact" className='transition-all duration-300 hover:text-amber-600'>Contact</a></li>
      </ul>]
    </nav>
    )
  }
}