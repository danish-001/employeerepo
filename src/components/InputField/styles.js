import { StyleSheet } from 'react-native'
import Colors from '../../constants/Color'
import styled from 'styled-components'

const TextInputContainer = styled.View``

const ErrorText = styled.Text`
  color: crimson;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 2px;
  text-align: center;
`

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
})

export { styles, TextInputContainer, ErrorText }
