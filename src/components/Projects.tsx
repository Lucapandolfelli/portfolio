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

const projects = [
  { id: 1, title: 'Proyecto del curso de Desarrollo Backend de Coderhouse', image: 'project4.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-desarrollo-backend-coderhouse', webLink: '#' },
  { id: 2, title: 'Proyecto del curso de React de Coderhouse', image: 'project3.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-react-coderhouse', webLink: '#' },
  { id: 3, title: 'Proyecto del curso de Javascript de Coderhouse', image: 'project2.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-javascript-coderhouse', webLink: 'https://lucapandolfelli.github.io/proyecto-final-javascript-coderhouse/' },
  { id: 4, title: 'Proyecto del curso de Desarrollo Web de Coderhouse', image: 'project1.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-desarrollo-web-coderhouse', webLink: 'https://lucapandolfelli.github.io/proyecto-final-desarrollo-web-coderhouse/' },
]

export default function Projects({}: Props) {
  return (
    <section id="projects" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem] md:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl md:text-2xl'>proyectos.</h3>
      </div>
      <motion.ul 
        variants={container}
        initial='hidden'
        whileInView='show'
        className='flex justify-center gap-[1.5rem] flex-wrap max-w-[700px]'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </motion.ul>
    </section>
  )
}