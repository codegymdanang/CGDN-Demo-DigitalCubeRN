import { createStackNavigator } from 'react-navigation'

import VillageScreen from '@containers/Village'

const VillageTabNavigator = createStackNavigator(
  {
    Village: { screen: VillageScreen },
  },
  {
    headerMode: 'none'
  }
)

export default VillageTabNavigator
