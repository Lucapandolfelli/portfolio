import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='py-[2rem] text-center relative flex flex-col items-center gap-[1rem] border-t-[1px]'>
      <div className='flex justify-center gap-[.5rem]'>
        <Link className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#323640] p-[1rem] transition-all ease-linear duration-300 hover:bg-[#3C404D]' href='https://github.com/Lucapandolfelli' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github"></i></Link>
        <Link className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#323640] p-[1rem] transition-all ease-linear duration-300 hover:bg-[#3C404D]' href='https://www.linkedin.com/in/lucapandolfelli/' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-linkedin-in"></i></Link>
        <Link className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#323640] p-[1rem] transition-all ease-linear duration-300 hover:bg-[#3C404D]' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-google"></i></Link>
      </div>
      <div>
        <h5 className='font-jetBrains font-thin text-sm'>Diseñada y desarrolada por Luca Pandolfelli.</h5>
      </div>
    </footer>
  )
}