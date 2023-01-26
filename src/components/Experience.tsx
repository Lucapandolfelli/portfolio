import React from 'react'

import ExperienceCard from './ExperienceCard'

type Props = {}

const experiences = [
  { id: 1, title: 'Diseñador, Desarrollador y Administrador Web', description: 'Administración de la página web de Criadores Argentinos de Caballos Cuarto de Milla (CACCM) desarrollada sobre el CMS Webflow. Rediseño, diseño e implementación de algunas páginas y secciones de la página web. Actualización de información y eventos.', image: 'caccm.png', link: 'https://web.caccm.com.ar', company: 'Criadores Argentinos de Caballos Cuarto de Milla', time: 'jun. 2022 - actualidad'},
  { id: 2, title: 'Diseñador, Desarrollador y Administrador Web', description: 'Diseño, desarrollo, configuración y administración de la página web de Haras Maryland, uno de los más importantes haras de cría de caballos raza Cuarto de Milla en latinoamérica. Tema de Wordpress personalizado. Generación de sitio web multilenguaje. Aplicación de SEO.', image: 'harasmaryland.png', link: 'https://harasmaryland.com', company: 'Haras Maryland', time: 'mar. 2022 - sep. 2022'},
]

export default function Experience({}: Props) {
  return (
    <section id="experience" className='min-h-screen max-w-5xl mx-auto py-[5rem] flex justify-center items-center flex-col gap-[3rem] md:gap-[4rem]'>
      <div className="text-center">
        <h3 className='font-jetBrains text-xl md:text-2xl'>work experience.</h3>
      </div>
      <div className='flex justify-center flex-wrap gap-[2rem]'>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </section>
  )
}