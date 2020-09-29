import { StyleSheet } from 'react-native'
import { isIPhoneX } from '../../constants/helper'
import Colors from '../../constants/Color'

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: Colors.Black,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: isIPhoneX() ? 20 : 17,
    textAlign: 'center',
  },
  buttonContainer: { paddingHorizontal: 30 },
})

export default styles
