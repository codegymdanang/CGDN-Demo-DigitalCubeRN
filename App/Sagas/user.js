/* eslint-disable import/no-unresolved */
import {
  all, takeLatest, put, call, select
} from 'redux-saga/effects'
import UserActions, { UserTypes } from '@actions/user'
import UserService from '@apis/user'
import NavigationService from '@services/NavigationService'
import { registInfo } from '@selectors/user'
import { setAuthorizationHeader, unSetAuthorizationHeader } from '@services/http'

export function* fetchLogin({ userInfo }) {
  yield put(UserActions.fetchLoginLoading())

  // Fetch login from an API
  try {
    const res = yield call(UserService.logIn, userInfo)
    yield put(UserActions.fetchLoginSuccess(res.data))
    setAuthorizationHeader(res.data.token)
    NavigationService.navigate('BottomTab')
  } catch (error) {
    yield put(UserActions.fetchLoginFailure(error))
  }
}

export function* fetchRegister() {
  yield put(UserActions.fetchRegisterLoading())

  // Fetch login from an API
  try {
    const userInfo = yield select(registInfo)

    const res = yield call(UserService.register, userInfo)
    yield put(UserActions.fetchRegisterSuccess(res.data))
    NavigationService.navigate('SuccessfulRegistrationStep')
  } catch (error) {
    yield put(UserActions.fetchRegisterFailure(error))
  }
}

export function* fetchLogout() {
  yield put(UserActions.fetchLogoutSuccess())
  unSetAuthorizationHeader()
  NavigationService.navigate('SignUpOverview')
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(UserTypes.FETCH_LOGIN, fetchLogin),
    takeLatest(UserTypes.FETCH_REGISTER, fetchRegister),
    takeLatest(UserTypes.FETCH_LOGOUT, fetchLogout),
  ])
}
