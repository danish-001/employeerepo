import { StyleSheet } from 'react-native'
import Colors from '../../constants/Color'
import { isIPhoneX } from '../../constants/helper'

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    alignSelf: 'center',
    height: 44,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  border: {
    borderWidth: isIPhoneX() ? 0.7 : 0.5,
    flex: 1,
    flexDirection: 'column',
    borderColor: Colors.darkGray,
    marginHorizontal: 20,
  },
})

export default styles
