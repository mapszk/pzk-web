import Link from 'next/link'
import { colors } from '../../styles/colors'
import { GithubIcon, MailIcon } from '../Icons'

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="container">
                        <div className="contact__item">
                            <a href="https://www.github.com/mapszk" rel="noreferrer noopener" target="_blank">
                                <GithubIcon color="azul" width={20} />
                            </a>
                        </div>
                        <div className="contact__item">
                            <Link href="/">
                                <a>
                                    <img src="/images/logo-ojo.png" alt="PZK logo" />
                                </a>
                            </Link>
                        </div>
                        <div className="contact__item">
                            <a href="mailto:martinpilaszek@gmail.com">
                                <MailIcon color="azul" width={20} />
                            </a>
                        </div>
                </div>
            </footer>
            <style jsx>{`
                .contact__item{
                    display: flex;
                    align-items: center;
                    transition: transform 1s ease;
                }
                .contact__item:hover{
                    transform: translateY(5px);
                }
                .container{
                    width: 95%;
                    max-width: 960px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                footer{
                    height: 50px;
                    background-color: ${colors.gris};
                    display: flex;
                    align-items: center;
                }
                h5{
                    color: ${colors.azul};
                    font-weight: 500;
                    margin-left: .5rem;
                }  
                img{
                    width: 2rem;
                    margin: 0 2rem;
                }
            `}</style>
        </>
    )
}

export default Footer
