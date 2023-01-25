import React from 'react'
import TechnologyCard from './TechnologyCard'

type Props = {}

const technologies = [
  { id: 1, name: 'javascript', image: 'image.png'},
  { id: 2, name: 'css', image: 'image.png'},
  { id: 3, name: 'express.js', image: 'image.png'},
  { id: 4, name: 'bootstrap', image: 'image.png'},
  { id: 5, name: 'bootstrap', image: 'image.png'},
  { id: 6, name: 'javascript', image: 'image.png'},
  { id: 7, name: 'css', image: 'image.png'},
  { id: 8, name: 'express.js', image: 'image.png'},
  { id: 9, name: 'bootstrap', image: 'image.png'},
  { id: 10, name: 'bootstrap', image: 'image.png'},
  { id: 11, name: 'javascript', image: 'image.png'},
  { id: 12, name: 'css', image: 'image.png'},
]

export default function Technologies({}: Props) {
  return (
    <section id="technologies" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center justify-center'>
      <div className="text-center mb-[3rem]">
        <h3 className='text-2xl'>technologies.</h3>
      </div>
      <div className='flex flex-row justify-center flex-wrap gap-[1.25rem] xl:gap-[3rem]'>
        {technologies.map((technology) => (
          <TechnologyCard technology={technology} key={technology.id} />
        ))}
      </div>
    </section>
  )
}