import React, { Component } from 'react'
import NavigationService from '@services/NavigationService'
import AppNavigator from '@navigators/AppNavigator'
import { View } from 'react-native'
import { BackHandler } from "react-native"
import { NavigationActions } from "react-navigation"
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  // componentDidMount() {
  //   BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  // }
  //
  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  // }
  //
  // onBackPress = () => {
  //   const {
  //     nav,
  //     dispatch
  //   } = this.props
  //   if (nav.index === 0) {
  //     return false
  //   }
  //   dispatch(NavigationActions.back())
  //   return true
  // };

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

export default connect(
  state => ({
    nav: state.nav,
  }),
  dispatch => ({
    dispatch
  })
)(RootScreen)
