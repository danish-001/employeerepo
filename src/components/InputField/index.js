import React from 'react'
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
    ref,
    autoFocus,
  } = props

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChange={input.onChange}
        defaultValue={input.value}
        multiline={multiline}
        height={height}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        autoFocus={autoFocus}
      />
      {meta.error && meta.submitFailed && (
        <Text style={styles.errorText}>{meta.error}</Text>
        // <Text style={styles.warningText}>{meta.warning}</Text>
      )}
    </View>
  )
}

export default InputField
