import React from "react"
import Image from "next/image"

import Backdrop from "./Backdrop"

import { Project } from "../types"
import Link from "next/link"

type Props = {
  showModal: React.Dispatch<React.SetStateAction<boolean>>,
  project: Project
}

export default function Modal({ showModal, project }: Props) {
  return (
    <Backdrop showModal={showModal} >
      <div className="bg-[#282B33] rounded-md w-[700px] h-fit relative shadow-xl">
        <button className="absolute top-[-2rem] right-[-2rem]" onClick={() => showModal(false)}><i className="fa-solid fa-xmark text-2xl"></i></button>
        <div className="w-full">
          <Image src={`/images/projects/${ project.image }`} alt={ project.title } width={700} height={200} className='rounded-t-md' />
        </div>
        <div className="p-[1.5rem]">
          <h3 className="text-2xl mb-2">{ project.title }</h3>
          <hr className="mb-5 border-[#858080]"/>
          <ul className="flex gap-[.5rem] mb-4">
            {project.technologies.map((tech) => (
              <li className="bg-[#464A57] text-sm font-medium rounded-xl px-[.5rem] py-[.15rem]" key={tech}>{tech}</li>
            ))}
          </ul>
          <p className="text-[#d9d9d9]/75 mb-6">{ project.description }</p>
          <div className="flex gap-[1rem]">
            <Link href={ project.githubLink } target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github"></i><span className="ml-[.5rem] text-sm">Ver Repositorio</span></Link>
            { project.webLink && <Link href={ project.webLink } target={'_blank'} rel='noreferrer' aria-label={ project.title }><i className="fa-solid fa-eye"></i><span className="ml-[.5rem] text-sm">Ver Demo</span></Link>}
          </div>
        </div>
      </div>
    </Backdrop>
  )
}