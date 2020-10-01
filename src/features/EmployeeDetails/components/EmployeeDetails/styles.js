import styled from 'styled-components'

const EmployeeDetailsContainer = styled.View``

const FormContainer = styled.View`
  flex: 1;
  padding: 30px;
`

const EmployeeName = styled.Text`
  letter-spacing: 1;
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
  padding-vertical: 10px;
`
const EmployeeSalary = styled.Text`
  letter-spacing: 1;
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
  padding-vertical: 10px;
`
const EmployeeAge = styled.Text`
  letter-spacing: 1;
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
  padding-vertical: 10px;
`

const ButtonContainer = styled.View``

const TextInputField = styled.View``

const DualButtonContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 0;
`
const UpdateButtonContainer = styled.View`
  flex: 1;
`

const DeleteButtonContainer = styled.View`
  flex: 1;
`

export {
  EmployeeDetailsContainer,
  FormContainer,
  EmployeeName,
  TextInputField,
  EmployeeSalary,
  EmployeeAge,
  ButtonContainer,
  DualButtonContainer,
  UpdateButtonContainer,
  DeleteButtonContainer,
}
