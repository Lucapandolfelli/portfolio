import React, { useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { Project } from '../types'
import Modal from './Modal'

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
  const { id, title, image, githubLink, webLink } = project
  const [showModal, setShowModal] = useState(false)

  return (
    <>  
      <motion.article 
      variants={itemAnimate}
      onClick={() => setShowModal(true)}
      className="aspect-video w-[300px] lg:w-[370px] xl:w-[400px] rounded overflow-hidden relative shadow-2xl hover:cursor-pointer group">
        <div>
          <Image src={`/images/projects/${image}`} alt='project' fill className='transition-all duration-300 ease-linear group-hover:brightness-[.25]'/>
        </div>
        <div className='absolute w-full h-full px-[2rem] flex justify-center items-center text-center opacity-0 transition-all duration-500 ease-linear group-hover:opacity-100'>
          <h5 className='font-jetBrains mb-3'>{ title }</h5>
        </div>
      </motion.article>
      { showModal && <Modal showModal={setShowModal} project={project} />}
    </>
  )
}