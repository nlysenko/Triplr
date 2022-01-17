/**
 *
 * TripList
 *
 */

import { ScrollView, View } from 'react-native'

import { TripListItem } from '@/search/components/molecules/TripListItem'
import { Trips } from '@/app/data/trips'

import { styles } from './styles'

export function TripList() {
  return (
    <ScrollView style={styles.container}>
      {Trips.map(trip => (
        <View style={styles.trip} key={trip.id}>
          <TripListItem trip={trip} />
        </View>
      ))}
    </ScrollView>
  )
}
