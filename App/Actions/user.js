import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Login
  fetchLogin: ['userInfo'],
  fetchLoginLoading: null,
  fetchLoginSuccess: ['user'],
  fetchLoginFailure: ['error'],

  // Register
  fetchRegister: ['userInfo'],
  fetchRegisterLoading: null,
  fetchRegisterSuccess: ['user'],
  fetchRegisterFailure: ['error'],

  // saveRegistInfo
  saveRegistInfo: ['data'],

  // logout
  fetchLogout: null,
  fetchLogoutSuccess: null,
})

export const UserTypes = Types
export default Creators
