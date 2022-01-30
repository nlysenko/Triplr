import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabletContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  tripList: {
    flex: 1,
  },

  tabletTripList: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  tripListItem: {
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    paddingTop: 23,
    paddingBottom: 19,
    backgroundColor: '#fff',
  },

  tripListItemActive: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 23,
    borderRadius: 7,
    paddingBottom: 19,
    backgroundColor: '#e6e6e7',
  },

  tripDetails: {
    flex: 2,
  },

  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
