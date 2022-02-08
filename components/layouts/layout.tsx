import React, { Fragment, ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import Menu from './menu'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <Menu />
      {children}
      <Footer />
      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </Fragment>
  )
}
