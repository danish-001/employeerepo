import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {
  users: Array<any>,
  editReview: Function,
  navigation: any,
}
export class EmployeeDetails extends Component<Props> {
  render() {
    const { users, editReview, navigation } = this.props
    return (
      <View>
        <Text> Eadsfadsfadsfads </Text>
      </View>
    )
  }
}

export default EmployeeDetails
