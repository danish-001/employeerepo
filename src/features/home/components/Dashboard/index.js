import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import ListItem from '../../../../components/LIstItem'

function Dashboard({ navigation }) {
  const data = [
    {
      id: 1,
      name: 'Tiger Nixon',
      salary: '15000',
      age: '23',
    },
    {
      id: 2,
      name: 'Doris Wilder',
      salary: '13000',
      age: '23',
    },
    {
      id: 3,
      name: 'Will Smith',
      salary: '13500',
      age: '23',
    },
    {
      id: 4,
      name: 'RDJ',
      salary: '18000',
      age: '23',
    },
    {
      id: 5,
      name: 'Chris Hemsworth',
      salary: '10000',
      age: '23',
    },
    {
      id: 6,
      name: 'Mark Ruffalo',
      salary: '16000',
      age: '23',
    },
    {
      id: 7,
      name: 'Daniel Redcliff',
      salary: '13500',
      age: '23',
    },
    {
      id: 8,
      name: 'Chris Evans',
      salary: '13500',
      age: '23',
    },
    {
      id: 9,
      name: 'Micheal Keaton',
      salary: '13500',
      age: '23',
    },
    {
      id: 10,
      name: 'Shawn Mendez',
      salary: '13500',
      age: '23',
    },
  ]
  return (
    <View>
      <ListItem
        item={data}
        onPress={(item) => navigation.navigate('Employee-Details', item)}
      />
    </View>
  )
}

export default Dashboard
