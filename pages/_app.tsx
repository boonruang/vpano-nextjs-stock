import React from 'react'
import App from 'next/app'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

type Props = {}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
