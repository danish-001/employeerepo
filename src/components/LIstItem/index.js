import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Button,
} from 'react-native'

import { SearchBar } from 'react-native-elements'

import styles, { getRandomColor } from './styles'

function ListItem({ item, onPress, getEmployees }) {
  const [searchText, setSearchText] = useState(null)
  const [data, setData] = useState([])
  const [temp, setTemp] = useState([])
  const [error, setError] = useState('')

  employeeSearchBar = () => {
    return (
      <SearchBar
        placeholder="Search Employee"
        lightTheme
        round
        editable={true}
        value={searchText}
        onChangeText={this.searchEmployee}
      />
    )
  }

  getData = () => {
    getEmployees()
  }

  searchEmployee = (searchText) => {
    setSearchText({ searchText }, () => {
      if (searchText == '') {
        setData({
          data: [...temp],
        })
        return
      }
      data = temp
        .filter((item) => {
          return item.employee_name
            .toLowerCase()
            .includes(searchText.toLowerCase())
        })
        .map(({ id, employee_name, employee_salary }) => {
          return { id, employee_name, employee_salary }
        })
    })
  }
  return (
    <View>
      {error != null ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{error}</Text>
          <Button title="Reload" onPress={this.getData} />
        </View>
      ) : (
        <FlatList
          data={item}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={this.employeeSearchBar}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                onPress={() => onPress(item)}
                style={styles.mainContainer}
              >
                <View style={styles.aliasMainView}>
                  <View
                    style={[
                      styles.alianInternalView,
                      { backgroundColor: getRandomColor() },
                    ]}
                  >
                    <Text style={styles.aliasText}>
                      {item.employee_name.charAt(0)}
                    </Text>
                  </View>
                </View>
                <View style={styles.employeeDataView}>
                  <Text style={styles.employeeName}>{item.employee_name}</Text>
                  <Text style={styles.employeeSalary}>
                    ₹ {item.employee_salary}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.partitionView}></View>
            </>
          )}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={false}
              onRefresh={() => {
                getEmployees()
              }}
            />
          }
        />
      )}
    </View>
  )
}

export default ListItem
