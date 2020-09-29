import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'

import { SearchBar } from 'react-native-elements'
import styles from './styles'

function ListItem({ item, onPress, getEmployees, searchFields }) {
  const [searchText, setSearchText] = useState(null)
  const [employeeList, setEmployeeList] = useState([])
  const [found, setFound] = useState(true)
  const [loading, toggleLoading] = useState(false)

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
        showLoading={loading}
      />
    )
  }

  const searchEmployee = (searchTxt) => {
    toggleLoading(true)
    if (searchTxt) {
      const textData = searchTxt.toLowerCase()

      const newData = item.filter((items) => {
        let isFind = false

        searchFields.filter((searchItem) => {
          const itemData = items[searchItem]
            ? items[searchItem].toLowerCase()
            : ''.toLowerCase()

          if (itemData.indexOf(textData) > -1) {
            isFind = true
          }
        })

        return isFind
      })

      setEmployeeList(newData)
      setSearchText(searchTxt)
      setFound(newData.length !== 0)
    } else {
      setEmployeeList([])
      setSearchText(searchTxt)
      setFound(true)
    }

    setTimeout(() => {
      toggleLoading(false)
    }, 500)
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
