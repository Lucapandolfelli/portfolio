import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <section id="experience" className='h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem]'>
      <div className="text-center">
        <h3 className='about_title text-xl'>work experience.</h3>
      </div>
      <div className='flex justify-center gap-[1.5rem] flex-wrap'>
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  )
}