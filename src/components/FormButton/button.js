import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'

const flatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default flatButton
