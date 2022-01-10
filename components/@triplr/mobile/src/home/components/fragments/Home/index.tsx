/**
 *
 * Home
 *
 */

import { View, Text, Button } from 'react-native'
import { RootStackParamList } from '@/app/navigation/RootStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { TopBar } from '@/home/components/molecules/TopBar'
import { BottomBar } from '@/home/components/molecules/BottomBar'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, '/'>

export function Home({ navigation }: Props) {
  return (
    <View style={styles.home}>
      <TopBar
        title="Triplr"
        onNotificationIconPress={() => navigation.navigate('/notifications')}
      />

      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Text>Home</Text>

        <Button
          title="Open notifications"
          onPress={() => navigation.navigate('/notifications')}
        />
      </View>

      <BottomBar />
    </View>
  )
}
