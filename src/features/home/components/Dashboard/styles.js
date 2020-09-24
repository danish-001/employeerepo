import { StyleSheet } from 'react-native'
import Colors from '../../../../constants/Color'

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: Colors.white,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Colors.lightGray,
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
    color: Colors.white,
  },
  buttonContainer: {
    width: 74,
    height: 74,
    borderRadius: 74,
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
  },
})

export default styles
