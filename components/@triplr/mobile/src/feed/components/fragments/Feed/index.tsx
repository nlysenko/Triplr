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
  const [testItem, setTestItem] = useState('Feed')

  function handleChange() {
    setTestItem(testItem === 'Feed' ? 'NoFeed' : 'Feed')
  }

  return (
    <View style={styles.container}>
      <TopBar
        title="Triplr"
        onNotificationIconPress={() => navigation.navigate('Notifications')}
      />

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Search',
              params: {
                screen: 'Trips',
                params: {
                  referer: 'Feed',
                },
              },
            })
          }
        >
          <Text>Go to Search Trips</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Search',
              params: {
                screen: 'Photos',
                params: {
                  referer: testItem,
                },
              },
            })
          }
        >
          <Text>Go to Search Photos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={handleChange}>
          <Text>Change referer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
