import { all, take, takeEvery } from 'redux-saga/effects'
import { sagaRegister } from './register.saga'
import * as actionTypes from './actionTypes'
import { sagaLogin } from './login.saga'

// Register
export function* watchRegisterRequest() {
  yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister)
}

// Login
export function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin)
}

export default function* rootSaga() {
  yield all([watchRegisterRequest(), watchLoginRequest()])
}
