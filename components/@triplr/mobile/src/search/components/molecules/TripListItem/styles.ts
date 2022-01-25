import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  photo: {
    height: 149,
    borderRadius: 7,
    overflow: 'hidden',
  },

  tripName: {
    paddingTop: 26,
    color: '#373737',
    fontFamily: 'Metropolis-Bold',
    fontSize: 21,
  },

  tripDuration: {
    paddingTop: 10,
    flexDirection: 'row',
  },

  tripDate: {
    color: '#7a7a7a',
    fontSize: 15,
    fontFamily: 'Metropolis-Medium',
    letterSpacing: 0.4,
    lineHeight: 22,
  },

  tab: {
    paddingHorizontal: 10,
  },
})
