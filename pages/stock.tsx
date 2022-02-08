import React from 'react'
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import MaterialTable from 'material-table'
import { products } from './api/dummy'
import { Typography } from '@material-ui/core'

type Props = {}

export default function Stock({}: Props) {
  const columns = [
    {
      title: 'ID',
      render: (item) => (
        <Typography variant="body1" color="primary">
          {item.id}
        </Typography>
      ),
    },
    {
      title: 'IMAGE',
      field: 'image',
    },
    {
      title: 'NAME',
      render: (item) => (
        <Typography variant="body1" color="primary">
          {item.name}
        </Typography>
      ),
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
