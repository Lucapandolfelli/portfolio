import React, { useEffect, useState } from 'react'

type Props = {}

export default function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = useState('navbar')
  const [toggleNavbar, setToggleNavbar] = useState(false)

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('navbar show') : setShowNavbar('navbar')
    }
    window.addEventListener('scroll', changeNavbarVisibility)

    if (screen.width > 640) {
      setToggleNavbar(true)
    }
  }, [])

  return (
    <header className={showNavbar}>
      { toggleNavbar 
        ? <button onClick={() => setToggleNavbar(false)} className='text-2xl absolute top-[1rem] right-[2rem] sm:hidden'><i className="fa-solid fa-x"></i></button>
        : <button onClick={() => setToggleNavbar(true)} className='text-2xl absolute top-[1rem] right-[2rem] sm:hidden'><i className="fa-solid fa-bars"></i></button>
      }
      {
        toggleNavbar && 
        <nav className='bg-[#1d1f25] h-screen w-full transition-all duration-500 ease-in sm:h-auto sm:visible flex justify-center items-center'>
          <ul className='font-jetBrains list-none flex flex-col items-center gap-[2rem] sm:flex-row sm:gap-3 text-lg font-thin lowercase'>
            <li><a href="#home" className='transition-all duration-300 hover:text-amber-600'>Inicio</a><span className='hidden sm:inline pl-1'>,</span></li>
            <li><a href="#about" className='transition-all duration-300 hover:text-amber-600'>Sobre Mí</a><span className='hidden sm:inline pl-1'>,</span></li>
            <li><a href="#projects" className='transition-all duration-300 hover:text-amber-600'>Proyectos</a><span className='hidden sm:inline pl-1'>,</span></li>
            <li><a href="#experience" className='transition-all duration-300 hover:text-amber-600'>Experiencia</a><span className='hidden sm:inline pl-1'>,</span></li>
            <li><a href="#technologies" className='transition-all duration-300 hover:text-amber-600'>Tecnologías</a><span className='hidden sm:inline pl-1'>,</span></li>
            <li><a href="#contact" className='transition-all duration-300 hover:text-amber-600'>Contacto</a></li>
          </ul>
        </nav>
      }
    </header>
  )
}