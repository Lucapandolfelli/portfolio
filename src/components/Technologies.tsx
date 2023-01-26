import React from 'react'
import TechnologyCard from './TechnologyCard'

type Props = {}

const technologies = [
  { id: 1, name: 'javascript', image: 'js.png'},
  { id: 2, name: 'css', image: 'css.png'},
  { id: 3, name: 'express.js', image: 'express.png'},
  { id: 4, name: 'bootstrap', image: 'bootstrap.png'},
  { id: 5, name: 'firebase', image: 'firebase.png'},
  { id: 6, name: 'git', image: 'git.png'},
  { id: 7, name: 'graphql', image: 'graphql.png'},
  { id: 8, name: 'handlebars', image: 'handlebars.png'},
  { id: 9, name: 'html', image: 'html.png'},
  { id: 10, name: 'laravel', image: 'laravel.png'},
  { id: 11, name: 'linux', image: 'linux.png'},
  { id: 12, name: 'mongo', image: 'mongo.png'},
  { id: 13, name: 'nest', image: 'nest.png'},
  { id: 14, name: 'next', image: 'next.png'},
  { id: 15, name: 'node', image: 'node.png'},
  { id: 16, name: 'react', image: 'react.png'},
  { id: 17, name: 'sass', image: 'sass.png'},
  { id: 18, name: 'wordpress', image: 'wordpress.png'},
]

export default function Technologies({}: Props) {
  return (
    <section id="technologies" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex flex-col items-center justify-center gap-[3rem] md:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl md:text-2xl'>technologies.</h3>
      </div>
      <div className='flex flex-row justify-center flex-wrap gap-[1.25rem] xl:gap-[2rem]'>
        {technologies.map((technology) => (
          <TechnologyCard technology={technology} key={technology.id} />
        ))}
      </div>
    </section>
  )
}