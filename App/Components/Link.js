import React, { Component } from 'react'
import {
  TouchableHighlight,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import { ApplicationStyles } from '@theme'
import RubikText, { FontWeight } from './RubikText'

class Link extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  getFontSize() {
    return this.props.size * ApplicationStyles.screen.ratio
  }

  render() {
    const {
      fontWeight, text, color, style, onPress
    } = this.props

    return (
      <View >
      <TouchableHighlight
        onPress={onPress}
        style={style}
        >
        <RubikText
          text={text}
          fontWeight={fontWeight}
          color={color} />
      </TouchableHighlight>
      </View>
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

export default Link
