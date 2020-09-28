import React, { useState, useEffect } from 'react'
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
import { useSafeArea } from 'react-native-safe-area-context'

function ListItem({ item, onPress, getEmployees }) {
  const [searchText, setSearchText] = useState(null)
  const [data, setData] = useState(null)
  const [found, setFound] = useState(true)
  const [employeeList, setEmployeeList] = useState([])
  const [error, setError] = useState(null)

  const employeeSearchBar = () => {
    return (
      <SearchBar
        placeholder="Search Employee"
        lightTheme
        round
        editable={true}
        value={searchText}
        onChangeText={(text) => searchEmployee(text)}
      />
    )
  }

  const getData = () => {
    getEmployees()
  }

  const searchEmployee = (searchTxt) => {
    if (searchTxt) {
      const newData = item.filter((items) => {
        console.log(items)
        const itemData = items.employee_name
          ? items.employee_name.toLowerCase()
          : ''.toLowerCase()
        const textData = searchTxt.toLowerCase()
        return itemData.indexOf(textData) > -1
      })
      console.log(newData)
      setEmployeeList(newData)

      setSearchText(searchTxt)
    } else {
      setEmployeeList(item)
      setSearchText(searchTxt)
    }
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
          <Button title="Reload" onPress={() => getData()} />
        </View>
      ) : (
        <View>
          <View>{employeeSearchBar()}</View>
          <FlatList
            data={employeeList.length != 0 ? employeeList : item}
            keyExtractor={(item) => item.id}
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
                    <Text style={styles.employeeName}>
                      {item.employee_name}
                    </Text>
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
        </View>
      )}
    </View>
  )
}

export default ListItem
