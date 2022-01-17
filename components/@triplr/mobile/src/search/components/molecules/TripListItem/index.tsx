/**
 *
 * TripListItem
 *
 */

import { View, Text, ImageBackground } from 'react-native'

import { Trip } from '@/app/types/Trip'

import { styles } from './styles'

interface Props {
  trip: Trip
}

export function TripListItem({ trip }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        resizeMode="cover"
        source={trip.imageUri}
      />

      <Text style={styles.tripName}>{trip.name}</Text>

      <View style={styles.tripDuration}>
        <Text style={styles.tripDate}>{trip.dateEnd}</Text>

        <Text style={[styles.tripDate, styles.tab]}>-</Text>

        <Text style={styles.tripDate}>{trip.dateStart}</Text>
      </View>
    </View>
  )
}
