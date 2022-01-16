/**
 *
 * Photos
 *
 */

import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { SearchTopTabParamList } from '@/search/components/fragments/Search'

import { styles } from './styles'

type Props = NativeStackScreenProps<SearchTopTabParamList, '/photos'>

export function Photos({ route }: Props) {
  const [referer, setReferer] = useState('')

  useEffect(() => {
    if (route.params?.referer) {
      setReferer(route.params?.referer)
    }
  }, [route.params?.referer])

  return (
    <View style={styles.container}>
      {referer ? <Text>{route.params?.referer}</Text> : false}
    </View>
  )
}
