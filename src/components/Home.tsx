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
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5, delay: .1 }}
          className='font-bold text-[4.25rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 leading-none tracking-tighter px-[12px] mb-6 lg:text-[9rem] xl:text-[10rem]'>Luca Pandolfelli.</motion.h1>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='font-jetBrains tracking-tighter text-sm font-thin mb-8 md:text-xl'>FullStack Javascript Developer. Técnico en Informática. Apasionado por la tecnología.</motion.h3>
        <div className='flex justify-center gap-[.75rem] text-sm md:text-base'>
          <Link className='bg-[#464A57] rounded-[.5rem] font-semibold py-[.65rem] px-[1rem] w-[130px] md:w-[145px] transition-all duration-300 ease-in hover:bg-[#323640]' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='mail'>Contáctame</Link>
          <button onClick={() => download(fileUrl, fileName)} className='bg-[#464A57] rounded-[.5rem] font-semibold py-[.65rem] px-[1rem] w-[130px] md:w-[145px] transition-all duration-300 ease-in hover:bg-[#323640]'>Descargar CV</button>
        </div>
      </div>
      <Link scroll={false} href="#about" className='animate-bounce border rounded-full w-[40px] h-[40px] flex items-center justify-center absolute bottom-4'>
        <i className="fa-solid fa-arrow-down"></i>
      </Link>
    </section>
  )
}