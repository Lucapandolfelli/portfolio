import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const navbarItems = [
  { id: 1, title: 'Inicio', link: '#home' },
  { id: 2, title: 'Sobre Mí', link: '#about' },
  { id: 3, title: 'Proyectos', link: '#projects' },
  { id: 4, title: 'Experiencia', link: '#experience' },
  { id: 5, title: 'Tecnologías', link: '#technologies' },
]

export default function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = useState('navbar')
  const [toggleNavbar, setToggleNavbar] = useState(false)

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar)
  }

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('navbar show') : setShowNavbar('navbar')
    }
    window.addEventListener('scroll', changeNavbarVisibility)
  }, [])

  return (
    <header className={showNavbar}>
      <div className='flex h-full w-full items-center pl-[1rem] sm:hidden'>
        <p className='block font-jetBrains font-thin z-[999]'>Luca Pandolfelli</p>
        <button className='block text-2xl absolute top-[1rem] right-[1rem] z-[999] sm:hidden' onClick={handleToggleNavbar}>
          { !toggleNavbar ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i> }
        </button>
      </div>
      <nav className='hidden bg-[#1d1f25] w-full justify-center items-center sm:flex sm:visible'>
        <ul className='font-jetBrains list-none flex flex-row items-center gap-3 text-lg font-thin lowercase'>
          {navbarItems.map((navItem) => (
            navItem.id < 5
            ? <li key={navItem.id}><Link scroll={false} href={navItem.link} className='transition-all duration-300 hover:text-amber-600'>{navItem.title}</Link><span className='hidden pl-1 sm:inline'>,</span></li>
            : <li key={navItem.id}><Link scroll={false} href={navItem.link} className='transition-all duration-300 hover:text-amber-600'>{navItem.title}</Link></li>
          ))}
        </ul>
      </nav>
      <nav className={ !toggleNavbar ? 'bg-[#1d1f25] fixed left-0 top-0 w-full h-full font-jetBrains flex justify-center transition-all duration-300 ease-in font-thin lowercase sm:hidden' : 'fixed left-[-100%]'}>
        <ul className='flex flex-col items-center justify-center gap-[2rem]'>
          {navbarItems.map((navItem) => (
            navItem.id < 5
            ? <li key={navItem.id} onClick={handleToggleNavbar}><Link scroll={false} href={navItem.link} className='transition-all duration-300 hover:text-amber-600'>{navItem.title}</Link><span className='hidden pl-1 sm:inline'>,</span></li>
            : <li key={navItem.id} onClick={handleToggleNavbar}><Link scroll={false} href={navItem.link} className='transition-all duration-300 hover:text-amber-600'>{navItem.title}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}