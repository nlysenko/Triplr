/**
 *
 * TripList
 *
 */

import { ScrollView, View } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/app/navigation/RootStack'

import { TripListItem } from '@/search/components/molecules/TripListItem'
import { Trip } from '@/app/types/trip'
import { fetchData } from '@/app/utils/fetchData'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'TripDetails'>

export function TripList({ navigation }: Props) {
  const [trips, setTrips] = useState<Trip[]>([])
  const [tipsIsLoaded, setTripsIsLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await fetchData('trips')

      if (data) {
        setTrips(data)
        setTripsIsLoaded(true)
      } else {
        setTripsIsLoaded(false)
      }
    })()
  }, [])

  return tipsIsLoaded ? (
    <ScrollView style={styles.container}>
      {trips.map(trip => (
        <View style={styles.trip} key={trip.id}>
          <TripListItem
            trip={trip}
            onPress={() =>
              navigation.navigate('TripDetails', { details: trip })
            }
          />
        </View>
      ))}
    </ScrollView>
  ) : (
    <View style={styles.wrapper}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  )
}
