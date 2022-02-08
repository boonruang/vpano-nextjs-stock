import React from 'react'
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import MaterialTable from 'material-table'
import { products } from './api/dummy'

type Props = {}

export default function Stock({}: Props) {
  const columns = [
    {
      title: 'ID',
      field: 'id',
    },
    {
      title: 'IMAGE',
      field: 'image',
    },
    {
      title: 'NAME',
      field: 'name',
    },
    {
      title: 'PRICE',
      field: 'price',
    },
    {
      title: 'STOCK',
      field: 'stock',
    },
    {
      title: 'CREATED',
      field: 'updatedAt',
    },
  ]

  return (
    <Layout>
      <MaterialTable columns={columns} data={products} title="Course" />
    </Layout>
  )
}
