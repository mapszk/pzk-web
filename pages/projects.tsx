import { ReactElement } from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import { projects } from "../projectsData"

const Projects: React.FC = () => {
  return (
    <Layout title="PZK - Projects">
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
    </Layout>
  )
}

export default Projects
