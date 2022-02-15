import { put, call } from 'redux-saga/effects'
import httpClient from '../../utils/httpClient'
import actions from '../actions'
import Router from 'next/router'

export function* sagaLogin({ payload }: any) {
  try {
    yield put(actions.loginFetching())
    const response = yield call(httpClient.post, '/authen/login', payload)
    const { result } = response.data

    if (result == 'ok') {
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
