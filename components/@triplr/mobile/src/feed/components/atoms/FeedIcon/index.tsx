/**
 *
 * FeedIcon
 *
 */

import { Image } from 'react-native'

import { styles } from './styles'

interface Props {
  isActive: boolean
}

export function FeedIcon({ isActive }: Props) {
  return isActive ? (
    <Image style={styles.icon} source={require('assets/img/feed-active.png')} />
  ) : (
    <Image style={styles.icon} source={require('assets/img/feed.png')} />
  )
}
