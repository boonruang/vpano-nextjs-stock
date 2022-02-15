import { LoginReducer } from '../../types/login.reducer.types'
import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
} from '../saga/actionTypes'

const initialState: LoginReducer = {
  result: null,
  isFetching: false,
  isFailed: false,
}

export default (state = initialState, { type, payload }): LoginReducer => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false }
    case LOGIN_SUCCESS:
      return {
        ...state,
        result: payload.result,
        isFetching: false,
        isFailed: false,
      }
    case LOGIN_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true }

    default:
      return state
  }
}