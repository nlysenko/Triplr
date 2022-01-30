/**
 *
 * TripPhotoList
 *
 */

import { ScrollView, Text, View } from 'react-native'

import { styles } from './styles'

export function TripPhotoList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Photos</Text>
      </View>
    </ScrollView>
  )
}
