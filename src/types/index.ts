export interface Skill {
  id: number;
  name: string;
  image: string;
}

export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  company: string;
  time: string;
  background_image: string;
}

export interface Education {
  id: number;
  title: string;
  institute: string;
  time: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Array<string>;
  githubLink: string;
  webLink: string;
}
