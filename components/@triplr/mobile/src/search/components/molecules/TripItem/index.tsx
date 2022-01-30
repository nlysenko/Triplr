/**
 *
 * TripItem
 *
 */

import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { TopTabBar } from '@/app/navigation/TopTabBar'
import { TripName } from '@/app/components/TripName'
import { TripActivities } from '@/app/components/TripActivities'
import { TripPhotoList } from '@/app/components/TripPhotoList'
import { Trip } from '@/app/types/Trip'

const Tab = createMaterialTopTabNavigator()

import { styles } from './styles'

interface Props {
  trip: Trip
}

export function TripItem({ trip }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TripName trip={trip} />
      </View>

      <Tab.Navigator tabBar={TopTabBar}>
        <Tab.Screen
          name="Activities"
          component={TripActivities}
          options={{
            title: 'Activities',
          }}
        />

        <Tab.Screen
          name="Photos"
          component={TripPhotoList}
          options={{
            title: 'Photos',
          }}
        />
      </Tab.Navigator>
    </View>
  )
}
