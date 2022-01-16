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

import { HomeBottomTabParamList } from '@/home/components/fragments/Home'

import { Home } from '@/home/components/fragments/Home'
import { Notifications } from '@/notifications/components/fragments/Notifications'

const RootStack = createNativeStackNavigator()

export type RootStackParamList = {
  '/': NavigatorScreenParams<HomeBottomTabParamList>
  '/notifications': undefined
}

export function NavigationRootStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="/" component={Home} />

        <RootStack.Screen name="/notifications" component={Notifications} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
