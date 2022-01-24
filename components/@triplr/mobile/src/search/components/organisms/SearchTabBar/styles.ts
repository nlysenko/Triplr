import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginBottom: 1,
    backgroundColor: '#fff',
  },

  tabBtn: {
    width: 114,
    height: 46,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 15,
    paddingTop: 8,
  },

  labelIsActive: {
    color: '#7365ff',
    fontFamily: 'Metropolis-SemiBold',
  },

  labelIsNotActive: {
    fontFamily: 'Metropolis-Medium',
    color: '#515f66',
  },

  indicator: {
    width: 29,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#7365ff',
  },
})
