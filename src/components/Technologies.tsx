import React from 'react'

import { motion } from 'framer-motion'

import TechnologyCard from './TechnologyCard'
import { technologies } from '../mocks'

type Props = {}


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

export default function Technologies({}: Props) {
  return (
    <section id="technologies" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center justify-center gap-[3rem] md:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl md:text-2xl'>tecnologías.</h3>
      </div>
      <motion.ul 
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex flex-row justify-center flex-wrap gap-[1.25rem] xl:gap-[2rem]'>
        {technologies.map((technology) => (
          <TechnologyCard technology={technology} key={technology.id} />
        ))}
      </motion.ul>
    </section>
  )
}