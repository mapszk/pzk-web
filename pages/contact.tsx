import Head from "next/head"
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
          <ContactForm />
        </section>
        <section className="aboutme__section">
          <h1>About me</h1>
          <p>
            My name is Martin, I develop websites adapted to the client needs,
            looking always for optimal performance, and using design standards
            according to the product or the service. I'm a self-taught person in
            constant learning. Let's work together!
          </p>
          <h2>Tools</h2>
          <h4>Development</h4>
          <Tools tools={tools.dev} />
          <h4>Design</h4>
          <Tools tools={tools.design} />
        </section>
        <style jsx>{contactoStyles}</style>
      </div>
    </>
  )
}

export default Contact
