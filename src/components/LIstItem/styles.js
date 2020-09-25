import { StyleSheet } from 'react-native'
import { isIPhoneX } from '../../constants/helper'
import Colors from '../../constants/Color'

export const getRandomColor = () => {
  return (
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')'
  )
}

const styles = StyleSheet.create({
  // card: {
  //   borderRadius: 6,
  //   elevation: 3,
  //   backgroundColor: '#fff',
  //   shadowOffset: { width: 1, height: 1 },
  //   shadowColor: '#333',
  //   shadowOpacity: 0.3,
  //   shadowRadius: 2,
  //   marginVertical: 8,
  //   marginHorizontal: 2,
  // },
  // cardContent: {
  //   marginHorizontal: 18,
  //   marginVertical: 10,
  // },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  aliasMainView: {
    flex: 1.5,
  },
  alianInternalView: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aliasText: { fontSize: 22, color: '#fff' },
  employeeDataView: { flex: 8.5, margin: 12, paddingLeft: 18 },
  employeeName: { fontSize: 27, fontWeight: '500', letterSpacing: 1.5 },
  partitionView: {
    borderWidth: isIPhoneX() ? 0.7 : 0.5,
    flex: 1,
    flexDirection: 'column',
    borderColor: Colors.lightGray,
    marginHorizontal: 20,
  },
  employeeSalary: {
    fontSize: 18,
  },
})

export default styles
