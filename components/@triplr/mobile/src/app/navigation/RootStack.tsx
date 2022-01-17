/**
 *
 * NavigationRootStack
 *
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native'

import { HomeTabParamList } from '@/home/components/fragments/Home'

import { Home } from '@/home/components/fragments/Home'
import { Notifications } from '@/notifications/components/fragments/Notifications'

const RootStack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>
  Notifications: undefined
}

export function NavigationRootStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={Home} />

        <RootStack.Screen name="Notifications" component={Notifications} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
