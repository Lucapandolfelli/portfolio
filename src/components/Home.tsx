import React from 'react'
import Link from 'next/link'

import useDownloader from 'react-use-downloader'
import { motion } from 'framer-motion'

type Props = {}

export default function Home({}: Props) {
  const { download } = useDownloader()
  const fileUrl = '/files/Pandolfelli Gian Luca CV.pdf'
  const fileName = 'Pandolfelli Gian Luca CV.pdf'

  return (
    <section className='sm:px-8 flex items-center justify-center flex-col relative h-screen' id='home'>
      <div className='text-center'>
        <motion.h1 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .5 }}
          className='font-bold text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 leading-none mb-6 lg:text-[9rem]'>Luca Pandolfelli</motion.h1>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='font-jetBrains text-sm tracking-tighter font-thin mb-8 md:text-xl'>FullStack Javascript Developer. Computer Technician. Informatics Lover.</motion.h3>
        <div className='flex justify-center gap-[.75rem] text-sm md:text-base'>
          <Link className='home_button w-[125px] md:w-[145px]' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='mail'>Contact Me</Link>
          <button onClick={() => download(fileUrl, fileName)} className='home_button w-[125px] md:w-[145px]'>Download CV</button>
        </div>
      </div>
      <a href="#about" className='animate-bounce p-4 border rounded-full w-[40px] h-[40px] flex items-center justify-center absolute bottom-4'><i className="fa-solid fa-arrow-down"></i></a>
    </section>
  )
}