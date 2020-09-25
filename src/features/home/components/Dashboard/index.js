import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import ListItem from '../../../../components/ListItem'
import { MaterialIcons } from '@expo/vector-icons'
import Loader from '../../../../components/Loader/index'
import styles from './styles'
import Searchbar from '../../../../components/Searchbar'

export class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  pullToRefresh = () => {
    getEmployees()
  }

  render() {
    const { employees, navigation, getEmployees } = this.props

    return (
      <View style={{ display: 'flex' }}>
        <View>
          <Searchbar />
        </View>
        {!employees ? (
          <Loader />
        ) : (
          <View>
            <ListItem
              item={employees ? employees : []}
              getEmployees={getEmployees}
              onPress={(defaultValues) =>
                navigation.navigate('Employee-Details', { defaultValues })
              }
              style={{ flex: 9 }}
            />
          </View>
        )}
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
