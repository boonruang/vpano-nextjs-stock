import React from 'react'
import App from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from '../redux'

type Props = {}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // call page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default wrapper.withRedux(MyApp)
