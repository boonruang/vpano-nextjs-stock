import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../../../components/layouts/layout'

type Props = {
  data: number
}

export default function StockEdit({ data }: Props) {
  return (
    <Layout>
      <h1>Edit</h1>
      <span>{data}</span>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      data: context.query.id,
    },
  }
}
