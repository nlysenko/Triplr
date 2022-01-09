/**
 *
 * Home
 *
 */

import { View, Button } from 'react-native'
import { Top } from '@/home/components/molecules/Top'
import { RootStackParamList } from '@/app/navigation/RootStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, '/'>

export function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Top title="Triplr" />

      <Button
        title="Open notifications"
        onPress={() => navigation.navigate('/notifications')}
      />
    </View>
  )
}
