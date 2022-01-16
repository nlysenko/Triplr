/**
 *
 * Trips
 *
 */

import { ScrollView } from 'react-native'

import { Trip } from '@/search/components/molecules/Trip'

import { styles } from './styles'

export function Trips() {
  return (
    <ScrollView style={styles.container}>
      <Trip
        name="Honeymoon Trip"
        dateStart="16 Mar 2020"
        dateEnd="09 Jan 2020"
        imageUri={require('assets/img/honeymoon-trip.jpeg')}
      />

      <Trip
        name="Trip to Malaysia"
        dateStart="30 Jul 2019"
        dateEnd="18 Mar 2020"
        imageUri={require('assets/img/malaysia-trip.jpeg')}
      />
    </ScrollView>
  )
}
