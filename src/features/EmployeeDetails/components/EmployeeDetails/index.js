import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Text } from 'react-native'
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
              <Text
                style={{
                  letterSpacing: 1,
                  // textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  paddingLeft: 10,
                  paddingVertical: 10,
                }}
              >
                Employee Name
              </Text>
              <View>
                <Field
                  name="employee-name"
                  component={InputField}
                  placeholder="Name"
                />
              </View>
              <Text
                style={{
                  letterSpacing: 1,
                  // textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  paddingLeft: 10,
                  paddingVertical: 10,
                }}
              >
                {' '}
                Employee Salary
              </Text>
              <View>
                <Field
                  multiline
                  name="employee-salary"
                  component={InputField}
                  placeholder="Salary (in Rupees)"
                  keyboardType="numeric"
                />
              </View>
              <Text
                style={{
                  letterSpacing: 1,
                  // textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  paddingLeft: 10,
                  paddingVertical: 10,
                }}
              >
                {' '}
                Employee Age
              </Text>
              <View>
                <Field
                  name="employee-age"
                  component={InputField}
                  placeholder="Age"
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
