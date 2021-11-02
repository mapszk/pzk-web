import Head from "next/head"
import { ReactElement } from "react"
import Project from "../components/Project"
import { projects } from "../projectsData"

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>PZK - Projects</title>
      </Head>
      <h2>Projects</h2>
      {projects
        .sort((a, b) => b.id - a.id)
        .map(({ title, desc, id, img, link }): ReactElement => {
          return (
            <Project
              id={id}
              key={id}
              title={title}
              desc={desc}
              img={img}
              link={link}
            />
          )
        })}
    </>
  )
}

export default Projects
