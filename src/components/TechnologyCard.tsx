import React from 'react'
import Image from 'next/image'
import { Skill } from '../types'

type Props = {
  technology: Skill,
  key: number
}

export default function TechnologyCard({ technology }: Props) {
  const { name, image} = technology
  return (
    <article className='flex flex-col items-center w-[90px] md:w-[120px] gap-2'>
      <div className="border rounded-full h-[90px] w-[90px] md:h-[120px] md:w-[120px] border-slate-400 overflow-hidden">
        <Image src={`/images/${image}`} alt={name} width={120} height={120} />
      </div>
      <div className='text-[#d9d9d9]/75'>
        <p>{name}</p>
      </div>
    </article>
  )
}