import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

class Searchbar extends Component {
  state = {
    search: '',
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={(search) => this.setState({ search })}
        />
        <View style={styles.border} />
      </View>
    )
  }
}

export default Searchbar
