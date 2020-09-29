import { StyleSheet } from 'react-native'
import Colors from '../../constants/Color'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    fontSize: 18,
  },
  focusedInput: {
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
    textAlign: 'center',
  },
  warningText: {
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
    textAlign: 'center',
  },
})

export default styles
