import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import image from '../../public/images/about_image.jpeg'

type Props = {}

export default function About({}: Props) {
  return (
    <section id="about" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center md:justify-center relative'>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-[3rem]'>
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          whileInView={{ x:0, opacity: 1}} 
          transition={{ duration: .5}} 
          className='rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden'>
          <Image src={ image } alt='Luca Pandolfelli' width={350} height={350} />
        </motion.div>
        <div className='w-310px md:w-[600px]'>
          <h3 className='font-jetBrains text-xl md:text-2xl mb-5'>sobre mí.</h3>
          <p className='mb-3 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
          <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
        </div>
      </div>
    </section>
  )
}

