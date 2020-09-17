import React, { Component } from 'react'
import { View } from 'react-native'
import ListItem from '../../../../components/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles'

export class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  // const editReview = (employee) => {
  //   editEmployee({ employee })
  //   navigation.setParams(employee)
  // }

  render() {
    const { employees, navigation } = this.props

    return (
      <View style={{ display: 'flex' }}>
        <ListItem
          item={employees ? employees : []}
          onPress={(defaultValues) =>
            navigation.navigate('Employee-Details', { defaultValues })
          }
          // style={{ flex: 9 }}
        />
        <MaterialIcons name="add" style={styles.buttonAddEmployee} size={34} />
      </View>
    )
  }
}

export default Dashboard
