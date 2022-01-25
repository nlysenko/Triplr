/**
 *
 * TripListItem
 *
 */

import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import { Trip } from '@/app/types/Trip'

import { styles } from './styles'

interface Props {
  trip: Trip
  onPress: any
}

export function TripListItem({ trip, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  )
}
