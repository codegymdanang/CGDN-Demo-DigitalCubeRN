import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Colors } from '@theme'

export const FontWeight = {
  MEDIUM: 'Rubik-Medium',
  BOLD: 'Rubik-Bold',
  REGULAR: 'Rubik-Regular'
}

class RubikText extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  getFontSize() {
    return this.props.size * ApplicationStyles.screen.ratio
  }

  render() {
    const {
      fontWeight, text, color, style: customizedStyle
    } = this.props

    return (
      <Text style={{
        fontFamily: fontWeight,
        fontSize: this.getFontSize(),
        color,
       ...customizedStyle}}
      >
        {text}
      </Text>
    )
  }
}

RubikText.propTypes = {
  fontWeight: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

RubikText.defaultProps = {
  fontWeight: FontWeight.REGULAR,
  size: 16,
  color: '#000',
  style: {}
}

export default RubikText;
