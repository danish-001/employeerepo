import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Dashboard from '../features/home/containers/Dashboard'
import EmployeeDetails from '../features/EmployeeDetails/containers/EmployeeDetails/index'
import Colors from '../constants/Color'

const Stack = createStackNavigator()

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerStyle: {
              backgroundColor: Colors.darkGray,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 28,
            },
          }}
        />
        <Stack.Screen
          name="Employee-Details"
          component={EmployeeDetails}
          options={{
            title: 'Employee Details',
            headerStyle: {
              backgroundColor: Colors.darkGray,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigator
