import type { AppProps } from "next/app"
import Head from "next/head"
import { colors } from "../styles/colors"
import Header from "../components/Header"
import Footer from "../components/Footer"
import * as gtag from "../util/gtag"
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }: AppProps) {
  // GOOGLE ANALYTICS
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        * {
          box-sizing: border-box;
        }
        section {
          margin-bottom: 1rem;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "Epilogue";
          background-color: ${colors.gris};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 0;
          font-weight: 600;
          color: ${colors.azul};
          margin-bottom: 0.3rem;
        }
        p {
          margin: 0.2rem 0 1.2rem 0;
          line-height: 1.5em;
          color: ${colors.azul};
        }
        a {
          margin: 0;
          text-decoration: none;
          padding: 0;
        }
        button {
          border: none;
        }
        .main {
          width: 95%;
          max-width: 960px;
          margin: 0 auto;
          min-height: calc(100vh - 100px);
          padding: 0.5rem 0;
        }
      `}</style>
    </>
  )
}
export default MyApp
