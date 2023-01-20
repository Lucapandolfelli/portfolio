import React from 'react'
import Image from 'next/image'
import exampleImage from '../../public/images/screenshot.png'

type Props = {
}

export default function ProjectCard({}: Props) {
  /* const { name, image} = project */
  return (
    <article className="w-[315px] h-[180px] rounded overflow-hidden hover:cursor-pointer">
        <Image src={exampleImage} alt='project' width={315} className='object-cover h-[180px]' />
    </article>
  )
}