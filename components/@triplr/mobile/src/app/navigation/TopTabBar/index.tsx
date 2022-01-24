/**
 *
 * TopTabBar
 *
 */

import { View } from 'react-native'
import { TopTabBarTab } from '@/app/navigation/TopTabBarTab'

import { styles } from './styles'

export function TopTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => (
        <TopTabBarTab
          route={route}
          state={state}
          index={index}
          descriptors={descriptors}
          navigation={navigation}
          key={route.key}
        />
      ))}
    </View>
  )
}
