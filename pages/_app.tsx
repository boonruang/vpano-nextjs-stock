import React from 'react'
import App from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from '../redux'
import { setInterceptor } from '../utils/httpClient'
import { useDispatch } from 'react-redux'

type Props = {}

function MyApp({ Component, pageProps }: AppProps) {
  setInterceptor(useDispatch())
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
