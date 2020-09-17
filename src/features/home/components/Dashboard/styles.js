import { StyleSheet } from 'react-native'
import { Directions } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 8,
    marginHorizontal: 2,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  buttonAddEmployee: {
    // flex: 1,
    position: 'absolute',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'red',
  },
})

export default styles
