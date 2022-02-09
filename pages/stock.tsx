import React from 'react'
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import MaterialTable, { Action, MTableToolbar } from 'material-table'
import { products } from './api/dummy'
import { Button, Chip, Typography } from '@material-ui/core'
import Moment from 'react-moment'
import NumberFormat from 'react-number-format'
import { Edit, DeleteOutline } from '@material-ui/icons'

type Props = {}

export default function Stock({}: Props) {
  const columns = [
    {
      title: 'ID',
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: 'IMAGE',
      cellStyle: { padding: 5 },
      render: (item) => (
        <img
          src="https://www.codemobiles.com/biz/images/cm_logo.svg?ref=10"
          style={{ width: 50, height: 50, borderRadius: '5%' }}
        />
      ),
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
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'฿'}
          />
        </Typography>
      ),
    },
    {
      title: 'STOCK',
      render: (item) => (
        <Typography variant="body1">
          <NumberFormat
            value={item.stock}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
            suffix={' pcs'}
          />
        </Typography>
      ),
    },
    {
      title: 'CREATED',
      render: (item) => (
        <Typography>
          <Moment format="DD/MM/YYYY">{item.updatedAt}</Moment>
        </Typography>
      ),
    },
  ]

  const actions: Action<any>[] = [
    {
      icon: () => <Edit color="secondary" />,
      tooltip: 'Edit',
      onClick: (event, rowData) => {
        // Do save operation
      },
    },
    {
      icon: () => <DeleteOutline color="secondary" />,
      tooltip: 'Delete',
      onClick: (event, rowData) => {
        // Do save operation
      },
    },
  ]

  return (
    <Layout>
      <MaterialTable
        columns={columns}
        data={products}
        title="Stock"
        actions={actions}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <div style={{ padding: '0px 10px' }}>
                <Button fullWidth variant="contained" color="primary">
                  Create
                </Button>
              </div>
            </div>
          ),
        }}
      />
    </Layout>
  )
}
