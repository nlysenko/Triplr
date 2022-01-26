/**
 *
 * Notifications
 *
 */

import { View, Text } from 'react-native'
import { RootStackParamList } from '@/app/navigation/RootStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { BackButton } from '@/app/components/BackButton'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Notifications'>

export function Notifications({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <BackButton onButtonPress={() => navigation.goBack()} />
    </View>
  )
}
