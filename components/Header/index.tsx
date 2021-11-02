import { useState } from "react"
import Link from "next/link"
import { styles } from "./styles"
import Logo from "../Logo"

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const handleMenuOn = (): void => {
    document.body.style.overflow = "hidden"
    setMenu(true)
  }
  const handleMenuOff = (): void => {
    document.body.style.overflow = "auto"
    setMenu(false)
  }

  return (
    <>
      <div className={menu ? "menu-on" : "menu-off"}>
        <div className="menu__close">
          <img
            src="https://icongr.am/feather/x.svg?size=128&color=052b36"
            alt="Close"
          />
        </div>
        <ul className="menu__list">
          <li className="menu__list_item">
            <Link href="/">
              <a onClick={handleMenuOff} className="menu__link">
                <h2>Home</h2>
              </a>
            </Link>
          </li>
          <li className="menu__list_item">
            <Link href="/projects">
              <a onClick={handleMenuOff} className="menu__link">
                <h2>Projects</h2>
              </a>
            </Link>
          </li>
          <li className="menu__list_item">
            <Link href="/contact">
              <a onClick={handleMenuOff} className="menu__link">
                <h2>Contact</h2>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <header className="navbar">
        <div className="navbar__container">
          <Link href="/">
            <a>
              <Logo color="azul" width={75} />
            </a>
          </Link>
          <nav>
            <ul className="navbar__list">
              <li className="navbar__list_item">
                <Link href="/">
                  <a className="navbar__link">Home</a>
                </Link>
              </li>
              <li className="navbar__list_item">
                <Link href="/projects">
                  <a className="navbar__link">Projects</a>
                </Link>
              </li>
              <li className="navbar__list_item">
                <Link href="/contact">
                  <a className="navbar__link">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="menu__open">
            <img
              src="https://icongr.am/feather/menu.svg?size=128&color=052b36"
              alt="Menu"
            />
          </div>
        </div>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}

export default Header
