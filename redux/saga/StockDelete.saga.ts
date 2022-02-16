import { call } from 'redux-saga/effects'
import { kResultOk } from '../../utils/constants'
import httpClient from '../../utils/httpClient'
import Router from 'next/router'

export function* sagaStockDelete({ payload }: any) {
  try {
    const response = yield call(httpClient.delete, `/stock/proudct/${payload}`)
    const { result } = response.data
    if (result == kResultOk) {
      Router.push('/stock')
    }
  } catch (error) {
    // Nothing
  }
}
