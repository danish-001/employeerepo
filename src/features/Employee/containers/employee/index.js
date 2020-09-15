import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export class Dashboard extends Component {
  render() {
    return (
      <View style={{ display: 'flex' }}>
        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
          {' '}
          Employee Names{' '}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Employee-Details')}
        >
          <Text> Click Me</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Dashboard
