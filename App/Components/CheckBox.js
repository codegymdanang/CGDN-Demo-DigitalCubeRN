import React, { Component } from 'react'
import RubikText from './RubikText'
import { TouchableWithoutFeedback, StyleSheet, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ApplicationStyles, Images, Colors } from '@theme'
import PropTypes from 'prop-types'

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  checkboxWrapper: {
    width: 22 * ApplicationStyles.screen.ratio,
    height: 22 * ApplicationStyles.screen.ratio,
    borderRadius: 5 * ApplicationStyles.screen.ratio,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxIcon: {
    width: 16 * ApplicationStyles.screen.ratio,
    height: 16 * ApplicationStyles.screen.ratio,
  },
  textWrapper: {
    marginLeft: 8 * ApplicationStyles.screen.ratio
  },
  text: {

  }
})

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousChecked: props.checked,
      checked: props.checked
    }
  }

  onChange() {
    if (this.props.disabled) {
      return
    }

    const newValue = !this.state.checked
    
    this.setState({
      checked: newValue
    });

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  static getDerivedStateFromProps(props, state) {
    return props.checked != state.previousChecked ? {
        previousChecked: props.checked,
        checked: props.checked
    } : {};
  }

  renderCheckedIcon() {
    console.log('icon checked', this.state.checked)
    if (!this.state.checked) {
      return;
    }

    return (
      <Image style={style.checkboxIcon} source={Images.icon.checked} />
    )
  }

  render() {
    const { secondBackagroundColor, backgroundColor, text } = this.props;

    return (
      <View style={[style.wrapper, this.props.containerStyle]}>
        <View>
          <TouchableWithoutFeedback
            onPress={() => this.onChange()}
            disabled={this.props.disabled}>
            <LinearGradient
              colors={[secondBackagroundColor, backgroundColor]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[style.checkboxWrapper]}>
              {this.renderCheckedIcon()}
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
        <RubikText
          text={text}
          style={{...style.textWrapper, color: this.props.textColor}} />
      </View>
    )

  }
}

CheckBox.propTypes = {
  backgroundColor: PropTypes.string,
  secondBackagroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  onChange: PropTypes.func,
  fontSize: PropTypes.number, 
  textColor: PropTypes.string
}

CheckBox.defaultProps = {
  backgroundColor: Colors.primary,
  secondBackagroundColor: Colors.lightPrimary,
  textColor: Colors.extraText,
  disabled: false,
  fontSize: 16
}
export default CheckBox;