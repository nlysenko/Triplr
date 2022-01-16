/**
 *
 * Home
 *
 */

import { SafeAreaView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'

import { SearchTopTabParamList } from '@/search/components/fragments/Search'

import { Feed } from '@/feed/components/fragments/Feed'
import { Search } from '@/search/components/fragments/Search'
import { Maps } from '@/maps/components/fragments/Maps'
import { Profile } from '@/profile/components/fragments/Profile'

import { FeedIcon } from '@/feed/components/atoms/FeedIcon'
import { SearchIcon } from '@/search/components/atoms/SearchIcon'
import { MapsIcon } from '@/maps/components/atoms/MapsIcon'
import { ProfileIcon } from '@/profile/components/atoms/ProfileIcon'

import { styles } from './styles'

const Tab = createBottomTabNavigator()

export type HomeBottomTabParamList = {
  '/feed': undefined
  '/search': NavigatorScreenParams<SearchTopTabParamList>
  '/maps': undefined
  '/profile': undefined
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
          name="/feed"
          component={Feed}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => <FeedIcon isActive={focused} />,
          }}
        />

        <Tab.Screen
          name="/search"
          component={Search}
          options={{
            title: '',
            tabBarIcon: ({ focused }) => <SearchIcon isActive={focused} />,
          }}
        />

        <Tab.Screen
          name="/maps"
          component={Maps}
          options={{
            title: '',
            tabBarIcon: () => <MapsIcon />,
          }}
        />

        <Tab.Screen
          name="/profile"
          component={Profile}
          options={{
            title: '',
            tabBarIcon: () => <ProfileIcon />,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
