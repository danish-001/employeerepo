import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

function ListItem({ item, onPress }) {
  return (
    <FlatList
      data={item}
      style={{}}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 6,
            }}
          >
            <View
              style={{
                flex: 1.5,
              }}
            >
              <View
                style={{
                  backgroundColor: 'orange',
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginLeft: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 20, color: 'white' }}>
                  {item.name.charAt(0)}
                </Text>
              </View>
            </View>
            <View style={{ flex: 8.5, margin: 12, paddingLeft: 18 }}>
              <Text
                style={{ fontSize: 27, fontWeight: '600', letterSpacing: 1.5 }}
              >
                {item.name}
              </Text>
              <Text style={{ fontSize: 18 }}>₹ {item.salary}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 0.4,

              flex: 1,
              flexDirection: 'column',
              borderColor: 'gray',
              marginHorizontal: 20,
            }}
          ></View>
        </>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ListItem