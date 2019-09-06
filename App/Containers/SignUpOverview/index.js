import React, { Component } from 'react'
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Keyboard
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { Colors, Images } from '@theme'
import {
  RubikText,
  FontWeight,
  CustomTextInput,
  RoundedButton,
  Link
} from '@components'
import I18N from '@services/i18n'

class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  visitWithoutAccount = () => {
    this.props.navigation.navigate('BottomTab')
  }

  goToSignInScreen = () => {
    this.props.navigation.navigate('SignInOverview')
  }

  goToSignUpByMail = () => {
    this.props.navigation.navigate('InscriptionStep')
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
    if (this.state.showKeyboard) {
      return;
    }
    return (
      <View style={styles.logoWrapper}>
        <Image source={Images.stackedBookIcon} style={styles.logo} />
        <Image source={Images.bookLoverBackground} style={styles.bookLoverLogo} />

        <RubikText
          fontWeight={FontWeight.BOLD}
          text={I18N.t('signUpOverview.header')}
          size={21} />
        <RubikText
          text={I18N.t('signUpOverview.registerLabel')}
          color={Colors.bodyText}
          size={18} />
      </View>
    )
  }

  renderRegisterBlock() {
    return (
      <View style={styles.registerWrapper}>
        <RubikText
          text={I18N.t('signUpOverview.orLabel')}
          color={Colors.bodyText}
          style={{ textAlign: 'center' }} />
        <RoundedButton
          title={I18N.t('signUpOverview.registerEmailLabel')}
          containerStyle={styles.button}
          onPress={this.goToSignUpByMail}
          icon={Images.icon.mail} />

        {/* TODO: onPress to login */}
        <RoundedButton
          title={I18N.t('signUpOverview.visitWithoutAccount')}
          backgroundColor={Colors.darkOrange}
          secondBackgroundColor={Colors.secondary}
          containerStyle={styles.button}
          onPress={this.visitWithoutAccount} />

          <RubikText
            text={I18N.t('signUpOverview.term')}
            color={Colors.bodyText}
            size={12}
            style={styles.termWrapper}/>

        <View style={styles.rigesterLink}>
          <RubikText
            text={I18N.t('signUpOverview.haveAccountQuestion')}
            color={Colors.bodyText}
            size={12} />

          {/* TODO: link to register page */}
          <Link text={I18N.t('signUpOverview.signInPage')}
            fontWeight={FontWeight.BOLD}
            color={Colors.primary}
            onPress={this.goToSignInScreen}/>
        </View>
      </View>
    )
  }

  render() {
    return (
      <LinearGradient
        colors={[Colors.background, Colors.white]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>

        {this.renderLogo()}
        {this.renderSocial()}
        {this.renderRegisterBlock()}
      </LinearGradient>
    )
  }
}

export default SignInScreen
