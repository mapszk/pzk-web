import Link from "next/link"
import { footerStyles } from "./styles"

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container">
          <a
            href="https://www.github.com/mapszk"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              src="https://icongr.am/feather/github.svg?size=128&color=052b36"
              alt="Github"
            />
          </a>
          <Link href="/">
            <a>
              <img src="/images/logo-ojo.png" alt="PZK logo" />
            </a>
          </Link>
          <a href="mailto:martinpilaszek@gmail.com">
            <img
              src="https://icongr.am/feather/mail.svg?size=128&color=052b36"
              alt="Email"
            />
          </a>
        </div>
      </footer>
      <style jsx>{footerStyles}</style>
    </>
  )
}

export default Footer
