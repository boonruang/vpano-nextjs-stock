import React from 'react'
import Header from '../../components/layouts/header'
import Layout from '../../components/layouts/layout'
import Menu from '../../components/layouts/menu'
import MaterialTable, { Action, MTableToolbar } from 'material-table'
import { products } from '../api/dummy'
import { Button, Chip, Typography } from '@material-ui/core'
import Moment from 'react-moment'
import NumberFormat from 'react-number-format'
import { Edit, DeleteOutline } from '@material-ui/icons'
import Router from 'next/router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import stockActions from '../../redux/actions'

type Props = {}

export default function Stock({}: Props) {
  const columns = [
    {
      title: 'ID',
      field: 'id',
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: 'IMAGE',
      field: 'name',
      cellStyle: { padding: 5 },
      render: (item) => (
        <img
          src={`${process.env.NEXT_PUBLIC_APP_IMAGE_API_URL}/${
            item.image
          }?version=${Math.random().toString()}`}
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
        Router.push(`/stock/edit?id=${rowData.id}`)
      },
    },
    {
      icon: () => <DeleteOutline color="secondary" />,
      tooltip: 'Delete',
      onClick: (event, rowData) => {
        dispatch(stockActions.deleteStock(rowData.id))
      },
    },
  ]

  const stockListReducer = useSelector(
    ({ stockListReducer }: any) => stockListReducer,
  )
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(stockActions.feedStockList())
  }, [])

  return (
    <Layout>
      <MaterialTable
        columns={columns}
        data={stockListReducer.result ? stockListReducer.result : []}
        title="Stock"
        options={{ search: true }}
        actions={actions}
        components={{
          Toolbar: (props) => (
            <div>
              {/* <span>token: {loginReducer.token}</span> */}
              <MTableToolbar {...props} />
              <div style={{ padding: '0px 10px' }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    Router.push('/stock/create')
                  }}
                >
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
