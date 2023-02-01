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
  const { id, title, image, githubLink, webLink, description } = project
  return (
    <Backdrop showModal={showModal} >
      <div className="bg-[#282B33] rounded-md w-[700px] h-fit p-[1rem] relative shadow-xl">
        <button className="absolute top-[-2rem] right-[-2rem]" onClick={() => showModal(false)}><i className="fa-solid fa-xmark text-2xl"></i></button>
        <div className="w-full">
          <Image src={`/images/projects/${image}`} alt={title} width={700} height={200} />
        </div>
        <div className="p-[1rem]">
          <h3 className="text-2xl mb-2">{ title }</h3>
          <hr className="mb-4 border-[#858080]"/>
          <p className="text-[#d9d9d9]/75 mb-4">{ description }</p>
          <div className="flex gap-[1rem]">
            <Link href={githubLink}><i className="fa-brands fa-github"></i><span className="ml-[.5rem] text-sm">Ver Repositorio</span></Link>
            { webLink && <Link href={webLink}><i className="fa-solid fa-eye"></i><span className="ml-[.5rem] text-sm">Ver Demo</span></Link>}
          </div>
        </div>
      </div>
    </Backdrop>
  )
}