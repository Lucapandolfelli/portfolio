import React from 'react'
import Image from 'next/image'
import { Skill } from '../types'
import exampleImage from '../../public/images/image.png'

type Props = {
  technology: Skill,
  key: number
}

export default function TechnologyCard({ technology }: Props) {
  const { name, image} = technology
  return (
    <article className='flex flex-col items-center w-[120px] gap-3'>
      <div className="border rounded-full h-[120px] w-[120px] border-slate-400 overflow-hidden">
        <Image src={exampleImage} alt={name} width={120} height={120} />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </article>
  )
}