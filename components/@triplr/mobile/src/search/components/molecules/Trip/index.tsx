/**
 *
 * Trip
 *
 */

import { View, Text, ImageBackground } from 'react-native'

import { styles } from './styles'

interface Props {
  name: string
  dateStart: string
  dateEnd: string
  imageUri: any
}

export function Trip({ name, dateStart, dateEnd, imageUri }: Props) {
  return (
    <View style={styles.trip}>
      <ImageBackground
        style={styles.photo}
        resizeMode="cover"
        source={imageUri}
      />

      <Text style={styles.tripName}>{name}</Text>

      <View style={styles.tripDuration}>
        <Text style={styles.tripDate}>{dateEnd}</Text>

        <Text style={[styles.tripDate, styles.tab]}>-</Text>

        <Text style={styles.tripDate}>{dateStart}</Text>
      </View>
    </View>
  )
}
