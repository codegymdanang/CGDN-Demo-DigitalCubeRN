import { createStackNavigator } from 'react-navigation'

import MyLibraryScreen from '@containers/MyLibrary'

const MyLibraryTabNavigator = createStackNavigator(
  {
    MyLibrary: { screen: MyLibraryScreen },
  },
  {
    headerMode: 'none'
  }
)

export default MyLibraryTabNavigator
