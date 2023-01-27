import React from 'react'
import TechnologyCard from './TechnologyCard'

type Props = {}

const technologies = [
  { id: 1, name: 'JavaScript', image: 'js.png'},
  { id: 2, name: 'CSS', image: 'css.png'},
  { id: 3, name: 'Express.js', image: 'express.png'},
  { id: 4, name: 'Bootstrap', image: 'bootstrap.png'},
  { id: 5, name: 'Firebase', image: 'firebase.png'},
  { id: 6, name: 'Git', image: 'git.png'},
  { id: 7, name: 'GraphQL', image: 'graphql.png'},
  { id: 8, name: 'Handlebars', image: 'handlebars.png'},
  { id: 9, name: 'HTML', image: 'html.png'},
  { id: 10, name: 'Laravel', image: 'laravel.png'},
  { id: 11, name: 'Linux', image: 'linux.png'},
  { id: 12, name: 'mongoDB', image: 'mongo.png'},
  { id: 13, name: 'Nest.js', image: 'nest.png'},
  { id: 14, name: 'Next.js', image: 'next.png'},
  { id: 15, name: 'Node', image: 'node.png'},
  { id: 16, name: 'React.js', image: 'react.png'},
  { id: 17, name: 'Sass', image: 'sass.png'},
  { id: 18, name: 'WordPress', image: 'wordpress.png'},
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