import { createStackNavigator } from 'react-navigation'
import DashboardScreen from '@containers/Dashboard'
// TODO: remove here
import AccountScreen from '@containers/Account'

const AccountTabNavigator = createStackNavigator(
  {
    Account: { screen: DashboardScreen },
  },
  {
    headerMode: 'none'
  }
)

export default AccountTabNavigator
