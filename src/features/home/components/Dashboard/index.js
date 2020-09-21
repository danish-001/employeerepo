import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import ListItem from '../../../../components/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles'

export class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  render() {
    const { employees, navigation } = this.props

    return (
      <View style={{ display: 'flex' }}>
        <ListItem
          item={employees ? employees : []}
          onPress={(defaultValues) =>
            navigation.navigate('Employee-Details', { defaultValues })
          }
          style={{ flex: 9 }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Employee-Details')}
          activeOpacity={0.9}
        >
          <MaterialIcons
            name="add"
            style={styles.buttonAddEmployee}
            size={44}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Dashboard
