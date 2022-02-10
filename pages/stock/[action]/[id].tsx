import { GetServerSideProps } from 'next'
import React from 'react'

type Props = {
  id: string
  action: string
}

export default function Action({ id, action }: Props) {
  return (
    <div>
      Action - {action} ; {id}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
      action: context.query.action,
    },
  }
}
