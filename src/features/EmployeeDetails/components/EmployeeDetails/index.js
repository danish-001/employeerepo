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
                  name="title"
                  component={InputField}
                  placeholder="ReView Title (e.g. movie / series)"
                />
              </View>
              <View>
                <Field
                  multiline
                  name="body"
                  component={InputField}
                  placeholder="Description"
                  height={140}
                />
              </View>
              <View>
                <Field
                  name="rating"
                  component={InputField}
                  placeholder="Rating (1-5)"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Field
                  name="author"
                  component={InputField}
                  placeholder="Enter Your Name"
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
