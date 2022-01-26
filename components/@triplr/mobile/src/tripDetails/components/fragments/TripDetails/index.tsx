/**
 *
 * TripDetails
 *
 */

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { RootStackParamList } from '@/app/navigation/RootStack'

import { BackButton } from '@/app/components/BackButton'
import { TripItem } from '@/tripDetails/components/molecules/TripItem'
import { TopTabBar } from '@/app/navigation/TopTabBar'
import { TripActivities } from '@/tripDetails/components/organisms/TripActivities'
import { TripPhotoList } from '@/tripDetails/components/organisms/TripPhotoList'

import { styles } from './styles'

const Tab = createMaterialTopTabNavigator()

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

          <View style={styles.tabBarWrapper}>
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
