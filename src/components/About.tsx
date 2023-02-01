import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import aboutImage from '../../public/images/about_image.jpg'
import EducationItem from './EducationItem'

const educations = [
  { id: 1, title: 'Tecnicatura Universitaria en Programación Informática', institute: 'Universidad Nacional de Quilmes', time: 'mar. 2022 - actualidad', image: 'unq.jpg' },
  { id: 2, title: 'Carrera de Desarrollo Full Stack', institute: 'Coderhouse', time: 'feb. 2022 - dic. 2022', image: 'coderhouse.png' },
  { id: 3, title: 'Tecnicatura en Informática Personal y Profesional', institute: 'Instituto Técnico María Reina', time: 'mar. 2015 - dic. 2021', image: 'itmr.jpeg' },
]

type Props = {}

export default function About({}: Props) {
  return (
    <section id="about" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center md:justify-center relative'>
      <div className='flex flex-col sm:flex-row items-center gap-[3rem] sm:gap-[5rem]'>
        <div className='flex flex-col items-center gap-[2rem]'>
          <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x:0, opacity: 1}} 
            transition={{ duration: .5}} 
            className='rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden'>
            <Image src={aboutImage} alt='Luca Pandolfelli' width={350} height={350} />
          </motion.div>
          <div className='flex sm:flex-col gap-[1.5rem] sm:gap-[.5rem]'>
            <Link className='text-md transition-all duration-300 ease-linear hover:text-[#6f7381]' href='https://github.com/Lucapandolfelli' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github pr-[.5rem]"></i>Github</Link>
            <Link className='text-md transition-all duration-300 ease-linear hover:text-[#6f7381]' href='https://www.linkedin.com/in/lucapandolfelli/' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-linkedin-in pr-[.5rem]"></i>LinkedIn</Link>
            <Link className='text-md transition-all duration-300 ease-linear hover:text-[#6f7381]' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-google pr-[.5rem]"></i>Mail</Link>
          </div>
        </div>
        <div className='w-auto px-[2rem] md:w-[600px]'>
          <h3 className='font-jetBrains text-xl md:text-2xl mb-5'>sobre mí.</h3>
          <p className='mb-3 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
          <p className='mb-[3rem] leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae praesentium sed, dolorum impedit, veniam, nostrum aut ipsum debitis sint vero ea dicta voluptatum. Ab nesciunt quasi corrupti quisquam quaerat!</p>
          <div>
            <ul className='flex flex-col gap-[1rem]'>
              {educations.map((education) => (
                <EducationItem education={education} key={education.id} />
              ))}
            </ul> 
          </div>
        </div>
      </div>
    </section>
  )
}

