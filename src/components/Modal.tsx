import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import { Project } from "../types"

type Props = {
  showModal: React.Dispatch<React.SetStateAction<boolean>>,
  project: Project
}

export default function Modal({ showModal, project }: Props) {
  return (
    <Backdrop showModal={showModal} >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .25 }}
        className="bg-[#282B33] rounded-md w-[310px] lg:w-[500px] xl:w-[700px] h-fit relative shadow-xl z-50">
        <button className="hidden absolute top-0 left-0 right-0 bottom-[-120%] m-auto sm:block sm:bottom-[unset] sm:m-0 sm:left-[unset] sm:top-[-2rem] sm:right-[-2rem] transition-all duration-300 ease-in-out hover:scale-[1.05]" onClick={() => showModal(false)}><i className="fa-solid fa-xmark text-2xl"></i></button>
        <div className="hidden xl:block w-full">
          <Image src={`/images/projects/${ project.image }`} alt={ project.title } width={700} height={200} className='rounded-t-md' />
        </div>
        <div className="p-[1.5rem]">
          <h3 className="text-xl sm:text-2xl mb-1">{ project.title }</h3>
          <hr className="mb-5 border-[#858080]"/>
          <ul className="flex flex-wrap gap-[.5rem] mb-4">
            {project.technologies.map((tech) => (
              <li className="font-jetBrains bg-[#464A57] text-[.75rem] font-medium rounded-xl px-[.65rem] py-[.15rem]" key={tech}>{tech}</li>
            ))}
          </ul>
          <p className="text-sm sm:text-base text-[#d9d9d9]/75 mb-6">{ project.description }</p>
          <div className="flex gap-[1rem]">
            <Link href={ project.githubLink } target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github"></i><span className="ml-[.5rem] text-sm transition-all duration-300 ease-linear hover:text-amber-600">Ver Repositorio</span></Link>
            { project.webLink && <Link href={ project.webLink } target={'_blank'} rel='noreferrer' aria-label={ project.title }><i className="fa-solid fa-eye"></i><span className="ml-[.5rem] text-sm transition-all duration-300 ease-linear hover:text-amber-600">Ver Demo</span></Link>}
          </div>
        </div>
      </motion.div>
    </Backdrop>
  )
}