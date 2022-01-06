import React from 'react'
import { View } from 'react-native'

import { Top } from '@/home/components/Top'

import { styles } from './style'

export function Home() {
  return (
    <View style={styles.home}>
      <Top title="Triplr" />
    </View>
  )
}
