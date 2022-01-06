import React from 'react'
import { View } from 'react-native'

import { Top } from '@/home/components/Top'

import { styles } from './style'

export function Search() {
  return (
    <View style={styles.search}>
      <Top title="Search" />
    </View>
  )
}

export default Search
