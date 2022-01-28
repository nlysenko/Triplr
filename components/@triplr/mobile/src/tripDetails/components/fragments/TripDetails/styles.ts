import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  top: {
    flex: 0,
    backgroundColor: '#fff',
  },

  bottom: {
    flex: 0,
    backgroundColor: '#fff',
  },

  topBar: {
    paddingTop: 35,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  tripItem: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  tabBar: {
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
