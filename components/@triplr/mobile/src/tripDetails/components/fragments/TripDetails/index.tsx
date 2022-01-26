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
  ScrollView,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '@/app/navigation/RootStack'

import { BackButton } from '@/app/components/BackButton'
import { TripItem } from '@/tripDetails/components/molecules/TripItem'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'TripDetails'>

export function TripDetails({ navigation, route }: Props) {
  function goToPreviousScreen() {
    navigation.goBack()
  }

  if (route.params.details) {
    const trip = route.params.details

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.top}>
            <BackButton onButtonPress={goToPreviousScreen} />
          </View>

          <View style={styles.tripItemWrapper}>
            <TripItem trip={trip} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <BackButton onButtonPress={goToPreviousScreen} />
        </View>

        <View style={styles.errorWrapper}>
          <Text style={styles.errorMessage}>Trip not fond!</Text>
        </View>
      </SafeAreaView>
    )
  }
}
