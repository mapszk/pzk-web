import React, { ReactElement } from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "../util/gtag"

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta
            name="description"
            content="Desarrollador front-end y diseñador UI. Desarrollo de aplicaciones web diseñadas a medida."
          ></meta>
          <meta name="robots" content="index"></meta>
          <meta
            name="keywords"
            content="front-end, desarrollador, diseñador ui"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;800&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            });
                            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
