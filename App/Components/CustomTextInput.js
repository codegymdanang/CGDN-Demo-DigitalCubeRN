import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import ElevatedView from 'react-native-elevated-view'
import { ApplicationStyles, Colors, Images } from '@theme'
import RubikText from './RubikText'

const style = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 25,
    marginHorizontal: 10,
    borderRadius: 14,
    backgroundColor: '#ffffff'
  },
  container: {
    borderRadius: 24
  },

  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  iconWrapper: {
    marginRight: 20 * ApplicationStyles.screen.ratio,
    flex: 1
  },
  iconTextInput: {
    width: 24 * ApplicationStyles.screen.ratio,
    height: 24 * ApplicationStyles.screen.ratio,
  },
  customTextInput: {
    flex: 9,
    padding: 0,
    marginLeft: 20 * ApplicationStyles.screen.ratio,
    marginTop: 15 * ApplicationStyles.screen.ratio,
    marginBottom: 15 * ApplicationStyles.screen.ratio
  },
  errorText: {
    marginBottom: 5 * ApplicationStyles.screen.ratio,
    marginLeft: 20 * ApplicationStyles.screen.ratio
  },
  textError: {
    marginHorizontal: 10,
    color: '#dc3545',
    fontSize: 12
  }
})

const EMAIL_REGEX = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'

export default class CustomTextInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      secureTextEntry: this.props.secureTextEntry,
      value: ''
    }
  }

  getFontSize() {
    return this.props.fontSize * ApplicationStyles.screen.ratio
  }

  renderShowPassword() {
    if (this.props.secureTextEntry) {
      const icon = this.state.secureTextEntry ? Images.icon.showPassword : Images.icon.hidePassword;
      return (
        <View style={style.iconWrapper}>
          <TouchableWithoutFeedback onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })}>
            <Image
              source={icon}
              style={style.iconTextInput} />
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

  setError(error) {
    this.setState({ error })

    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  isValid() {
    if (this.state.error) {
      return false
    }

    return this.validate()
  }

  onChangeText = (text) => {
    const { onChangeText } = this.props
    this.setState({ value: text })
    onChangeText(text)
  }

  validate() {
    if (this.props.required && !this.state.value) {
      this.setError(`[TBT] This field is must not empty`)
      return false
    }

    if (this.props.minLength && this.state.value.length < this.props.minLength) {
      this.setError(`[TBT] Value is at least ${this.props.minLength} character(s)`)
      return false
    }

    if (this.props.isEmail) {
      if (!new RegExp(EMAIL_REGEX).test(this.state.value)) {
        this.setError(`[TBT] Wrong format of email`)
        return false
      }
    }

    if (this.props.pattern) {
      if (!new RegExp(this.props.pattern).test(this.state.value)) {
        this.setError(`[TBT] Wrong format`)
        return false
      }
    }

    // No error here, reset
    this.setState({ error: null })
    if (this.props.onValid) {
      this.props.onValid();
    }

    return true
  }

  renderError() {
    if (!this.state.error) {
      return;
    }

    return (
      <RubikText
        text={this.state.error}
        size={12}
        color={'#f00'}
        style={style.errorText}
      />
    )
  }

  render() {
    const {
      value, placeholder, containerStyle, errorMessage
    } = this.props

    let errorStyle = {};
    if (this.state.error) {
      errorStyle = { borderColor: 'rgba(255, 0, 0, 0.5)', borderWidth: 2}
    }

    return (
      <View style={containerStyle}>
        <ElevatedView elevation={6} style={[style.shadow, style.inputWrapper, errorStyle]}>
          <TextInput
           value={value}
           style={style.customTextInput}
           placeholder={placeholder}
           placeholderTextColor={Colors.extraText}
           onChangeText={this.onChangeText}
           maxLength={this.props.maxLength}
           onEndEditing={() => this.validate()}
           secureTextEntry={this.state.secureTextEntry} />
          {this.renderShowPassword()}
        </ElevatedView>
       {this.renderError()}
       {!!errorMessage
        && <Text style={style.textError}>{errorMessage}</Text>}
     </View>
    )
  }
}

CustomTextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  containerStyle: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  regex: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  onError: PropTypes.func,
  required: PropTypes.bool,
  isEmail: PropTypes.bool
}

CustomTextInput.defaultProps = {
  secureTextEntry: false,
  required: false
}
