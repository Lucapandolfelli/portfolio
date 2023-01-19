import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='h-[150px] flex items-center justify-center text-[1.5rem] font-extralight'>
      [<ul className='list-none flex gap-3 text-xl font-extralight lowercase px-2'>
        <li><a href="#home" className='transition-all duration-300 hover:text-amber-600'>Home</a><span className='pl-1'>,</span></li>
        <li><a href="#about" className='transition-all duration-300 hover:text-amber-600'>About</a><span className='pl-1'>,</span></li>
        <li><a href="#education" className='transition-all duration-300 hover:text-amber-600'>Education</a><span className='pl-1'>,</span></li>
        <li><a href="#technologies" className='transition-all duration-300 hover:text-amber-600'>Technologies</a><span className='pl-1'>,</span></li>
        <li><a href="#proyects" className='transition-all duration-300 hover:text-amber-600'>Proyects</a><span className='pl-1'>,</span></li>
        <li><a href="#contact" className='transition-all duration-300 hover:text-amber-600'>Contact</a></li>
      </ul>]
    </nav>
  )
}