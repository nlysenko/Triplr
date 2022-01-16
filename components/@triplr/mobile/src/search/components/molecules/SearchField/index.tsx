/**
 *
 * SearchField
 *
 */

import { View, TextInput, Image } from 'react-native'

import { styles } from './styles'

interface Props {
  value: string
  onSearchFieldChange: any
}

export function SearchField({ value, onSearchFieldChange }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput
          style={styles.search}
          placeholderStyle={styles.searchPlaceholder}
          onChangeText={text => onSearchFieldChange(text)}
          placeholder="Type any keywords to search"
          inlineImagePadding={2}
          underlineColorAndroid="transparent"
          value={value}
        />

        <Image source={require('assets/img/search.png')} style={styles.icon} />
      </View>
    </View>
  )
}
