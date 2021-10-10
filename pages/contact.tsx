import Head from "next/head"
import { Title, Subtitle, Para } from "../components/Texts"
import ContactForm from "../components/ContactForm"
import { contactoStyles } from "../styles/contactoStyles"
import {
  SiNextDotJs,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobexd,
  SiTypescript,
} from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { colors } from "../styles/colors"

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>PZK - Contact</title>
      </Head>
      <div className="general">
        <section className="form__section">
          <Title color="verde">Contact</Title>
          <ContactForm theme="dark" />
        </section>
        <section className="aboutme__section">
          <Title>About me</Title>
          <Para>
            My name is Martin, I develop websites adapted to the client needs,
            looking always for optimal performance, and using design standards
            according to the product or the service. I'm a self-taught person in
            constant learning. Let's work together!
          </Para>
          <Title>Tools</Title>
          <Subtitle>Development</Subtitle>
          <div className="grid">
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "35px" }}
              >
                <FaHtml5 />
              </IconContext.Provider>
              <h5>HTML</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "35px" }}
              >
                <FaCss3Alt />
              </IconContext.Provider>
              <h5>CSS</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "32px" }}
              >
                <SiJavascript />
              </IconContext.Provider>
              <h5>JavaScript</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "32px" }}
              >
                <SiTypescript />
              </IconContext.Provider>
              <h5>TypeScript</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "35px" }}
              >
                <FaSass />
              </IconContext.Provider>
              <h5>Sass</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "35px" }}
              >
                <FaReact />
              </IconContext.Provider>
              <h5>React</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "32px" }}
              >
                <SiNextDotJs />
              </IconContext.Provider>
              <h5>Next</h5>
            </div>
          </div>
          <Subtitle>Design</Subtitle>
          <div className="grid">
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "30px" }}
              >
                <SiAdobeillustrator />
              </IconContext.Provider>
              <h5>Illustrator</h5>
            </div>
            <div className="grid__item">
              <IconContext.Provider
                value={{ color: colors.azul, size: "30px" }}
              >
                <SiAdobexd />
              </IconContext.Provider>
              <h5>Adobe XD</h5>
            </div>
          </div>
        </section>
        <style jsx>{contactoStyles}</style>
      </div>
    </>
  )
}

export default Contact
