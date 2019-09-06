import React, { Component } from 'react'
import { Text, ViewPropTypes, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import { ApplicationStyles, Colors } from '@theme'

export const FontWeight = {
  MEDIUM: 'Rubik-Medium',
  BOLD: 'Rubik-Bold',
  REGULAR: 'Rubik-Regular'
}

export default class GradientButton extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  getFontSize() {
    return this.props.fontSize * ApplicationStyles.screen.ratio
  }

  render() {
    const {
      text, onPress, styles, color, styleTouchableOpacity
    } = this.props
    const state = {
      button: {
        borderRadius: 25 * ApplicationStyles.screen.ratio,
        padding: 10 * ApplicationStyles.screen.ratio,
        flex: 1,
      },
    }
    return (
      <TouchableOpacity style={styleTouchableOpacity} onPress={() => onPress()}>
        <LinearGradient colors={color} style={state.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
          <Text style={styles}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

GradientButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.array,
  fontSize: PropTypes.number,
  styles: ViewPropTypes.style,
  styleTouchableOpacity: ViewPropTypes.style,
  onPress: PropTypes.func
}

GradientButton.defaultProps = {
  fontWeight: FontWeight.BOLD,
  fontSize: 16,
  color: Colors.white,
  styleTouchableOpacity: {},
  styles: {
    fontSize: 16,
    color: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
}
