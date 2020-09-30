import React from 'react'
import { Modal, ActivityIndicator } from 'react-native'
import { ModalBackground, ActivityIndicatorHolder } from './styles'

export const SmartLoader = (props) => {
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
      <ModalBackground>
        <ActivityIndicatorHolder>
          <ActivityIndicator animating={isLoading} size="large" />
        </ActivityIndicatorHolder>
      </ModalBackground>
    </Modal>
  )
}
