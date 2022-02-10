import React, { Fragment } from 'react'

import loginStyle from '../styles/login.style'
import loginCSS from '../public/static/css/login.module.css'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

import Router from 'next/router'

type Props = {}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const onClickLogin = () => {
  Router.push('/stock')
}

export default function Login({}: Props) {
  const classes = useStyles()

  const showForm = (props) => {
    return (
      <Form>
        <Field
          component={TextField}
          margin="normal"
          required
          fullWidth
          id="username"
          name="username"
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onClickLogin}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => {
            Router.push('/register')
          }}
        >
          Register
        </Button>
      </Form>
    )
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/static/img/next_login.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Formik
              validate={() => {}}
              initialValues={{ username: '', password: '' }}
              onSubmit={(values) => {
                alert(JSON.stringify(values))
              }}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>
        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url('/static/img/bg4.jpg');
              text-align: center;
            }
          `}
        </style>
      </div>
    </Fragment>
  )
}
