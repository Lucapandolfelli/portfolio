import Head from 'next/head'

import Home from '../src/components/Home'
import About from '../src/components/About'
import Technologies from '../src/components/Technologies'
import Footer from '../src/components/Footer'
import AnimatedBackground from '../src/components/AnimatedBackground'
import Projects from '../src/components/Projects'
import Experience from '../src/components/Experience'
import Navbar from '../src/components/Navbar'
import Education from '../src/components/Education'

export default function Portfolio() {
  return (
    <div className='text-[#d9d9d9] relative'>
      <Head>
        <title>Luca Pandolfelli</title>
      </Head>
      <AnimatedBackground />
      <Home/>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Technologies />
      <Footer />
      {/* <script src="https://app.embed.im/snow.js" defer></script> */}
    </div>
  )
}
