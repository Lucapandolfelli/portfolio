import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../mocks'
import { motion } from 'framer-motion'

type Props = {}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35
    }
  }
}

export default function Projects({}: Props) {
  return (
    <section id="projects" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem] xl:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl xl:text-2xl'>proyectos.</h3>
      </div>
      <motion.ul 
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex justify-center gap-[1.5rem] flex-wrap'>
        {projects.sort((a, b) => b.id - a.id).map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </motion.ul>
    </section>
  )
}