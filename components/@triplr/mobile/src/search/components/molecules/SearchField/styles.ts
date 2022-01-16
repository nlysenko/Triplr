import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 41,
    paddingBottom: 18,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  section: {
    backgroundColor: '#e6e6e7',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    height: 44,
    justifyContent: 'space-between',
  },

  search: {
    fontFamily: 'Metropolis-Medium',
    color: '#161f3d',
    fontSize: 15,
    marginLeft: 21,
    maxWidth: '75%',
  },

  searchPlaceholder: {
    opacity: 0.47,
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 21,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
})
