import React, { Component, useRef } from 'react'
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

    // const ref_name = useRef()
    // const ref_salary = useRef()
    // const ref_age = useRef()

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
    // craterEmployee({ params: values })
  }

  render() {
    const { handleSubmit, defaultValues, loading } = this.props

    return (
      <View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Text style={styles.inputTitle}>Employee Name</Text>
              <View>
                <Field name="name" component={InputField} placeholder="Name" />
              </View>
              <Text style={styles.inputTitle}>Employee Salary</Text>
              <View>
                <Field
                  multiline
                  name="salary"
                  component={InputField}
                  placeholder="Salary (in Rupees)"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.inputTitle}>Employee Age</Text>
              <View>
                <Field
                  name="age"
                  component={InputField}
                  placeholder="Age"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <FlatButton
                  text="Submit"
                  onPress={handleSubmit(this.onSubmit)}
                  loading={loading}
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
