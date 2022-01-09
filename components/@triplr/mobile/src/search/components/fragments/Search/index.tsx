/**
 *
 * Search
 *
 */

import { View } from 'react-native'

import { Top } from '@/home/components/molecules/Top'

import { styles } from './styles'

export function Search() {
  return (
    <View style={styles.search}>
      <Top title="Search" />
    </View>
  )
}
