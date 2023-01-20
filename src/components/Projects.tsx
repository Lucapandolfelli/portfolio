import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {}

export default function Projects({}: Props) {
  return (
    <section id="projects" className='h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem]'>
      <div className="text-center">
        <h3 className='about_title text-xl'>projects.</h3>
      </div>
      <div className='flex justify-center gap-[1.5rem] flex-wrap max-w-[700px]'>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>
  )
}