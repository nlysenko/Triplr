import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'

import { Home } from '@/home/screens/Home'

import { styles } from './styles'

export function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.container}>
        <Home />
      </View>

      <View style={styles.footer} />
    </SafeAreaView>
  )
}
