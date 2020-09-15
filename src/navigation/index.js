import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Dashboard from '../features/Employee/containers/employee/index'
import EmployeeDetails from '../features/EmployeeDetails/containers/employeeDetails/index'

const Stack = createStackNavigator()

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Employee-Details" component={EmployeeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigator
