/**
 *
 * BottomTabBarTab
 *
 */

import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function BottomTabBarTab({
  state,
  descriptors,
  navigation,
  route,
  index,
}: any) {
  const { options } = descriptors[route.key]

  const isFocused = state.index === index

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true })
    }
  }

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      activeOpacity={1}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tab}
    >
      {options.tabBarIcon(isFocused)}
    </TouchableOpacity>
  )
}
