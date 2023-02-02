import { Skill, Experience, Education, Project } from '../types'

export const navbarItems = [
  { id: 1, title: 'Inicio', link: '#home' },
  { id: 2, title: 'Sobre Mí', link: '#about' },
  { id: 3, title: 'Educación', link: '#education' },
  { id: 4, title: 'Proyectos', link: '#projects' },
  { id: 5, title: 'Experiencia', link: '#experience' },
  { id: 6, title: 'Tecnologías', link: '#technologies' },
]

export const educations: Array<Education> = [
  { id: 1, title: 'Tecnicatura Universitaria en Programación Informática', institute: 'Universidad Nacional de Quilmes', time: '2022 - En Curso', image: 'unq.jpg' },
  { id: 2, title: 'Carrera de Desarrollo Full Stack', institute: 'Coderhouse', time: '2022 (10 meses)', image: 'coderhouse.png' },
  { id: 3, title: 'Tecnicatura en Informática Personal y Profesional', institute: 'Instituto Técnico María Reina', time: '2015 - 2021', image: 'itmr.jpeg' },
]

export const projects: Array<Project> = [
  { id: 1, title: 'Proyecto del curso de Desarrollo Backend de Coderhouse', image: 'project4.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-desarrollo-backend-coderhouse', webLink: '', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto reiciendis aliquam hic voluptates doloribus deserunt numquam, laudantium quasi enim tempora tempore odio libero, consequuntur dolores dolorem ratione. Odit magni hic nostrum quaerat? Assumenda quae inventore autem enim, eos dicta sit voluptatem ad saepe veritatis ipsa repellendus dolore incidunt, laboriosam est.', technologies: ['Express.js', 'Node.js', 'mongoDB', 'Bootstrap'] },
  { id: 2, title: 'Proyecto del curso de React de Coderhouse', image: 'project3.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-react-coderhouse', webLink: '', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto reiciendis aliquam hic voluptates doloribus deserunt numquam, laudantium quasi enim tempora tempore odio libero, consequuntur dolores dolorem ratione. Odit magni hic nostrum quaerat? Assumenda quae inventore autem enim, eos dicta sit voluptatem ad saepe veritatis ipsa repellendus dolore incidunt, laboriosam est.', technologies: ['React.js', 'Firebase', 'Sass'] },
  { id: 3, title: 'Proyecto del curso de Javascript de Coderhouse', image: 'project2.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-javascript-coderhouse', webLink: 'https://lucapandolfelli.github.io/proyecto-final-javascript-coderhouse/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto reiciendis aliquam hic voluptates doloribus deserunt numquam, laudantium quasi enim tempora tempore odio libero, consequuntur dolores dolorem ratione. Odit magni hic nostrum quaerat? Assumenda quae inventore autem enim, eos dicta sit voluptatem ad saepe veritatis ipsa repellendus dolore incidunt, laboriosam est.', technologies: ['Javascript', 'EJS', 'Sass'] },
  { id: 4, title: 'Proyecto del curso de Desarrollo Web de Coderhouse', image: 'project1.png', githubLink: 'https://github.com/Lucapandolfelli/proyecto-final-desarrollo-web-coderhouse', webLink: 'https://lucapandolfelli.github.io/proyecto-final-desarrollo-web-coderhouse/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto reiciendis aliquam hic voluptates doloribus deserunt numquam, laudantium quasi enim tempora tempore odio libero, consequuntur dolores dolorem ratione. Odit magni hic nostrum quaerat? Assumenda quae inventore autem enim, eos dicta sit voluptatem ad saepe veritatis ipsa repellendus dolore incidunt, laboriosam est.', technologies: ['HTML', 'Sass', 'Bootstrap', 'Javascript'] },
]

export const technologies: Array<Skill> = [
  { id: 1, name: 'JavaScript', image: 'js.png'},
  { id: 2, name: 'CSS', image: 'css.png'},
  { id: 3, name: 'Express.js', image: 'express.png'},
  { id: 4, name: 'Bootstrap', image: 'bootstrap.png'},
  { id: 5, name: 'Firebase', image: 'firebase.png'},
  { id: 6, name: 'Git', image: 'git.png'},
  { id: 7, name: 'GraphQL', image: 'graphql.png'},
  { id: 8, name: 'Handlebars', image: 'handlebars.png'},
  { id: 9, name: 'HTML', image: 'html.png'},
  { id: 10, name: 'Laravel', image: 'laravel.png'},
  { id: 11, name: 'Linux', image: 'linux.png'},
  { id: 12, name: 'mongoDB', image: 'mongo.png'},
  { id: 13, name: 'Nest.js', image: 'nest.png'},
  { id: 14, name: 'Next.js', image: 'next.png'},
  { id: 15, name: 'Node.js', image: 'node.png'},
  { id: 16, name: 'React.js', image: 'react.png'},
  { id: 17, name: 'Sass', image: 'sass.png'},
  { id: 18, name: 'WordPress', image: 'wordpress.png'},
]

export const experiences: Array<Experience> = [
  { id: 1, title: 'Diseñador, Desarrollador y Administrador Web', description: 'Administración de la página web de Criadores Argentinos de Caballos Cuarto de Milla (CACCM) desarrollada sobre el CMS Webflow. Rediseño, diseño e implementación de algunas páginas y secciones de la página web. Actualización de información y eventos.', image: 'caccm.png', link: 'https://web.caccm.com.ar', company: 'Criadores Argentinos de Caballos Cuarto de Milla', time: 'jun. 2022 - actualidad'},
  { id: 2, title: 'Diseñador, Desarrollador y Administrador Web', description: 'Diseño, desarrollo, configuración y administración de la página web de Haras Maryland, uno de los más importantes haras de cría de caballos raza Cuarto de Milla en latinoamérica. Tema de Wordpress personalizado. Generación de sitio web multilenguaje. Aplicación de SEO.', image: 'harasmaryland.png', link: 'https://harasmaryland.com', company: 'Haras Maryland', time: 'mar. 2022 - sep. 2022'},
]