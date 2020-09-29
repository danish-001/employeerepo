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
  const [employeeList, setEmployeeList] = useState([])
  const [found, setFound] = useState(true)

  const employeeSearchBar = () => {
    return (
      <SearchBar
        placeholder="Search Employee"
        lightTheme
        round
        editable={true}
        value={searchText}
        onChangeText={(text) => searchEmployee(text)}
        keyboardType="default"
      />
    )
  }

  const getData = () => {
    getEmployees()
  }

  const searchEmployee = (searchTxt) => {
    if (searchTxt) {
      const newData = item.filter((items) => {
        const itemData = items.employee_name
          ? items.employee_name.toLowerCase()
          : ''.toLowerCase()
        const textData = searchTxt.toLowerCase()
        return itemData.indexOf(textData) > -1
      })
      setEmployeeList(newData)
      setSearchText(searchTxt)
      setFound(newData.length !== 0)
    } else {
      setEmployeeList([])
      setSearchText(searchTxt)
      setFound(true)
    }
  }

  const noEmployeeFound = () => {
    return (
      <View style={styles.errorTextContainer}>
        <Text style={styles.errorText}>{`No results for "${searchText}"`}</Text>
      </View>
    )
  }

  return (
    <>
      <View>{employeeSearchBar()}</View>
      <View style={{ height: '91%' }}>
        <FlatList
          data={employeeList.length !== 0 ? employeeList : found ? item : []}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={noEmployeeFound}
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
                      { backgroundColor: item.color },
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
              // colors={['#9Bd35A', '#689F38']}
              refreshing={false}
              onRefresh={() => {
                getEmployees()
              }}
            />
          }
        />
      </View>
    </>
  )
}

export default ListItem
