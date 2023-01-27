import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import { Project } from '../types'

type Props = {
  project: Project,
  key: number
}

const itemAnimate = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  show: {
    opacity: 1,
    scale: 1
  }
}

export default function ProjectCard({ project }: Props) {
  const { title, image, githubLink, webLink } = project
  return (
    <motion.article 
      variants={itemAnimate}
      className="w-[315px] rounded overflow-hidden shadow-2xl z-10">
      <div>
        <Image src={`/images/projects/${image}`} alt='project' width={315} height={180} className='object-cover h-[180px]' />
      </div>
      <div className='bg-[#202127] p-4'>
        <h5 className='font-jetBrains text-sm mb-3'>{ title }</h5>
        <div className="flex gap-[.5rem]">
          <Link className='flex justify-center items-center w-[25px] h-[25px] rounded-full bg-[#323640] p-[1rem] transition-all ease-linear duration-300 hover:bg-[#3C404D]' href={githubLink} target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github-alt"></i></Link>
          <Link className='flex justify-center items-center w-[25px] h-[25px] rounded-full bg-[#323640] p-[1rem] transition-all ease-linear duration-300 hover:bg-[#3C404D]' href={webLink} target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-solid fa-eye"></i></Link>
        </div>
      </div>
    </motion.article>
  )
}