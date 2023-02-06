import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import perfil from '../../public/images/perfil.jpeg'

type Props = {}

export default function About({}: Props) {
  return (
    <section id="about" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center md:justify-center relative'>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-[3rem]'>
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          whileInView={{ x:0, opacity: 1}} 
          transition={{ duration: .5}} 
          className='bg-[#1d1f25] rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] overflow-hidden'>
          <Image src={ perfil } alt='Luca Pandolfelli' width={350} height={350} />
        </motion.div>
        <div className='w-[310px] md:w-[450px] xl:w-[600px]'>
          <h3 className='font-jetBrains text-xl xl:text-2xl mb-5 lg:mb-[3rem]'>sobre mí.</h3>
          <div className='text-[#d9d9d9]/80 md:text-lg mb-3 leading-relaxed'>
            <p className='mb-3'>Holaa, soy <span className='text-amber-600 font-semibold'>Luca</span>. <span className='font-semibold text-[#d9d9d9]'>Fullstack Javascript Developer</span> y <span className='font-semibold text-[#d9d9d9]'>Técnico en Informática</span>. Tras varios años de estudio, me encuentro en búsqueda de mi primer trabajo formal como desarrollador web.</p>
            <p className='mb-3'>Soy un apasionado por el aprendizaje, siempre busco algo nuevo para aprender y asi poder mejorar día a día. Destaco como fuertes puntos de mi personalidad la <span className='font-semibold text-[#d9d9d9]'>responsabilidad</span> y la <span className='font-semibold text-[#d9d9d9]'>perseverancia</span>.</p>
            <p className='mb-5'>Desde fines de 2021 dediqué la gran parte de mi tiempo en convertirme en un desarrollador web, tanto de forma <span className='font-semibold text-[#d9d9d9]'>autodidáctica</span> como realizando cursos. Actualmente curso una tecnicatura en programación en la universidad y me estoy enfocando en mejorar en frameworks de <span className='font-semibold text-[#d9d9d9]'>Javascript</span>.</p>
            <p className='text-[#d9d9d9]'>No dudes en <Link href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='mail' className='font-semibold text-amber-600'>contactarme</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

