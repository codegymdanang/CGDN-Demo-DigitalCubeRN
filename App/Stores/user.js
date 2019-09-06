import { createReducer } from 'reduxsauce'
import { UserTypes } from '@actions/user'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  login: {
    result: null,
    error: null,
    requesting: false,
  },
  register: {
    result: null,
    error: null,
    requesting: false,
  },
  registInfo: null
}

// login
export const fetchLoginLoading = (state) => ({
  ...state,
  login: {
    ...state.login,
    requesting: true,
    error: null,
  }
})
export const fetchLoginSuccess = (state, { user }) => ({
  ...state,
  login: {
    ...state.login,
    result: user,
    requesting: false,
    error: null,
  }
})
export const fetchLoginFailure = (state, { error }) => ({
  ...state,
  login: {
    ...state.login,
    requesting: false,
    result: null,
    error: error.data,
  }
})

// register
export const fetchRegisterLoading = (state) => ({
  ...state,
  register: {
    ...state.register,
    requesting: true,
    error: null,
  }
})
export const fetchRegisterSuccess = (state, { user }) => ({
  ...state,
  register: {
    ...state.register,
    result: user,
    requesting: false,
    error: null,
  },
  login: {
    ...state.login,
    result: user,
    requesting: false,
    error: null,
  }
})
export const fetchRegisterFailure = (state, { error }) => ({
  ...state,
  register: {
    ...state.register,
    requesting: false,
    result: null,
    error: error.data,
  }
})

// saveRegistInfo
export const saveRegistInfo = (state, { data }) => ({
  ...state,
  registInfo: {
    ...state.registInfo,
    ...data
  }
})

// saveRegistInfo
export const fetchLogoutSuccess = (state, { data }) => ({
  ...state,
  login: {
    result: null,
    error: null,
    requesting: false,
  }
})

export default createReducer(INITIAL_STATE, {
  // login
  [UserTypes.FETCH_LOGIN_LOADING]: fetchLoginLoading,
  [UserTypes.FETCH_LOGIN_SUCCESS]: fetchLoginSuccess,
  [UserTypes.FETCH_LOGIN_FAILURE]: fetchLoginFailure,
  // register
  [UserTypes.FETCH_REGISTER_LOADING]: fetchRegisterLoading,
  [UserTypes.FETCH_REGISTER_SUCCESS]: fetchRegisterSuccess,
  [UserTypes.FETCH_REGISTER_FAILURE]: fetchRegisterFailure,
  // saveRegistInfo
  [UserTypes.SAVE_REGIST_INFO]: saveRegistInfo,
  // logout success
  [UserTypes.FETCH_LOGOUT_SUCCESS]: fetchLogoutSuccess,
})
