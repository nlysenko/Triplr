/**
 *
 * ChildCreateForm state machine
 *
 */

import { createMachine, assign } from 'xstate'
import statechart from './state.statechart.json'
import { fetchData } from '@/app/utils/fetchData'
import DeviceInfo from 'react-native-device-info'

export default createMachine(statechart, {
  actions: {
    setTrips: assign({
      trips: (context, event) => event.data,
    }),

    setSelectedTrip: assign({
      selectedTrip: (context, event) => event.data,
    }),

    setIsDeviceTablet: assign({
      isDeviceTablet: () => DeviceInfo.getDeviceType() === 'Tablet',
    }),

    openTripDetails: (context, event) =>
      context.navigation.navigate('TripDetails', { details: event.data }),
  },

  guards: {
    hasData: (context, event) => Boolean(event.data),
    isDeviceTablet: context => context.isDeviceTablet === true,
  },

  services: {
    fetchTrips: () => fetchData('trips'),
  },
})
