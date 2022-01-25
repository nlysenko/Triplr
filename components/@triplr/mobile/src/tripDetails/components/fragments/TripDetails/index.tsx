/**
 *
 * TripDetails
 *
 */

import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native'
import { RootStackParamList } from '@/app/navigation/RootStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'TripDetails'>

export function TripDetails({ navigation, route }: Props) {
  if (route.params.details) {
    const trip = route.params.details

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.goBack}>Go back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trip}>
          <Text style={styles.tripName}>{trip.name}</Text>

          <View style={styles.tripDuration}>
            <Text style={styles.tripDate}>{trip.dateEnd}</Text>

            <Text style={[styles.tripDate, styles.tab]}>-</Text>

            <Text style={styles.tripDate}>{trip.dateStart}</Text>
          </View>

          <ImageBackground
            style={styles.photo}
            resizeMode="cover"
            source={trip.imageUri}
          />
        </View>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.goBack}>Go back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.errorWrapper}>
          <Text style={styles.errorMessage}>Trip not fond!</Text>
        </View>
      </SafeAreaView>
    )
  }
}
