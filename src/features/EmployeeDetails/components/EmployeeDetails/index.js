import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import InputField from '../../../../components/InputField/index'
import { Field, reduxForm, change } from 'redux-form'
import FlatButton from '../../../../components/FormButton/button'
import styles from './styles'

type Props = {
  users: Array<any>,
  editReview: Function,
  navigation: any,
}
export class EmployeeDetails extends Component<Props> {
  render() {
    const { users, editReview, navigation } = this.props
    return (
      <View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <View>
                <Field
                  name="employee-name"
                  component={InputField}
                  placeholder="Employee Name"
                />
              </View>
              <View>
                <Field
                  multiline
                  name="employee-salary"
                  component={InputField}
                  placeholder="Salary in Rupees"
                />
              </View>
              <View>
                <Field
                  name="employee-age"
                  component={InputField}
                  placeholder="Employee Age"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <FlatButton
                  text="Submit"
                  onPress={() => console.log('button pressed')}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

export default reduxForm({
  form: 'employeeForm',
})(EmployeeDetails)
