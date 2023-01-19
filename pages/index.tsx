import Head from 'next/head'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Technologies from '../src/components/Technologies'
import Footer from '../src/components/Footer'
import AnimatedBackground from '../src/components/AnimatedBackground'

export default function Portfolio() {
  return (
    <div className='text-[#d9d9d9] relative'>
      <Head>
        <title>Luca Pandolfelli</title>
        <meta name="description" content="Luca Pandolfellis's developer portfolio." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      </Head>
      <AnimatedBackground />
      <Home/>
      <About />
      <Technologies />
      <Footer />
      {/* <script src="https://app.embed.im/snow.js" defer></script> */}
    </div>
  )
}
