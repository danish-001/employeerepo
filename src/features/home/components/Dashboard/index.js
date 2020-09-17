import React, { Component } from 'react'
import { View } from 'react-native'
import ListItem from '../../../../components/ListItem'

export class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  render() {
    const { employees, navigation } = this.props

    return (
      <View>
        <ListItem
          item={employees ? employees : []}
          onPress={(defaultValues) =>
            navigation.navigate('Employee-Details', defaultValues)
          }
        />
      </View>
    )
  }
}

export default Dashboard
