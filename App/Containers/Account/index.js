import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './styles'

class AccountScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.text}>Mon compte</Text>
      </View>
    )
  }
}

AccountScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountScreen)
