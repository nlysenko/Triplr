import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  goBackButton: {
    padding: 4,
    width: 86,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#d5d1ff',
  },

  goBack: {
    fontFamily: 'Metropolis-Medium',
    fontSize: 18,
    color: '#7365ff',
  },

  trip: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  photo: {
    height: 300,
    borderRadius: 7,
    overflow: 'hidden',
  },

  tripName: {
    color: '#373737',
    textAlign: 'center',
    fontFamily: 'Metropolis-Bold',
    fontSize: 21,
  },

  tripDuration: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
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

  errorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorMessage: {
    fontFamily: 'Metropolis-Medium',
    fontSize: 16,
    color: '#e01032',
  }
})
