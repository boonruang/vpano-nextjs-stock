import React from 'react'
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import MaterialTable from 'material-table'

type Props = {}

export default function Stock({}: Props) {
  return (
    <Layout>
      <MaterialTable
        columns={[
          { title: 'No', field: 'no' },
          { title: 'Name', field: 'name' },
        ]}
        data={[
          { no: 1, name: 'Angular' },
          { no: 2, name: 'ReactJS' },
          { no: 3, name: 'VueJS' },
        ]}
        title="Course"
      />
    </Layout>
  )
}
