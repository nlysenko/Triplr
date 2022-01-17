/**
 *
 * SearchInput
 *
 */

import { View, TextInput, Image } from 'react-native'

import { styles } from './styles'

interface Props {
  value?: string
  onChange: () => void
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholderStyle={styles.searchPlaceholder}
        onChangeText={text => onChange(text)}
        placeholder="Type any keywords to search"
        inlineImagePadding={2}
        underlineColorAndroid="transparent"
        returnKeyType="search"
        value={value}
      />

      <Image source={require('assets/img/search.png')} style={styles.icon} />
    </View>
  )
}
