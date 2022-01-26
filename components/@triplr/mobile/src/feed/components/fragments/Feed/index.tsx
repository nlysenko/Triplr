/**
 *
 * Feed
 *
 */

import { View, TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'

import { RootStackParamList } from '@/app/navigation/RootStack'

import { TopBar } from '@/feed/components/molecules/TopBar'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function Feed({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <TopBar
        title="Triplr"
        onNotificationIconPress={() => navigation.navigate('Notifications')}
      />
    </View>
  )
}
