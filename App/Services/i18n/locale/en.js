export default {
  signUp: {
    inscription: {
      header: 'Inscription',
      description: 'Nous avons besoin de localiser ta bibliothèque pour te proposer les livres disponibles à proximité et pour que ta bibliothèque soit visible des lecteurs à proximité.',
      term: 'En créant un compte, j\'accepte les conditions générales d\'utilisation de Book Village',
      buttonLabel: 'Valider'
    },
    email: {
      header: 'Tape ton email',
      continueButtonLabel: 'Continuer'
    },
    password: {
      header: 'Tape ton mot de passe',
      continueButtonLabel: 'Continuer',
      rule: {
        length: '8+ character'
      }
    },
    fullname: {
      header: 'Tape ton nom et ton prénom',
      placeholder: {
        firstName: 'nom',
        lastName: 'Prénom',
      },
      continueButtonLabel: 'Continuer'
    },
    termAgreement: {
      header: 'Do you agree to our terms of use?',
      termContent: 'En créant un compte, j\'accepte les conditions d\'utilisation de Bookiful',
      agreeLabel: 'Agree',
      continueButtonLabel: 'Continuer'
    },
    registerSuccess: {
      congrats: 'Bravo !\nTon compte est créé.',
      content: 'Maintenant,\n passons à  l\'exploration de l\’app !',
      startButtonLabel: 'C\'est parti !'
    }
  },
  scanIsbn: {
    buttonFlash: 'Allumer',
    buttonContinude: 'Continuer',
    buttonScanAgain: 'Scanner à nouveau',
    buttonEnterIsbn: 'Taper le code ISBN manuellement',
    buttonEnterIsbnSub: '(sans tiret ni espace)',
    scanSuccessTitle: 'Est-ce bien le livre que\ntu souhaites ajouter ?',
    enterManual: 'Tape ton ISBN',
  },
  signIn: {
    header: 'Connect with',
    byEmail: {
      header: 'or sign in with email',
      placeholder: {
        email: 'Email',
        password: 'Password'
      }
    },
    forgotPassword: 'Forgot password?',
    btnLoginLabel: 'Sign in',
    noAccountQuestion: 'Don\'t have account?',
    registerLink: ' Register'
  },
  signUpOverview: {
    header: 'Partagez vos histoires',
    registerLabel: 'S’inscrire avec',
    orLabel: 'ou',
    term: 'En créant un compte, j\'accepte les\nconditions générales d\'utilisation de Book Village',
    registerEmailLabel: 'S\'inscrire avec un email',
    visitWithoutAccount: 'Visiter l\'application (sans compte)',
    haveAccountQuestion: 'Tu as déjà un compte ?',
    signInPage: ' Connecte-toi',
  },
  dashboard: {
    prefixHello: 'Hello,',
    navigation: {
      personalInfo: 'Mes données personnelles',
      notifications: 'Mes alertes',
      paymentMethod: 'Mon moyen de paiement',
      transaction: 'Mes transactions',
      term: 'CGU/CGV/Mentions légales',
      privacy: 'Charte Vie Privée/Cookies'
    },
    buttonEditLabel: 'Editer'
  },
  // TODO: rename level
  level: {
    1: 'Débutant',
    2: 'Débrouillard',
    3: 'Amateur',
    4: 'Pro',
    5: 'Expert',
    6: 'Master'
  },
  addBookToLibrary: {
    button: {
      viewLibrary: 'Voir ma bibliothèque',
      scanAgain: 'Ajouter un autre livre'
    },
    title: 'Bravo !\nFais ta séléction',
    status: {
      isFor: 'Que souhaites-tu en faire ?',
      condition: 'État du livre',
      isPrivate: 'Le ranger, mais comment ?',
    }
  }
}
