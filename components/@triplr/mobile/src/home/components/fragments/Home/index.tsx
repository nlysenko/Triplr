/**
 *
 * Home
 *
 */

import { SafeAreaView, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feed } from '@/feed/components/fragments/Feed'
import { Search } from '@/search/components/fragments/Search'
import { Maps } from '@/maps/components/fragments/Maps'
import { Profile } from '@/profile/components/fragments/Profile'

import { styles } from './styles'

const Tab = createBottomTabNavigator()

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            title: '',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.feedIcon}
                  source={require('assets/img/feed-active.png')}
                />
              ) : (
                <Image
                  style={styles.feedIcon}
                  source={require('assets/img/feed.png')}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: '',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.searchIcon}
                  source={require('assets/img/search-active.png')}
                />
              ) : (
                <Image
                  style={styles.searchIcon}
                  source={require('assets/img/search.png')}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            title: '',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.mapsIcon}
                  source={require('assets/img/maps.png')}
                />
              ) : (
                <Image
                  style={styles.mapsIcon}
                  source={require('assets/img/maps.png')}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.profileIcon}
                  source={require('assets/img/profile.png')}
                />
              ) : (
                <Image
                  style={styles.profileIcon}
                  source={require('assets/img/profile.png')}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
