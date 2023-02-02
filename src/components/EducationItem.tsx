import React from "react";
import Image from "next/image";

import { Education } from "../types";

type Props = {
  education: Education,
  key: number,
}

export default function EducationItem({ education }: Props){
  return (
    <article className='bg-[#202127] p-[2rem] rounded-md flex gap-[1.5rem] shadow-xl'>
      <div className="w-[80px] h-[80px]">
        <Image src={`/images/${ education.image }`} alt={ education.institute } width={80} height={80} className='rounded-full' />
      </div>
      <div className='w-full'>
        <h5 className='text-xl tracking mb-2'>{ education.title }</h5>
        <p className='text-[#abaeb9] font-semibold mb-1'>{ education.institute }</p>
        <span className='text-sm font-thin text-[#6c6f7c]'>{ education.time }</span>
      </div>
    </article>
  )
}