import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Text } from 'react-native'
import { Field, change } from 'redux-form'
import InputField from '../../../../components/InputField/index'
import FlatButton from '../../../../components/FormButton/button'
import styles from './styles'

type Props = {
  users: Array<any>,
  navigation: any,
  handleSubmit: Function,
  defaultValues: any,
}
export class EmployeeDetails extends Component<Props> {
  componentDidMount = () => {
    const { route, dispatch } = this.props

    if (route.params) {
      const defaultValues = route.params.defaultValues

      if (defaultValues) {
        dispatch(change('employeeForm', 'id', defaultValues.id))
        dispatch(change('employeeForm', 'name', defaultValues.employee_name))
        dispatch(
          change('employeeForm', 'salary', defaultValues.employee_salary)
        )
        dispatch(change('employeeForm', 'age', defaultValues.employee_age))
      }
    }
  }

  onSubmit = (values) => {
    const { createEmployee, navigation } = this.props
    createEmployee({ params: values, navigation })
  }

  updateEmployee = (id) => {
    const { updateEmployee, navigation } = this.props
    updateEmployee({ params: id, navigation })
  }

  deleteEmployee = (id) => {
    const { deleteEmployee, navigation } = this.props
    deleteEmployee({ params: id, navigation })
  }

  render() {
    const {
      handleSubmit,
      createEmployeeLoading,
      deleteEmployeeLoading,
      updateEmployeeLoading,
      route,
    } = this.props

    const empRef = {}
    return (
      <View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Text style={styles.inputTitle}>Employee Name</Text>
              <View>
                <Field
                  refLink={(ref) => (empRef.name = ref)}
                  name="name"
                  component={InputField}
                  placeholder="Name"
                  autoFocus={true}
                  onSubmitEditing={() => {
                    empRef.salary.focus()
                  }}
                />
              </View>
              <Text style={styles.inputTitle}>Employee Salary</Text>
              <View>
                <Field
                  refLink={(ref) => (empRef.salary = ref)}
                  name="salary"
                  component={InputField}
                  placeholder="Salary (in Rupees)"
                  keyboardType="numeric"
                  onSubmitEditing={() => {
                    empRef.age.focus()
                  }}
                />
              </View>
              <Text style={styles.inputTitle}>Employee Age</Text>
              <View>
                <Field
                  name="age"
                  refLink={(ref) => (empRef.age = ref)}
                  component={InputField}
                  placeholder="Age"
                  keyboardType="numeric"
                  onSubmitEditing={() => {
                    alert('value submitted !!!')
                  }}
                />
              </View>
              <View>
                {route.params && route.params.defaultValues ? (
                  <View style={styles.dualButtonContainer}>
                    <View style={{ flex: 1 }}>
                      <FlatButton
                        text="Update"
                        onPress={handleSubmit(this.updateEmployee)}
                        loading={updateEmployeeLoading}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <FlatButton
                        text="Delete"
                        onPress={handleSubmit(this.deleteEmployee)}
                        loading={deleteEmployeeLoading}
                        backgroundColor="orangered"
                      />
                    </View>
                  </View>
                ) : (
                  <FlatButton
                    text="Submit"
                    onPress={handleSubmit(this.onSubmit)}
                    loading={createEmployeeLoading}
                  />
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

export default EmployeeDetails
