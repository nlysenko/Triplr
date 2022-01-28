/**
 *
 * BackButton
 *
 */

import { Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface Props {
  onButtonPress: any
}

export function BackButton({ onButtonPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      activeOpacity={1}
      onPress={onButtonPress}
    >
      <Image
        style={styles.backArrowIcon}
        source={require('assets/img/arrow-backward.png')}
      />
    </TouchableOpacity>
  )
}
