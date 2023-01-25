import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='py-[2rem] text-center relative flex flex-col items-center gap-[1rem] border-t-[1px]'>
      <div className='flex justify-center gap-[.5rem]'>
        <Link className='social-links_button' href='https://github.com/Lucapandolfelli' target={'_blank'} rel='noreferrer' aria-label='github'><i className="fa-brands fa-github-alt"></i></Link>
        <Link className='social-links_button' href='https://www.linkedin.com/in/lucapandolfelli/' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-linkedin-in"></i></Link>
        <Link className='social-links_button' href='mailto:lucapandolfelli2002@gmail.com' target={'_blank'} rel='noreferrer' aria-label='linkedin'><i className="fa-brands fa-google"></i></Link>
      </div>
      <div>
        <h5>Design and developer by Luca Pandolfelli.</h5>
      </div>
    </footer>
  )
}