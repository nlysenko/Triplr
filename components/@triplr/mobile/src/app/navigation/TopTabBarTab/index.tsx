/**
 *
 * TopTabBarTab
 *
 */

import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function TopTabBarTab({
  state,
  descriptors,
  navigation,
  route,
  index,
}: any) {
  const { options } = descriptors[route.key]

  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name

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
      <Text
        style={[
          styles.label,
          isFocused ? styles.labelIsActive : styles.labelIsNotActive,
        ]}
      >
        {label}
      </Text>

      {isFocused ? <View style={styles.indicator} /> : false}
    </TouchableOpacity>
  )
}
