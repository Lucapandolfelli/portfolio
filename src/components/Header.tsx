import React from 'react'
import Hero from './Home'
import Navbar from './Navbar'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='max-w-5xl mx-auto h-screen'>
      {/* <Navbar /> */}
      <Hero />
    </header>
  )
}