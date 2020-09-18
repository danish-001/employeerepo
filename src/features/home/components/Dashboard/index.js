import React, { Component } from 'react'
import { View } from 'react-native'
import ListItem from '../../../../components/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  render() {
    const { employees, navigation, route } = this.props

    return (
      <View style={{ display: 'flex' }}>
        <ListItem
          item={employees ? employees : []}
          onPress={(defaultValues) =>
            navigation.navigate('Employee-Details', { defaultValues })
          }
          style={{ flex: 9 }}
        />
        <MaterialIcons
          name="add"
          style={styles.buttonAddEmployee}
          size={44}
          onPress={() => this.props.navigation.navigate('Employee-Details')}
        />
      </View>
    )
  }
}

export default Dashboard
