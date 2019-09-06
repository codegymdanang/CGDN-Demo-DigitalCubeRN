import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '@theme'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 37 * ApplicationStyles.screen.ratio,
    paddingRight: 37 * ApplicationStyles.screen.ratio
  },
  logoWrapper: {
    alignItems: 'center',
    flex: 5,
  },
  logo: {
    width: 45 * ApplicationStyles.screen.ratio,
    height: 26 * ApplicationStyles.screen.ratio,
    marginTop: 30 * ApplicationStyles.screen.ratio
  },
  bookLoverLogo: {
    width: 192 * ApplicationStyles.screen.ratio,
    height: 153 * ApplicationStyles.screen.ratio,
    marginTop: 25 * ApplicationStyles.screen.ratio,
    marginBottom: 25 *ApplicationStyles.screen.ratio
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginTop: 15 * ApplicationStyles.screen.ratio
  },
  imageSocial: {
    width: 54 * ApplicationStyles.screen.ratio,
    height: 54 * ApplicationStyles.screen.ratio,
    marginLeft: 9 * ApplicationStyles.screen.ratio,
    marginRight: 9 * ApplicationStyles.screen.ratio
  },
  loginByEmailWrapper: {
    flex: 6,
    marginTop: 15 * ApplicationStyles.screen.ratio,
    justifyContent: 'flex-end'
  },
  textInput: {
    marginTop: 7 * ApplicationStyles.screen.ratio,
    marginBottom: 7 * ApplicationStyles.screen.ratio
  },
  forgotLink: {
    marginTop: 10 * ApplicationStyles.screen.ratio,
    marginBottom: 10 * ApplicationStyles.screen.ratio,
    alignItems: 'center'
  },
  rigesterLink: {
    flexDirection: 'row',
    marginTop: 20 * ApplicationStyles.screen.ratio,
    marginBottom: 20 * ApplicationStyles.screen.ratio,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lbSystemError: {
    alignSelf: 'center',
    marginVertical: 10,
    color: '#dc3545',
    fontSize: 14,
  }

})
