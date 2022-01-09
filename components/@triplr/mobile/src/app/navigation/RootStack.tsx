/**
 *
 * NavigationRootStack
 *
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from '@/home/components/fragments/Home'
import { Notifications } from '@/notifications/components/fragments/Notifications'

const RootStack = createNativeStackNavigator()

export type RootStackParamList = {
  '/': undefined
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
