import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  top: {
    paddingTop: 53,
    paddingHorizontal: 20,
    paddingBottom: 23,
  },

  tripItemWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 23,
  },

  tabBarWrapper: {
    paddingHorizontal: 20,
    paddingTop: 11,
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
