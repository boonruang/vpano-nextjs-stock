import React from 'react'
import Header from '../components/layouts/header'
import Menu from '../components/layouts/menu'

type Props = {}

export default function Stock({}: Props) {
  return (
    <div>
      <Header />
      <Menu />
      <h1>Stock</h1>
    </div>
  )
}
