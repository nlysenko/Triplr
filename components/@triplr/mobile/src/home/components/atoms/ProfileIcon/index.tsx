/**
 *
 * ProfileIcon
 *
 */

import { Image } from 'react-native'

import { styles } from './styles'

export function ProfileIcon() {
  return (
    <Image style={styles.icon} source={require('assets/img/profile.png')} />
  )
}
