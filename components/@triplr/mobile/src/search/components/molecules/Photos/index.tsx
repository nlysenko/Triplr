/**
 *
 * Photos
 *
 */

import { View, Text } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { SearchTabParamList } from '@/search/components/fragments/Search'

import { styles } from './styles'

type Props = NativeStackScreenProps<SearchTabParamList, 'Photos'>

export function Photos({ route }: Props) {
  return (
    <View style={styles.container}>
      {route.params?.referer ? <Text>{route.params?.referer}</Text> : false}
    </View>
  )
}
