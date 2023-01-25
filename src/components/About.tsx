import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import aboutImage from '../../public/images/about_image.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <section id="about" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center md:flex-row md:justify-center gap-[3rem] relative'>
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x:0, opacity: 1}} 
        transition={{ duration: .5}} 
        className='rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden'>
        <Image src={aboutImage} alt='Luca Pandolfelli' width={350} height={350} />
      </motion.div>
      <div className='w-[300px] md:w-[500px]'>
        <h3 className='about_title mb-5 text-xl'>about me.</h3>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
      </div>
    </section>
  )
}