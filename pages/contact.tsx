import Head from 'next/head'
import { Title, Subtitle, Para } from "../components/Texts"
import ContactForm from '../components/ContactForm'
import { HtmlIcon, CssIcon, SassIcon, JavascriptIcon, ReactIcon, XdIcon, IllustratorIcon } from '../components/Icons'
import { contactoStyles } from '../styles/contactoStyles'

const Contact: React.FC = () => {
    return(
        <>
            <Head>
                <title>PZK - Contact</title>
            </Head>
            <div className="general">
                <section className="form__section">
                    <Title color="verde">Contact</Title>
                    <ContactForm theme="dark"/>
                </section>
                <section className="aboutme__section">
                    <Title>About me</Title>
                    <Para>
                        My name is Martin, I develop websites adapted to the client needs, looking always for optimal performance, and using design standards according to the product or the service. 
                        I'm a self-taught person in constant learning. Let's work together!
                    </Para>
                    <Title>Tools</Title>
                    <Subtitle>Development</Subtitle>
                    <div className="grid">
                        <div className="grid__item">
                            <HtmlIcon width={35} color="azul" />
                            <h5>HTML</h5>
                        </div>
                        <div className="grid__item">
                            <CssIcon width={35} color="azul" />
                            <h5>CSS</h5>
                        </div>
                        <div className="grid__item">
                            <JavascriptIcon width={40} color="azul" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="grid__item">
                            <SassIcon width={40} color="azul" />
                            <h5>Sass</h5>
                        </div>
                        <div className="grid__item">
                            <ReactIcon width={40} color="azul" />
                            <h5>React</h5>
                        </div>
                    </div>
                    <Subtitle>Design</Subtitle>
                    <div className="grid">
                        <div className="grid__item">
                            <IllustratorIcon width={40} color="azul" />
                            <h5>Illustrator</h5>
                        </div>
                        <div className="grid__item">
                            <XdIcon width={40} color="azul" />
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
