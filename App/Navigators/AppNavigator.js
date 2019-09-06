import React from 'react'
import { Image, Text } from 'react-native'
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Colors } from '@theme'
import HomeStack from './HomeTabNavigator'
import VillageStack from './VillageTabNavigator'
import MyLibraryStack from './MyLibraryTabNavigator'
import MessagesStack from './MessagesTabNavigator'
import AccountStack from './AccountTabNavigator'
import StartAppScreen from '@containers/StartApp'
import AuthStack from './AuthNavigator'

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => {
          let icon = focused ? require('@assets/img/addbook-active-tab-icon.png') : require('@assets/img/addbook-tab-icon.png')

          return (<Image source={icon} />)
        }
      })
    },
    VillageStack: {
      screen: VillageStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Group',
        tabBarIcon: ({ focused }) => {
          let icon = focused ? require('@assets/img/village-active-tab-icon.png') : require('@assets/img/village-tab-icon.png')

          return (<Image source={icon} />)
        }
      })
    },
    MyLibrary: {
      screen: MyLibraryStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Library',
        tabBarIcon: ({ focused }) => {
          let icon = focused ? require('@assets/img/library-active-tab-icon.png') : require('@assets/img/library-tab-icon.png')

          return (<Image source={icon} />)
        }
      })
    },
    Messages: {
      screen: MessagesStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Messages',
        tabBarIcon: ({ focused }) => {
          let icon = focused ? require('@assets/img/messages-active-tab-icon.png') : require('@assets/img/messages-tab-icon.png')

          return (<Image source={icon} />)
        }
      })
    },
    Account: {
      screen: AccountStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused }) => {
          let icon = focused ? require('@assets/img/account-active-tab-icon.png') : require('@assets/img/account-tab-icon.png')

          return (<Image source={icon} />)
        }
      })
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: Colors.ceruleanTwo,
        inactiveTintColor: Colors.blueyGrey
      },
    })
  }
)

/* The purpose of SwitchNavigator is to only ever show one screen at a time.
 * By default, it does not handle back actions and it resets routes to their default state when you switch away
*/
const switchNavigator = createSwitchNavigator({
  StartApp: {
    screen: StartAppScreen
  },
  Auth: {
    screen: AuthStack
  },
  BottomTab: {
    screen: BottomTabNavigator
  }
})

export default createAppContainer(switchNavigator)
