import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native'
import Navigator from './src/navigation/index'
import store from './src/store'

console.disableYellowBox = true

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}
