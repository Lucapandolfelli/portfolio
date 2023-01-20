import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

export default function Home({}: Props) {
  return (
    <section className='flex items-center justify-center flex-col relative h-screen'>
      <div className='text-center'>
        <motion.h1 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .5 }}
          className='home_title bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 leading-none mb-6'>Luca Pandolfelli</motion.h1>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='home_subtitle text-xl tracking-tighter font-thin mb-8'>Jr. Javascript FullStack Developer. Computer Technician. Informatics Lover.</motion.h3>
        {/* <div className='flex justify-center gap-[.5rem]'>
          <Link className='home_social-links' href='https://github.com/Lucapandolfelli' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github-alt"></i></Link>
          <Link className='home_social-links' href='https://www.linkedin.com/in/lucapandolfelli/' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-linkedin-in"></i></Link>
          <Link className='home_social-links' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-google"></i></Link>
        </div> */}
        <div className='flex justify-center gap-[.75rem]'>
          <Link className='home_button' href='mailto:lucapandolfelli2002@gmail.com'>Contact Me</Link>
          <Link className='home_button' href='#'>Download CV</Link>
        </div>
      </div>
      <a href="#about" className='animate-bounce p-4 border rounded-full w-[40px] h-[40px] flex items-center justify-center absolute bottom-4'><i className="fa-solid fa-arrow-down"></i></a>
    </section>
  )
}