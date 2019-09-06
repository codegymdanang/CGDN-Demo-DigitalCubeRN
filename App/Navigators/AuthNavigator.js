import { createStackNavigator } from 'react-navigation'

import SignInScreen from '@containers/SignIn'

const AddBookTabNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    }
  },
  {
    headerMode: 'none'
  }
)

export default AddBookTabNavigator
