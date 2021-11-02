import { motion } from "framer-motion"
import Head from "next/head"

interface Props {
  title?: string
  desc?: string
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, y: -100, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 100, x: 0 },
}

const Layout: React.FC<Props> = ({ children, title, desc }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc}></meta>
      </Head>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="main"
      >
        {children}
      </motion.main>
    </>
  )
}

export default Layout
