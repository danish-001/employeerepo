import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'

function ListItem({ item, onPress }) {
  return (
    <FlatList
      data={item}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={styles.mainContainer}
          >
            <View style={styles.aliasMainView}>
              <View style={styles.alianInternalView}>
                <Text style={styles.aliasText}>
                  {item.employee_name.charAt(0)}
                </Text>
              </View>
            </View>
            <View style={styles.employeeDataView}>
              <Text style={styles.employeeName}>{item.employee_name}</Text>
              <Text style={{ fontSize: 18 }}>₹ {item.employee_salary}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.partitionView}></View>
        </>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ListItem
