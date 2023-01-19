import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Home({}: Props) {
  const [ text, count] = useTypewriter({  words: ['Jr. Javascript FullStack Developer', 'Computer Technician', 'Informatics Lover'], loop: true, delaySpeed: 3000 })
  return (
    <section className='flex items-center justify-center flex-col relative h-screen'>
      <div className='text-center'>
        {/* <p className='text-xl'>Hi, I´m</p> */}
        <h1 className='home_title bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>Luca Pandolfelli</h1>
        <h3 className='text-2xl font-thin mb-8'>
          <span>{text}</span>
            <Cursor/>
        </h3>
        <div className='flex justify-center gap-[.5rem]'>
          <Link className='home_social-links' href='https://github.com/Lucapandolfelli' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github-alt"></i></Link>
          <Link className='home_social-links' href='https://www.linkedin.com/in/lucapandolfelli/' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-linkedin-in"></i></Link>
          <Link className='home_social-links' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-google"></i></Link>
        </div>
      </div>
      <a href="#about" className='animate-bounce p-4 border rounded-full w-[40px] h-[40px] flex items-center justify-center absolute left-[50%] right-[50%] bottom-10'><i className="fa-solid fa-arrow-down"></i></a>
    </section>
  )
}