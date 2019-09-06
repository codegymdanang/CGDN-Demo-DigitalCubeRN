import { createStackNavigator } from 'react-navigation'

import HomeScreen from '@containers/Home'

const AddBookTabNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none'
  }
)

export default AddBookTabNavigator
