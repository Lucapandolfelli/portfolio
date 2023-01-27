import React, { useEffect, useState } from 'react'

type Props = {}

export default function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = useState('navbar')

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('navbar active') : setShowNavbar('navbar')
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])

  return (
    <header className={showNavbar}>
      <nav className='flex justify-center items-center'>
        [<ul className='list-none flex gap-3 text-xl font-thin lowercase px-2'>
          <li><a href="#home" className='transition-all duration-300 hover:text-amber-600'>Inicio</a><span className='pl-1'>,</span></li>
          <li><a href="#about" className='transition-all duration-300 hover:text-amber-600'>Sobre Mí</a><span className='pl-1'>,</span></li>
          <li><a href="#projects" className='transition-all duration-300 hover:text-amber-600'>Proyectos</a><span className='pl-1'>,</span></li>
          <li><a href="#experience" className='transition-all duration-300 hover:text-amber-600'>Experiencia</a><span className='pl-1'>,</span></li>
          <li><a href="#technologies" className='transition-all duration-300 hover:text-amber-600'>Tecnologías</a><span className='pl-1'>,</span></li>
          <li><a href="#contact" className='transition-all duration-300 hover:text-amber-600'>Contacto</a></li>
        </ul>]
      </nav>
    </header>
  )
}