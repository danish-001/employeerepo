import React, { Component, refs } from 'react'
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
} from 'react-native'
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
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      salary: '',
      age: '',
    }
  }

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

  // // // variable to hold the references of the textfields
  // // inputs = {}
  // // // function to focus the field
  // // focusTheField = (id) => {
  // //   this.inputs[id].focus()
  // // }

  onSubmit = (values) => {
    const { createEmployee, navigation } = this.props
    createEmployee({ params: values, navigation })
    // craterEmployee({ params: values })
  }

  render() {
    const { handleSubmit, defaultValues, loading } = this.props

    const { name, salary, age } = this.state

    return (
      <View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Text style={styles.inputTitle}>Employee Name</Text>
              <View>
                {/* <TextInput
                  ref={'nameRef'}
                  value={name}
                  autoFocus={true}
                  style={{
                    height: 44,
                    marginHorizontal: 10,
                    padding: 10,
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onChange={(name) => {
                    this.setState({ name: name })
                  }}
                  onSubmitEditing={() => {
                    this.refs.salaryRef.focus()
                  }}
                ></TextInput> */}
                <Field
                  ref={'nameRef'}
                  name="name"
                  component={InputField}
                  placeholder="Name"
                  value={name}
                  autoFocus={true}
                  onChange={(name) => {
                    this.setState({ name: name })
                  }}
                />
              </View>
              <Text style={styles.inputTitle}>Employee Salary</Text>
              <View>
                <Field
                  multiline
                  ref={'salaryRef'}
                  name="salary"
                  component={InputField}
                  placeholder="Salary(in Rupees)"
                  keyboardType="numeric"
                  value={salary}
                  onChange={(salary) => this.setState({ salary: salary })}
                />
                {/* <TextInput
                  ref={'salaryRef'}
                  value={name}
                  style={{
                    height: 44,
                    marginHorizontal: 10,
                    padding: 10,
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onChange={(salary) => {
                    this.setState({ salary: salary })
                  }}
                  onSubmitEditing={() => {
                    this.refs.ageRef.focus()
                  }}
                ></TextInput> */}
              </View>
              <Text style={styles.inputTitle}>Employee Age</Text>
              <View>
                <Field
                  name="age"
                  ref={'ageRef'}
                  component={InputField}
                  placeholder="Age"
                  keyboardType="numeric"
                  value={age}
                  onChange={(age) => this.setState({ age: age })}
                />
                {/* <TextInput
                  ref={'ageRef'}
                  value={age}
                  style={{
                    height: 44,
                    marginHorizontal: 10,
                    padding: 10,
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  onChange={(age) => {
                    this.setState({ age: age })
                  }}
                  onSubmitEditing={() => {
                    alert('ok')
                  }}
                ></TextInput> */}
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
