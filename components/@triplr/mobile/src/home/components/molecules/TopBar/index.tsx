/**
 *
 * TopBar
 *
 */

import { Text, View, Image, TouchableHighlight } from 'react-native'

import { styles } from './styles'

interface Props {
  title: string
  navigation: any
}

export function TopBar({ title, navigation }: Props) {
  return (
    <View style={styles.topBar}>
      <Text style={styles.brand}>{title}</Text>

      <TouchableHighlight
        style={styles.notifications}
        onPress={() => navigation.navigate('/notifications')}
      >
        <Image
          source={require('assets/img/icon-social-notifications-none-24-px.png')}
        />
      </TouchableHighlight>
    </View>
  )
}
