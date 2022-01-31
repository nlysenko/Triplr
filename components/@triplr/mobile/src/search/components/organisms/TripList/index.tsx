/**
 *
 * TripList
 *
 */

import { ScrollView, View } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/app/navigation/RootStack'

import { TripListItem } from '@/search/components/molecules/TripListItem'
import { TripItem } from '@/search/components/molecules/TripItem'
import { styles } from './styles'

import stateMachine from './state.machine'
import { useMachine } from '@xstate/react'

type Props = NativeStackScreenProps<RootStackParamList, 'TripDetails'>

export function TripList({ navigation }: Props) {
  const [state, sendEvent] = useMachine(stateMachine, {
    context: { navigation },
  })
  const { trips, selectedTrip, isDeviceTablet } = state.context

  const currentTripId: string = selectedTrip ? selectedTrip.id : ''

  return state.matches('loading') ? (
    <View style={styles.indicator}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  ) : (
    <ScrollView
      contentContainerStyle={
        isDeviceTablet ? styles.tabletContainer : styles.container
      }
    >
      <View style={isDeviceTablet ? styles.tabletTripList : styles.tripList}>
        {trips.map(trip => (
          <View
            style={
              isDeviceTablet && trip.id === currentTripId
                ? styles.tripListItemActive
                : styles.tripListItem
            }
            key={trip.id}
          >
            <TripListItem
              trip={trip}
              onPress={() => sendEvent({ type: 'TRIP__SELECT', data: trip })}
            />
          </View>
        ))}
      </View>

      {isDeviceTablet && selectedTrip ? (
        <View style={styles.tripDetails}>
          <TripItem trip={selectedTrip} />
        </View>
      ) : (
        <View style={styles.tripDetails} />
      )}
    </ScrollView>
  )
}
