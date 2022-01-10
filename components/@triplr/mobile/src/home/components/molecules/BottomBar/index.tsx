/**
 *
 * BottomBar
 *
 */

import { View, Image } from 'react-native'

import { styles } from './styles'

export function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <Image source={require('assets/img/home-enabled.png')} />
      <Image source={require('assets/img/icon-action-search-24-px.png')} />
      <Image source={require('assets/img/icon-maps-layers-24-px.png')} />
      <Image source={require('assets/img/profile-active.png')} />
    </View>
  )
}
