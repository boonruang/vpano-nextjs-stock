import { all, takeEvery } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import { sagaRegister } from './register.saga'
import { sagaLogin, sagaReLogin, sagaLogout } from './login.saga'

// Register
export function* watchRegisterRequest() {
  yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister)
}

// Login
export function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin)
}

// ReLogin
export function* watchReLoginRequest() {
  yield takeEvery(actionTypes.RELOGIN_REQUEST, sagaReLogin)
}

// Logout
export function* watchLogoutRequest() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, sagaLogout)
}

export default function* rootSaga() {
  yield all([
    watchRegisterRequest(),
    watchLoginRequest(),
    watchReLoginRequest(),
    watchLogoutRequest(),
  ])
}
