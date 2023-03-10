import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navbarItems } from '../mocks'

type Props = {}

export default function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = useState('navbar')
  const [toggleNavbar, setToggleNavbar] = useState(true)

  const router = useRouter()
  const currentRoute = router.asPath

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
        <Link scroll={false} href='#home'><p className='block font-jetBrains font-thin z-[999]'>Luca Pandolfelli</p></Link>
        <button className='block text-2xl absolute top-[1rem] right-[1rem] z-[999] sm:hidden' onClick={handleToggleNavbar}>
          { !toggleNavbar ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i> }
        </button>
      </div>
      <nav className='hidden bg-[#1d1f25] w-full justify-center items-center sm:flex sm:visible'>
        <ul className='font-jetBrains list-none flex flex-row items-center gap-3 text-md font-thin lowercase'>
          {navbarItems.map((navItem) => (
            navItem.id < 6
            ? <li key={navItem.id}><Link scroll={false} href={navItem.link} className={ currentRoute === `/${navItem.link}` ? 'text-amber-600' : 'transition-all duration-300 hover:text-amber-600'}>{navItem.title}<span className='hidden sm:inline'>,</span></Link></li>
            : <li key={navItem.id}><Link scroll={false} href={navItem.link} className={ currentRoute === `/${navItem.link}` ? 'text-amber-600' : 'transition-all duration-300 hover:text-amber-600'}>{navItem.title}</Link></li>
          ))}
        </ul>
      </nav>
      <nav className={ !toggleNavbar ? 'bg-[#1d1f25] fixed left-0 top-0 w-full h-full font-jetBrains flex justify-center transition-all duration-300 ease-in font-thin lowercase sm:hidden' : 'fixed left-[-100%]'}>
        <ul className='flex flex-col items-center justify-center gap-[2rem]'>
          {navbarItems.map((navItem) => (
            navItem.id < 5
            ? <li key={navItem.id} onClick={handleToggleNavbar}><Link scroll={false} href={navItem.link} className={ currentRoute === `/${navItem.link}` ? 'text-amber-600' : 'transition-all duration-300 hover:text-amber-600'}>{navItem.title}</Link><span className='hidden pl-1 sm:inline'>,</span></li>
            : <li key={navItem.id} onClick={handleToggleNavbar}><Link scroll={false} href={navItem.link} className={ currentRoute === `/${navItem.link}` ? 'text-amber-600' : 'transition-all duration-300 hover:text-amber-600'}>{navItem.title}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}