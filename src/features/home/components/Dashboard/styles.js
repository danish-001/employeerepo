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
    flex: 1,
    position: 'absolute',
    bottom: 40,
    right: 30,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    padding: 12,
    backgroundColor: 'gray',
    color: '#fff',
  },
})

export default styles
