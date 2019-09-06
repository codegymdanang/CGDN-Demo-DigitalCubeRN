/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native'
import RubikText, { FontWeight } from '@components/RubikText'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient';
import { Colors, ApplicationStyles } from '@theme'

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',

  },
  button: {
    paddingTop: ApplicationStyles.screen.ratio * 15,
    paddingBottom: ApplicationStyles.screen.ratio * 15,
    paddingRight: ApplicationStyles.screen.ratio * 20,
    paddingLeft: ApplicationStyles.screen.ratio * 20,
    borderRadius: 24 * ApplicationStyles.screen.ratio,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 16 * ApplicationStyles.screen.ratio,
    height: 16 * ApplicationStyles.screen.ratio,
    marginRight: 10 * ApplicationStyles.screen.ratio
  }
})

class RoundedButton extends Component {
  constructor(props) {
    super(props)
  }

  getStyleFromProps() {
    const { foregroundColor } = this.props
    return {
      color: foregroundColor,
    }
  }

  renderIcon() {
    const { icon, foregroundColor } = this.props
    if (icon) {
      return (
        <Image
          source={icon}
          style={style.icon} />
      )
    }
  }

  render() {
    const {
      title,
      containerStyle,
      onPress,
      disabled,
      foregroundColor,
      secondBackgroundColor,
      backgroundColor,
      children,
      textStyle,
      icon,
      isLoading
    } = this.props

    return (
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={disabled || !onPress}
        >
          <LinearGradient
            colors={[secondBackgroundColor, backgroundColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[style.button, this.getStyleFromProps(), containerStyle]}
          >
            {this.renderIcon()}
            {
              isLoading && <ActivityIndicator size="small" color="#414141" />
            }
            <RubikText
              fontWeight={FontWeight.MEDIUM}
              text={title}
              color={foregroundColor}
              style={textStyle}
            />
            {children}
          </LinearGradient>

        </TouchableOpacity>

    )
  }
}

RoundedButton.propTypes = {
  backgroundColor: PropTypes.string,
  secondBackgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.element,
  textStyle: PropTypes.object,
  icon: PropTypes.number
}

RoundedButton.defaultProps = {
  backgroundColor: Colors.primary,
  secondBackgroundColor: Colors.lightPrimary,
  foregroundColor: Colors.white,
  disabled: false,
  children: null,
  containerStyle: null,
  onPress: null,
  textStyle: null,
}

export default RoundedButton
