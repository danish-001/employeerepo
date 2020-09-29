import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

const InputField = (props) => {
  const {
    placeholder,
    meta,
    input,
    multiline,
    height,
    keyboardType,
    onSubmitEditing,
    refLink,
    autoFocus,
  } = props

  const [focus, setFocus] = useState(false)

  return (
    <View>
      <TextInput
        style={[styles.input, focus && styles.focusedInput]}
        placeholder={placeholder}
        onChange={input.onChange}
        defaultValue={input.value}
        multiline={multiline}
        height={height}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        ref={refLink}
        autoFocus={autoFocus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {meta.error && meta.submitFailed && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </View>
  )
}

export default InputField
