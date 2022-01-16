/**
 *
 * Search
 *
 */

import { View } from 'react-native'
import { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { SearchField } from '@/search/components/molecules/SearchField'
import { Photos } from '@/search/components/molecules/Photos'
import { Trips } from '@/search/components/molecules/Trips'

import { styles } from './styles'

const Tab = createMaterialTopTabNavigator()

export type SearchTopTabParamList = {
  '/photos': { referer: string }
  '/trips': { referer: string }
}

export function Search() {
  const [searchItem, setSearchItem] = useState('')

  function handleChangeSearchField(text: string) {
    setSearchItem(text)
  }

  return (
    <View style={styles.container}>
      <SearchField
        value={searchItem}
        onSearchFieldChange={handleChangeSearchField}
      />

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.label,
          tabBarIndicatorStyle: styles.indicator,
        }}
      >
        <Tab.Screen
          name="/trips"
          component={Trips}
          options={{
            title: 'Trips',
          }}
        />

        <Tab.Screen
          name="/photos"
          component={Photos}
          options={{
            title: 'Photos',
          }}
        />
      </Tab.Navigator>
    </View>
  )
}
