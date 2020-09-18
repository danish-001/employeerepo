import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Text } from 'react-native'
import { Field, change } from 'redux-form'
import InputField from '../../../../components/InputField/index'
import FlatButton from '../../../../components/FormButton/button'
import styles from './styles'

type Props = {
  users: Array<any>,
  editReview: Function,
  navigation: any,
  handleSubmit: Function,
  defaultValues: any,
}
export class EmployeeDetails extends Component<Props> {
  componentDidMount() {
    const { route, dispatch } = this.props
    if (route.params) {
      const defaultValues = route.params.defaultValues

      if (defaultValues) {
        dispatch(change('employeeForm', 'id', defaultValues.id))
        dispatch(
          change('employeeForm', 'employeeName', defaultValues.employee_name)
        )
        dispatch(
          change(
            'employeeForm',
            'employeeSalary',
            defaultValues.employee_salary
          )
        )
        dispatch(
          change('employeeForm', 'employeeAge', defaultValues.employee_age)
        )
      }
    }
  }

  onSubmit = (values) => {
    console.log({ values })
    // craterEmployee({ params: values })
  }

  render() {
    const { handleSubmit, defaultValues } = this.props

    return (
      <View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Text style={styles.inputTitle}>Employee Name</Text>
              <View>
                <Field
                  name="employeeName"
                  component={InputField}
                  placeholder="Name"
                />
              </View>
              <Text style={styles.inputTitle}>Employee Salary</Text>
              <View>
                <Field
                  multiline
                  name="employeeSalary"
                  component={InputField}
                  placeholder="Salary (in Rupees)"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.inputTitle}>Employee Age</Text>
              <View>
                <Field
                  name="employeeAge"
                  component={InputField}
                  placeholder="Age"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <FlatButton
                  text="Submit"
                  onPress={handleSubmit(this.onSubmit)}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

export default EmployeeDetails
