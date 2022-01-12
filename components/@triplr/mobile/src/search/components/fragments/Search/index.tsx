/**
 *
 * Search
 *
 */

import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Photos } from '@/search/components/molecules/Photos'
import { Trips } from '@/search/components/molecules/Trips'

import { styles } from './styles'

const Tab = createMaterialTopTabNavigator()

export type SearchTopTabParamList = {
  '/photos': undefined
  '/trips': undefined
}

export function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search page</Text>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.label,
          tabBarIndicatorStyle: styles.indicator,
        }}
      >
        <Tab.Screen
          name="/photos"
          component={Photos}
          options={{
            title: 'Photos',
          }}
        />
        <Tab.Screen
          name="/trips"
          component={Trips}
          options={{
            title: 'Trips',
          }}
        />
      </Tab.Navigator>
    </View>
  )
}
