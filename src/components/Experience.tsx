import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { experiences } from '../mocks'

type Props = {}

const container = {
  hidden: { 
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export default function Experience({}: Props) {
  return (
    <section id="experience" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem] xl:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl xl:text-2xl'>experiencia laboral.</h3>
      </div>
      <motion.div 
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex justify-center flex-wrap gap-[2rem]'>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </motion.div>
    </section>
  )
}