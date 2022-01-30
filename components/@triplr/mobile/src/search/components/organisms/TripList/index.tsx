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
import { TripItem } from '@/search/components/molecules/TripItem'
import { Trip } from '@/app/types/trip'
import { fetchData } from '@/app/utils/fetchData'
import DeviceInfo from 'react-native-device-info'
import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'TripDetails'>

export function TripList({ navigation }: Props) {
  const [trips, setTrips] = useState<Trip[]>([])
  const [deviceIsTablet, setDeviceIsTablet] = useState(Boolean)
  const [tipsIsLoaded, setTripsIsLoaded] = useState(false)
  const [selectedTrip, setSelectedTrip] = useState<Trip>(Object)

  useEffect(() => {
    setDeviceIsTablet(DeviceInfo.getDeviceType() === 'Tablet')
    ;(async () => {
      const trips = await fetchData('trips')

      if (trips) {
        setTrips(trips)
        setSelectedTrip(trips[0])
        setTripsIsLoaded(true)
      } else {
        setTripsIsLoaded(false)
      }
    })()
  }, [])

  function choiceTrip(trip: Trip) {
    if (!deviceIsTablet) {
      navigation.navigate('TripDetails', { details: trip })
    } else {
      setSelectedTrip(trip)
    }
  }

  return tipsIsLoaded ? (
    <ScrollView
      contentContainerStyle={
        deviceIsTablet ? styles.tabletContainer : styles.container
      }
    >
      <View style={deviceIsTablet ? styles.tabletTripList : styles.tripList}>
        {trips.map(trip => (
          <View
            style={
              deviceIsTablet && trip.id === selectedTrip.id
                ? styles.tripListItemActive
                : styles.tripListItem
            }
            key={trip.id}
          >
            <TripListItem trip={trip} onPress={() => choiceTrip(trip)} />
          </View>
        ))}
      </View>

      {deviceIsTablet ? (
        <View style={styles.tripDetails}>
          <TripItem trip={selectedTrip} />
        </View>
      ) : (
        false
      )}
    </ScrollView>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  )
}
