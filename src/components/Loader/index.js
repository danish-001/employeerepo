import React from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
import styles from './styles'

const SmartLoader = (props) => {
  const { isLoading, ...attributes } = props

  return (
    <Modal
      transparent
      animationType={'none'}
      visible={isLoading}
      onRequestClose={() => {
        console.log('Noop')
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorHolder}>
          <ActivityIndicator animating={isLoading} size="large" />
        </View>
      </View>
    </Modal>
  )
}

export default SmartLoader
