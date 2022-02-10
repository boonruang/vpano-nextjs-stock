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
import { Formik, Form, Field, validateYupSchema } from 'formik'
import { TextField } from 'formik-material-ui'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { GetServerSideProps } from 'next'
import Router from 'next/router'

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

type Props = {
  id: string
  name: string
  price: number
  stock: number
}

export default function StockEdit({
  id,
  name,
  price,
  stock,
}: Props): ReactElement {
  const classes = useStyles()

  const showPreviewImage = (values) => {
    if (values.file_obj) {
      return (
        <img src={values.file_obj} style={{ height: 100, marginTop: 16 }} />
      )
    }
  }

  const showForm = ({ values, setFieldValue, isValid, dirty }) => {
    return (
      <Form>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Edit Stock
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="id"
              type="text"
              label="ProductID"
              disabled
            />

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="price"
              type="number"
              label="Price"
            />
            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="stock"
              type="number"
              label="Stock"
            />

            <div>{showPreviewImage(values)}</div>

            <div className={classes.field}>
              <img
                src="/static/img/ic_photo.png"
                style={{ width: 25, height: 20 }}
              />

              <span
                style={{ color: '#00B0CD', marginLeft: 10, marginRight: 10 }}
              >
                Add Picture
              </span>
              <input
                type="file"
                onChange={(e) => {
                  e.preventDefault()
                  setFieldValue('file', e.target.files[0]) // for upload
                  setFieldValue(
                    'file_obj',
                    URL.createObjectURL(e.target.files[0]),
                  ) // for preview image
                }}
                name="image"
                click-type="type1"
                className="picupload"
                multiple
                accept="image/*"
                id="files"
                style={{ padding: '20px 0' }}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!(isValid && dirty)}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                Router.back()
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    )
  }

  return (
    <Layout>
      {/* Main content */}
      <Formik
        validate={(values) => {
          let errors: any = {}
          if (!values.name) errors.name = 'กรุณาใส่ชื่อด้วย'
          if (!values.stock) errors.stock = 'กรุณาระบุจำนวน'
          if (!values.price) errors.price = 'กรุณาระบุราคา'
          return errors
        }}
        // ทำให้รับค่าจากภายนอกได้
        enableReinitialize
        initialValues={{ id, name, stock, price }}
        onSubmit={(values: any, { setSubmitting }) => {
          let formData = new FormData()
          formData.append('name', values.name)
          formData.append('price', values.price)
          formData.append('stock', values.stock)
          formData.append('image', values.file)
          // alert(JSON.stringify(values))
          setSubmitting(false)
        }}
      >
        {(props) => showForm(props)}
      </Formik>
      {/* content */}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
      name: '',
      price: 100,
      stock: 10,
    },
  }
}
