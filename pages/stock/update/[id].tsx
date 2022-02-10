import { GetServerSideProps } from 'next'
import React from 'react'

type Props = {
  id: string
}

export default function Update({ id }: Props) {
  return <div>Update ; {id}</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    },
  }
}
