import { put, call, select, delay } from 'redux-saga/effects'
import httpClient from '../../utils/httpClient'
import actions from '../actions'
import Router from 'next/router'
import { setCookie, removeCookie, getCookie } from '../../utils/cookie.js'

export function* sagaLogin({ payload }: any) {
  try {
    yield put(actions.loginFetching())
    const response = yield call(httpClient.post, '/authen/login', payload)
    const { result } = response.data

    if (result == 'ok') {
      setCookie('token', response.data.token)
      yield put(actions.loginSuccess({ result: 'ok' }))
      Router.push('/stock')
    } else {
      yield put(actions.loginFailed())
      Router.push('/login')
    }
  } catch (error) {
    yield put(actions.loginFailed())
  }
}

export function* sagaReLogin({ payload }: any) {
  // คล้ายกับการใช้ useSelector
  const state = yield select()
  yield delay(10)
  if (state.LoginReducer.token) {
    Router.push('/stock')
  } else if (payload.token) {
    yield put(actions.loginSuccess(payload))
    Router.push('/stock')
  } else {
    const localToken = getCookie('token')
    if (localToken) {
      yield put(actions.loginSuccess(payload))
      Router.push('/stock')
    }
  }
}

export function* sagaLogout() {
  removeCookie('token')
  yield put(actions.logoutSuccess())
  Router.push('/login')
}
