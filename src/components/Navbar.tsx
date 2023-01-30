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

  useEffect(() => {
    const changeNavbarVisibility = () => {
      window.scrollY >= 100 ? setShowNavbar('navbar show') : setShowNavbar('navbar')
    }
    window.addEventListener('scroll', changeNavbarVisibility)

    if (screen.width > 640) {
      setToggleNavbar(true)
    } else {
      setToggleNavbar(false)
    }
  }, [])

  return (
    <header className={showNavbar}>
      <div className='flex h-full w-full sm:hidden items-center pl-[2rem]'>
        <p className='font-jetBrains font-thin'>Luca Pandolfelli</p>
        { toggleNavbar 
          ? <button onClick={() => setToggleNavbar(false)} className='text-2xl absolute top-[1rem] right-[2rem] sm:hidden'><i className="fa-solid fa-x"></i></button>
          : <button onClick={() => setToggleNavbar(true)} className='text-2xl absolute top-[1rem] right-[2rem] sm:hidden'><i className="fa-solid fa-bars"></i></button>
        }
      </div>
      {
        toggleNavbar && 
        <nav className='bg-[#1d1f25] h-screen w-full transition-all duration-500 ease-in sm:h-auto sm:visible flex justify-center items-center'>
          <ul className='font-jetBrains list-none flex flex-col items-center gap-[2rem] sm:flex-row sm:gap-3 text-lg font-thin lowercase'>
            {navbarItems.map((navItem) => (
              navItem.id < 5
              ? <li onClick={() => setToggleNavbar(false)} key={navItem.id}><a href={navItem.link} className='transition-all duration-300 hover:text-amber-600'>{navItem.title}</a><span className='hidden sm:inline pl-1'>,</span></li>
              : <li onClick={() => setToggleNavbar(false)} key={navItem.id}><a href={navItem.link} className='transition-all duration-300 hover:text-amber-600'>{navItem.title}</a></li>
            ))}
          </ul>
        </nav>
      }
    </header>
  )
}