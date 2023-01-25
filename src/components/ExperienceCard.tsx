import React from 'react'
import Image from 'next/image'

import { Experience } from '../types'

import exampleImage from '../../public/images/caccm.png'

type Props = {
  experience: Experience
  key: number
}

export default function ExperienceCard({ experience }: Props) {
  const { title, description, image, link, time, company} = experience
  return (
    <article className="w-[350px] rounded-md overflow-hidden shadow-2xl z-10">
      <div className='bg-[#222222] w-full flex justify-center items-center h-[170px]'>
        <Image src={exampleImage} alt={ company } width={150} height={150} className='object-cover' />
      </div>
      <div className='bg-[#202127] p-5 flex flex-col gap-[1rem]'>
        <div>
          <h4 className='font-medium font-jetBrains text-lg tracking-tighter mb-3'>{ title }</h4>
          <p className='text-[#d9d9d9]/75'>{ description }</p>
        </div>
        <div className='flex justify-end'>
          <a className='social-links_button' href={ link } target={'_blank'} rel='noreferrer' aria-label={ company }><i className="fa-solid fa-eye"></i></a>
        </div>
      </div>
    </article>
  )
}