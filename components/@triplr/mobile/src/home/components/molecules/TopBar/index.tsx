/**
 *
 * TopBar
 *
 */

import { Text, View, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface Props {
  title: string
  onNotificationIconPress: any
}

export function TopBar({ title, onNotificationIconPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.notificationsButton}
        onPress={onNotificationIconPress}
      >
        <Image
          style={styles.notificationsIcon}
          source={require('assets/img/icon-social-notifications-none-24-px.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
