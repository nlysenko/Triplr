/**
 *
 * Notifications
 *
 */

import { View, Button, Text } from 'react-native'
import { RootStackParamList } from '@/app/navigation/RootStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, '/notifications'>

export function Notifications({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}
