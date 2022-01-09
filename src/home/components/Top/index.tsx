import React from 'react'
import { Text, View, Image } from 'react-native'

import { styles } from './styles'
interface Props {
  title: string
}

export function Top({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>{title}</Text>

      <Image
        style={styles.notifications}
        source={require('assets/img/icon-social-notifications-none-24-px.png')}
      />
    </View>
  )
}
