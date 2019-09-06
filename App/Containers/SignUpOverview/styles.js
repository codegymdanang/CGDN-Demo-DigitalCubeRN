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
    justifyContent: 'center',
    alignItems: 'center', 
    flex: 8, 
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
    alignItems: 'center',
    flex: 2
  }, 
  imageSocial: {
    width: 54 * ApplicationStyles.screen.ratio,
    height: 54 * ApplicationStyles.screen.ratio,
    marginLeft: 9 * ApplicationStyles.screen.ratio,
    marginRight: 9 * ApplicationStyles.screen.ratio
  }, 
  registerWrapper: {
    flex: 7, 
    marginTop: 15 * ApplicationStyles.screen.ratio
  },
  button: {
    marginTop: 9 * ApplicationStyles.screen.ratio,
    marginBottom: 9 * ApplicationStyles.screen.ratio
  },
  termWrapper: {
    textAlign: 'center',
    marginTop: 10 * ApplicationStyles.screen.ratio
  }, 
  rigesterLink: {
    flexDirection: 'row',
    marginTop: 20 * ApplicationStyles.screen.ratio,
    marginBottom: 20 * ApplicationStyles.screen.ratio,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
