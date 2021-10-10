import type { AppProps } from "next/app"
import Head from "next/head"
import { colors } from "../styles/colors"
import Container from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import * as gtag from "../util/gtag"

import "../styles/home.css"
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
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
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
      <style jsx global>{`
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
        }
        p {
          margin: 0.2rem 0 1.2rem 0;
          line-height: 1.5em;
        }
        a {
          margin: 0;
          text-decoration: none;
          padding: 0;
        }
        button {
          border: none;
        }
      `}</style>
    </>
  )
}
export default MyApp
