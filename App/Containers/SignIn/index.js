import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import validator from 'validator'

import { Colors, Images } from '@theme'
import styles from './styles'
import {
  RubikText,
  FontWeight,
  CustomTextInput,
  RoundedButton,
  Link
} from '@components'
import I18N from '@services/i18n'
import UserActions from '@actions/user'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    }
  }

  validateLogin = () => {
    const { email, password } = this.state;

    if (validator.isEmpty(email)) {
      return {
        type: 'email',
        errorMsg: 'Email required'
      };
    }
    if (!validator.isEmail(email)) {
      return {
        type: 'email',
        errorMsg: 'Email invalid'
      };
    }
    if (validator.isEmpty(password)) {
      return {
        type: 'password',
        errorMsg: 'Password required'
      };
    }

    return null;
  }

  signIn = () => {
    const { navigation, userLogin, fetchLogin } = this.props;
    const { email, password } = this.state;
    this.setState({
      emailError: '',
      passwordError: ''
    });
    const error = this.validateLogin();

    if (!error) {
       fetchLogin({email, password})
    } else if (error.type === 'email') {
      this.setState({
        emailError: error.errorMsg
      });
    } else {
      this.setState({
        passwordError: error.errorMsg
      });
    }
  }

  renderSocial() {
    return (
      <View style={styles.socialWrapper}>
        {/* TODO: onPress facebook */}
        <TouchableWithoutFeedback >
          <Image source={Images.icon.facebook}
            style={styles.imageSocial} />
        </TouchableWithoutFeedback>

        {/* TODO: onPress google */}
        <TouchableWithoutFeedback>
          <Image source={Images.icon.google}
            style={styles.imageSocial} />
        </TouchableWithoutFeedback>
      </View>
    )
  }

  renderLogo() {
    return (
      <View style={styles.logoWrapper}>
          <Image source={Images.stackedBookIcon} style={styles.logo} />
          <Image source={Images.bookLoverBackground} style={styles.bookLoverLogo} />

        <RubikText
          fontWeight={FontWeight.BOLD}
          text={I18N.t('signIn.header')}
          size={24} />
      </View>
    )
  }

  renderLoginByEmail() {
    const {
      passwordError,
      emailError,
    } = this.state;

    const { userLogin } = this.props

    return (
      <View style={styles.loginByEmailWrapper}>
        <RubikText
          text={I18N.t('signIn.byEmail.header')}
          color={Colors.bodyText}
          style={{ textAlign: 'center' }} />
        <CustomTextInput
          placeholder={I18N.t('signIn.byEmail.placeholder.email')}
          containerStyle={styles.textInput}
          onChangeText={text => this.setState({ email: text })}
          errorMessage={emailError} />
        <CustomTextInput
          placeholder={I18N.t('signIn.byEmail.placeholder.password')}
          containerStyle={styles.textInput}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
          errorMessage={passwordError} />

        {
          userLogin.error && <Text style={styles.lbSystemError}>Incorrect email or password.</Text>
        }

        <Link text={I18N.t('signIn.forgotPassword')}
          fontWeight={FontWeight.BOLD}
          color={Colors.secondary}
          style={styles.forgotLink} />

        {/* TODO: onPress to login */}
        <RoundedButton
          title={I18N.t('signIn.btnLoginLabel')}
          onPress={this.signIn}
          isLoading={userLogin.requesting}
        />
        <View style={styles.rigesterLink}>
          <RubikText
            text={I18N.t('signIn.noAccountQuestion')}
            color={Colors.bodyText}
            size={12} />

            {/* TODO: link to register page */}
          <Link text={I18N.t('signIn.registerLink')}
            fontWeight={FontWeight.BOLD}
            color={Colors.primary}
            onPress={() => this.props.navigation.navigate('InscriptionStep')} />
        </View>
      </View>
    )
  }

  render() {
    return (
      <KeyboardAwareScrollView enableOnAndroid>
        <LinearGradient
          colors={[Colors.background, Colors.white]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}>

          {this.renderLogo()}
          {this.renderSocial()}
          {this.renderLoginByEmail()}
        </LinearGradient>
      </KeyboardAwareScrollView>
    )
  }
}

export default connect(
  state => ({
    userLogin: state.user.login,
  }),
  dispatch => bindActionCreators({
    fetchLogin: UserActions.fetchLogin,
  }, dispatch)
)(SignIn)
