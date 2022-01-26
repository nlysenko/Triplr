/**
 *
 * Home
 *
 */

import { SafeAreaView, View, Text } from 'react-native'
import { Fragment } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'

import { SearchTabParamList } from '@/search/components/fragments/Search'

import { BottomTabBar } from '@/app/navigation/BottomTabBar'
import { Feed } from '@/feed/components/fragments/Feed'
import { Search } from '@/search/components/fragments/Search'
import { Maps } from '@/maps/components/fragments/Maps'
import { ProfileSettingsForm } from '@/settings/components/fragments/ProfileSettingsForm'

import { FeedIcon } from '@/home/components/atoms/FeedIcon'
import { SearchIcon } from '@/home/components/atoms/SearchIcon'
import { MapsIcon } from '@/home/components/atoms/MapsIcon'
import { ProfileIcon } from '@/home/components/atoms/ProfileIcon'

import { styles } from './styles'

const Tab = createMaterialTopTabNavigator()

export type HomeTabParamList = {
  Feed: undefined
  Search: NavigatorScreenParams<SearchTabParamList>
  Maps: undefined
  Profile: undefined
}

export function Home() {
  return (
    <Fragment>
      <SafeAreaView style={styles.margin} />

      <SafeAreaView style={styles.container}>
        <Tab.Navigator tabBarPosition="bottom" tabBar={BottomTabBar}>
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              title: 'feed',
              tabBarIcon: (focused: boolean) => <FeedIcon isActive={focused} />,
            }}
          />

          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              title: 'search',
              tabBarIcon: (focused: boolean) => (
                <SearchIcon isActive={focused} />
              ),
            }}
          />

          <Tab.Screen
            name="Maps"
            component={Maps}
            options={{
              title: '',
              tabBarIcon: () => <MapsIcon />,
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ProfileSettingsForm}
            options={{
              title: '',
              tabBarIcon: () => <ProfileIcon />,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>

      <SafeAreaView style={styles.margin} />
    </Fragment>
  )
}
