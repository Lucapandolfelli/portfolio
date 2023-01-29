import React from "react";
import Image from "next/image";

import { Education } from "../types";

type Props = {
  education: Education,
  key: number,
}

export default function EducationItem({ education }: Props){
  const { title, institute, time, image } = education;
  return (
    <article className='flex gap-[1rem]'>
      <div className='rounded-full w-[40px] h-[40px] overflow-hidden mt-2'>
        <Image src={`/images/${image}`} alt={ institute } width={40} height={40} className='object-cover' />
      </div>
      <div>
        <h5 className='text-lg'>{ title }</h5>
        <p className='text-[#d9d9d9]/75'>{ institute }</p>
        <span className='font-thin text-sm text-[#d9d9d9]/50'>{ time }</span>
      </div>
    </article>
  )
}