import Head from "next/head"
import { Title, Subtitle, Para } from "../components/Texts"
import ContactForm from "../components/ContactForm"
import { contactoStyles } from "../styles/contactoStyles"
import Tools from "../components/Tools"
import { tools } from "../tools"

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
          <Tools tools={tools.dev} />
          <Subtitle>Design</Subtitle>
          <Tools tools={tools.design} />
        </section>
        <style jsx>{contactoStyles}</style>
      </div>
    </>
  )
}

export default Contact
