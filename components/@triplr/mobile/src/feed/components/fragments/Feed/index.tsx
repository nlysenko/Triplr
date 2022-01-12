/**
 *
 * Feed
 *
 */

import { View, TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '@/app/navigation/RootStack'
// import { HomeBottomTabParamList } from '@/home/components/fragments/Home'
// import { SearchTopTabParamList } from '@/search/components/fragments/Search'

import { TopBar } from '@/feed/components/molecules/TopBar'

import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, '/'>

export function Feed({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <TopBar
        title="Triplr"
        onNotificationIconPress={() => navigation.navigate('/notifications')}
      />

      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('/search', { screen: '/trips' })}
        >
          <Text>Go to Search Trips</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('/search', { screen: '/photos' })}
        >
          <Text>Go to Search Photos</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
