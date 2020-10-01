import { Dimensions } from 'react-native'
import { isIPhoneX } from '../../constants/helper'
import Colors from '../../constants/Color'
import styled from 'styled-components'

const { height } = Dimensions.get('window')

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

const ErrorTextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${height - 220};
`
const ErrorText = styled.Text`
  color: ${Colors.darkGray};
  font-size: 34;
  text-align: center;
  margin: 10px;
  font-weight: bold;
`

const FlatListContainer = styled.View`
  height: 91%;
`

const EmployeeDataContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
`

const AliasNameView = styled.View`
  flex: 1.5;
`

const AliasText = styled.Text`
  font-size: 22px;
  color: ${Colors.white};
`

const EmployeeDataView = styled.View`
  flex: 8.5;
  margin: 12px;
  padding-left: 18px;
`
const EmployeeName = styled.Text`
  font-size: 27px;
  font-weight: 500;
  letter-spacing: 1.5;
`

const EmployeeSalary = styled.Text`
  font-size: 18px;
`

const PartitionView = styled.View`
  border-width: ${isIPhoneX() ? 0.7 : 0.5};
  flex: 1;
  flex-direction: column;
  border-color: ${Colors.lightGray};
  margin-horizontal: 20;
`

const SearchBarContainer = styled.View``

const AliasInternalView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`

export {
  AliasInternalView,
  ErrorTextContainer,
  ErrorText,
  SearchBarContainer,
  FlatListContainer,
  EmployeeDataContainer,
  AliasNameView,
  AliasText,
  EmployeeDataView,
  EmployeeName,
  EmployeeSalary,
  PartitionView,
}
