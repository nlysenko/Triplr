/**
 *
 * Home
 *
 */

import { SafeAreaView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'

import { SearchTabParamList } from '@/search/components/fragments/Search'

import { Feed } from '@/feed/components/fragments/Feed'
import { Search } from '@/search/components/fragments/Search'
import { Maps } from '@/maps/components/fragments/Maps'
import { ProfileSettingsForm } from '@/settings/components/fragments/ProfileSettingsForm'

import { FeedIcon } from '@/home/components/atoms/FeedIcon'
import { SearchIcon } from '@/home/components/atoms/SearchIcon'
import { MapsIcon } from '@/home/components/atoms/MapsIcon'
import { ProfileIcon } from '@/home/components/atoms/ProfileIcon'

import { styles } from './styles'

const Tab = createBottomTabNavigator()

export type HomeTabParamList = {
  Feed: undefined
  Search: NavigatorScreenParams<SearchTabParamList>
  Maps: undefined
  Profile: undefined
}

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
            tabBarIcon: ({ focused }) => <FeedIcon isActive={focused} />,
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => <SearchIcon isActive={focused} />,
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
  )
}
