/**
 *
 * BottomTabBar
 *
 */

import { View } from 'react-native'
import { BottomTabBarTab } from '@/app/navigation/BottomTabBarTab'

import { styles } from './styles'

export function BottomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.bar}>
      {state.routes.map((route: any, index: any) => (
        <BottomTabBarTab
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
