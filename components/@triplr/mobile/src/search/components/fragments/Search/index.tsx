/**
 *
 * Search
 *
 */

import { View } from 'react-native'
import { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { SearchInput } from '@/search/components/molecules/SearchInput'
import { TopTabBar } from '@/app/navigation/TopTabBar'
import { TripPhotoList } from '@/search/components/organisms/TripPhotoList'
import { TripList } from '@/search/components/organisms/TripList'

import { styles } from './styles'

const Tab = createMaterialTopTabNavigator()

export function Search() {
  const [searchItem, setSearchItem] = useState('')

  function handleChangeSearchField(text: string) {
    setSearchItem(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchInput value={searchItem} onChange={handleChangeSearchField} />
      </View>

      <Tab.Navigator tabBar={TopTabBar}>
        <Tab.Screen
          name="Trips"
          component={TripList}
          options={{
            title: 'Trips',
          }}
        />

        <Tab.Screen
          name="Photos"
          component={TripPhotoList}
          options={{
            title: 'Photos',
          }}
        />
      </Tab.Navigator>
    </View>
  )
}
