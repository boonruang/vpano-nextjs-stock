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
      <Footer
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: '#eba8a8',
          color: 'black',
          fontSize: 13,
          textAlign: 'left',
          height: 30,
          paddingLeft: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontWeight: 900,
        }}
      />
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
