import Head from "next/head"
import Button from "../components/Button"
import Layout from "../components/Layout"
import { homeStyles } from "../styles/homeStyles"

const Index: React.FC = () => {
  return (
    <Layout title="PZK - Home">
      <section className="hero__section">
        <div className="hero__images">
          <div className="monitor">
            <img src="/images/monitor.png" alt="monitor" />
          </div>
          <div className="baldeAzul">
            <img src="/images/balde-azul.png" alt="pintura" />
          </div>
          <div className="baldeVerde">
            <img src="/images/balde-verde.png" alt="pintura" />
          </div>
          <div className="cubo">
            <img src="/images/cubo.png" alt="cubo" />
          </div>
          <div className="esfera">
            <img src="/images/esfera.png" alt="esfera" />
          </div>
        </div>

        <div className="hero__text">
          <h1>
            Hi! I'm Martín Pilaszek, <br />
            and I'm front-end developer.
          </h1>
          <div className="buttons">
            <Button mt={0.3} mb={0.3} link="/projects" ghost color="azul">
              Projects
            </Button>
            <Button mt={0.3} mb={0.3} link="/contact" color="azul">
              Contact
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{homeStyles}</style>
    </Layout>
  )
}

export default Index
