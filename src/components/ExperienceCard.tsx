import React from 'react'
import Image from 'next/image'

import { Experience } from '../types'
import Link from 'next/link'

type Props = {
  experience: Experience
  key: number
}

export default function ExperienceCard({ experience }: Props) {
  const { title, description, image, link, time, company} = experience
  return (
    <article className="w-[300px] md:w-[350px] rounded-md overflow-hidden shadow-2xl z-10">
      <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full flex justify-center items-center h-[170px]'>
        <Image src={`/images/${image}`} alt={ company } width={150} height={150} className='object-cover' />
      </div>
      <div className='bg-[#202127] p-5 flex flex-col gap-[1rem]'>
        <div>
          <h4 className='font-medium font-jetBrains text-lg tracking-tighter mb-3'>{ title }</h4>
          <span className='font-light text-sm text-[#858080]'><i className="fa-solid fa-calendar-days mr-2"></i>{ time }</span>
          <p className='text-[#d9d9d9]/75 mt-3 leading-relaxed'>{ description }</p>
        </div>
        <div className='flex justify-end'>
          <Link className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#323640] p-[1rem] transition-all ease-linear duration-300 hover:bg-[#3C404D]' href={ link } target={'_blank'} rel='noreferrer' aria-label={ company }><i className="fa-solid fa-eye"></i></Link>
        </div>
      </div>
    </article>
  )
}