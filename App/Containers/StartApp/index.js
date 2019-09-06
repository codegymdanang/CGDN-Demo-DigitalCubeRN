import React, { PureComponent } from 'react'
import {
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavigationService from '@services/NavigationService'

import styles from './styles'

class StartApp extends PureComponent {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.handleAllowScreens()
  }

  handleAllowScreens() {
    const { navigation, userLogin } = this.props
    if (userLogin.result) {
        navigation.navigate('BottomTab')
    } else {
        navigation.navigate('Auth')
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor="#0b0727"
        /> */}
        <View style={styles.innerContainer} />
      </SafeAreaView>
    )
  }
}

export default connect(
  state => ({
    userLogin: state.user.login,
  }),
  dispatch => ({dispatch})
)(StartApp)
