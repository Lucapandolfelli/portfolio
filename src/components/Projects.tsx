import React from 'react'
import ProjectCard from './ProjectCard'

import { motion } from 'framer-motion'

type Props = {}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

export default function Projects({}: Props) {
  return (
    <section id="projects" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem] md:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl md:text-2xl'>projects.</h3>
      </div>
      <motion.ul 
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex justify-center gap-[1.5rem] flex-wrap max-w-[700px]'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.ul>
    </section>
  )
}