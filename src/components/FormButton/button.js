import React from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import styles from './styles'

const flatButton = ({ text, onPress, loading, backgroundColor = '#000' }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={[styles.button, { backgroundColor: backgroundColor }]}>
        {!loading ? (
          <Text style={styles.buttonText}>{text}</Text>
        ) : (
          <ActivityIndicator size="small" />
        )}
      </View>
    </TouchableOpacity>
  )
}
export default flatButton
