/**
 *
 * BottomBar
 *
 */

import { View, Image } from 'react-native'

import { styles } from './styles'

export function BottomBar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homeScreenIcon}
        source={require('assets/img/home-enabled.png')}
      />
      <Image
        style={styles.searchScreenIcon}
        source={require('assets/img/icon-action-search-24-px.png')}
      />
      <Image
        style={styles.mapsScreenIcon}
        source={require('assets/img/icon-maps-layers-24-px.png')}
      />
      <Image
        style={styles.profileScreenIcon}
        source={require('assets/img/profile-active.png')}
      />
    </View>
  )
}
