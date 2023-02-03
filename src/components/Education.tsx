import React from "react"

import { educations } from "../mocks"
import EducationItem from "./EducationItem"

type Props = {}

export default function Education() {
  return (
    <section id="education" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem] xl:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl xl:text-2xl'>educación.</h3>
      </div>
      <div>
        <ul className='flex flex-col gap-[1.5rem]'>
          {educations.map((education) => (
            <EducationItem education={education} key={education.id} />
          ))}
        </ul> 
      </div>
    </section>
  )
}