import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import aboutImage from '../../public/images/about_image.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <section id="about" className='h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center gap-[3rem] relative'>
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x:0, opacity: 1}} 
        transition={{ duration: .25}} 
        className='rounded-full w-[350px] h-[350px] overflow-hidden'>
        <Image src={aboutImage} alt='Luca Pandolfelli' width={350} height={350} />
      </motion.div>
      <div className='w-[500px]'>
        <h3 className='about_title mb-5 text-xl'>about me.</h3>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
      </div>
      <a href="#projects" className='animate-bounce p-4 border rounded-full w-[40px] h-[40px] flex items-center justify-center absolute bottom-4'><i className="fa-solid fa-arrow-down"></i></a>
    </section>
  )
}