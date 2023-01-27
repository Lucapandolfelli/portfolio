import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import exampleImage from '../../public/images/screenshot.png'

type Props = {
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

export default function ProjectCard({}: Props) {
  /* const { name, image} = project */
  return (
    <motion.article 
      variants={itemAnimate}
      className="w-[315px] rounded overflow-hidden hover:cursor-pointer shadow-2xl z-10">
      <div>
        <Image src={exampleImage} alt='project' width={315} className='object-cover h-[180px]' />
      </div>
      <div className='bg-[#202127] py-3 px-4'>
        <h5 className='font-jetBrains font-thin text-sm'>Proyecto del Curso de Desarrollo Web de Coderhouse</h5>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum quis iste? Neque unde accusantium laborum voluptatem nostrum optio quis quasi, enim, eum nemo architecto eligendi incidunt. Ex alias porro optio facilis iste. Esse laudantium ipsum repellat eius expedita adipisci!</p>
        <div className='flex gap-[.5rem]'>
          <Link className='social-links_button' href='https://github.com/Lucapandolfelli/proyecto-final-desarrollo-web-coderhouse' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github-alt"></i></Link>
          <Link className='social-links_button' href='https://github.com/Lucapandolfelli/proyecto-final-desarrollo-web-coderhouse' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-solid fa-eye"></i></Link>
        </div> */}
      </div>
    </motion.article>
  )
}