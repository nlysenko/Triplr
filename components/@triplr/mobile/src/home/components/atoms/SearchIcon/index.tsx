/**
 *
 * SearchIcon
 *
 */

import { Image } from 'react-native'

import { styles } from './styles'

interface Props {
  isActive: boolean
}

export function SearchIcon({ isActive }: Props) {
  return isActive ? (
    <Image
      style={styles.icon}
      source={require('assets/img/search-active.png')}
    />
  ) : (
    <Image style={styles.icon} source={require('assets/img/search.png')} />
  )
}
