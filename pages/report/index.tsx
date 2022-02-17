import React, { ReactElement } from 'react'
import Header from '../../components/layouts/header'
import Menu from '../../components/layouts/menu'
import Layout from '../../components/layouts/layout'
import MaterialTable, { Action } from 'material-table'
import { products } from '../api/dummy'
import { Typography, makeStyles } from '@material-ui/core'
import Moment from 'react-moment'
import NumberFormat from 'react-number-format'
import { Edit, DeleteOutline } from '@material-ui/icons'
import { TextField } from 'formik-material-ui'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
}))

type Props = {}

export default function StockCreate({}: Props): ReactElement {
  const dispatch = useDispatch()
  const stockCreateReducer = useSelector(
    ({ stockCreateReducer }: any) => stockCreateReducer,
  )
  const classes = useStyles()

  return (
    <Layout>
      <h1>Report</h1>
    </Layout>
  )
}
