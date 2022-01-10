import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 56,
    fontSize: 20,
    color: '#161f3d',
    opacity: 0.8,
    fontFamily: 'Metropolis-SemiBold',
  },

  notificationsButton: {
    width: 24,
    height: 24,
    marginTop: 53,
  },

  notificationsIcon: {
    width: '100%',
    height: '100%',
  }
})
