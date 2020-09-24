import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import styles, { getRandomColor } from './styles'

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
          refreshing={true}
          onRefresh={() => {}}
        />
      }
    />
  )
}

export default ListItem
