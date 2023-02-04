import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Education } from "../types"

type Props = {
  education: Education,
  key: number,
}

export default function EducationItem({ education }: Props){
  return (
    <motion.article 
      initial={{ opacity: 0, x: '-100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .75 }}
      className='w-[310px] sm:w-auto bg-[#202127] p-[1.5rem] xl:p-[2rem] rounded-md flex gap-[1.5rem] shadow-xl'>
      <div className="hidden sm:block w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]">
        <Image src={`/images/${ education.image }`} alt={ education.institute } width={80} height={80} className='rounded-full' />
      </div>
      <div className='w-full'>
        <h5 className='text-lg xl:text-xl tracking mb-1'>{ education.title }</h5>
        <p className='text-sm sm:text-base text-[#abaeb9] xl:font-semibold mb-1'>{ education.institute }</p>
        <span className='text-sm font-thin text-[#858080]'>{ education.time }</span>
      </div>
    </motion.article>
  )
}