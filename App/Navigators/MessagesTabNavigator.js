import { createStackNavigator } from 'react-navigation'

import MessagesScreen from '@containers/Messages'


const MessagesTabNavigator = createStackNavigator(
  {
    Messages: { screen: MessagesScreen },
  },
  {
    headerMode: 'none'
  }
)


export default MessagesTabNavigator
