import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): ReactElement {
    return(
        <Html>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <meta name="description" content="Desarrollador front-end y diseñador UI. Desarrollo de aplicaciones web diseñadas a medida."></meta>
            <meta name="robots" content="index"></meta>
            <meta name="keywords" content="front-end, desarrollador, diseñador ui"></meta>
            <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    );
  }
}

