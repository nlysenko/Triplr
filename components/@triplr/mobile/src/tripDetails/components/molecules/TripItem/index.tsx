/**
 *
 * TripItem
 *
 */

import { View, Text } from 'react-native'

import { Trip } from '@/app/types/Trip'

import { styles } from './styles'

interface Props {
  trip: Trip
}

export function TripItem({ trip }: Props) {
  return (
    <View>
      <Text style={styles.tripName}>{trip.name}</Text>

      <View style={styles.tripDuration}>
        <Text style={styles.tripDate}>{trip.dateEnd}</Text>

        <Text style={[styles.tripDate, styles.tab]}>-</Text>

        <Text style={styles.tripDate}>{trip.dateStart}</Text>
      </View>
    </View>
  )
}
