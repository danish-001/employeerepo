import React, { Component } from 'react'
import { View } from 'react-native'
import ListItem from '../../../../components/LIstItem'

export class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  render() {
    const { employees, navigation } = this.props
    console.log({ employees })
    return (
      <View>
        <ListItem
          item={employees ? employees : []}
          onPress={(item) => navigation.navigate('Employee-Details', item)}
        />
      </View>
    )
  }
}

export default Dashboard
