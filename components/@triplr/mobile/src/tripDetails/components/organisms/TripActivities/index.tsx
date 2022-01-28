/**
 *
 * TripActivities
 *
 */

import { Text, ScrollView, View } from 'react-native'

import { styles } from './styles'

export function TripActivities() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Activities</Text>
      </View>
    </ScrollView>
  )
}
