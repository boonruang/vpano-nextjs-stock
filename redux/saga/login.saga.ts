import { put, call, select, delay } from 'redux-saga/effects'
import httpClient from '../../utils/httpClient'
import actions from '../actions'
import Router from 'next/router'

export function* sagaReLogin({ payload }: any) {
  const state = yield select()
  yield delay(10)
}

export function* sagaLogout() {
  //
}

export function* sagaLogin({ payload }: any) {
  try {
    yield put(actions.loginFetching())
    const response = yield call(httpClient.post, '/authen/login', payload)
    const { result, token, username } = response.data

    if (result == 'ok') {
      yield put(actions.loginSuccess({ result: 'ok', token, username }))
      Router.push('/stock')
    } else {
      yield put(actions.loginFailed())
      Router.push('/login')
    }
  } catch (error) {
    yield put(actions.loginFailed())
  }
}
