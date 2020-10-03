import React, { Component } from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { Field, change } from "redux-form";
import { InputField, FormButton } from "@/components";
import { Toast, Root } from "native-base";
import {
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
} from "./styles";

type Props = {
    users: Array<any>,
    navigation: any,
    handleSubmit: Function,
    defaultValues: any,
};
export class EmployeeDetails extends Component<Props> {
    componentDidMount = () => {
        const { route, dispatch } = this.props;

        if (route.params) {
            const defaultValues = route.params.defaultValues;

            if (defaultValues) {
                dispatch(change("employeeForm", "id", defaultValues.id));
                dispatch(
                    change("employeeForm", "name", defaultValues.employee_name)
                );
                dispatch(
                    change(
                        "employeeForm",
                        "salary",
                        defaultValues.employee_salary
                    )
                );
                dispatch(
                    change("employeeForm", "age", defaultValues.employee_age)
                );
            }
        }
    };

    onSubmit = (values) => {
        const { createEmployee, navigation } = this.props;
        createEmployee({
            params: values,
            navigation,
            onSuccess: () => {
                Toast.show({
                    text: "Employee Created Successfully",
                    duration: 2000,
                    type: "success",
                });
                setTimeout(() => {
                    navigation.goBack();
                }, 1500);
            },
        });
    };

    updateEmployee = (id) => {
        const { updateEmployee, navigation } = this.props;
        updateEmployee({
            params: id,
            navigation,
            onSuccess: () => {
                Toast.show({
                    text: "Employee Updated",
                    duration: 2000,
                    type: "warning",
                });
                setTimeout(() => {
                    navigation.goBack();
                }, 1500);
            },
        });
    };

    deleteEmployee = (id) => {
        const { deleteEmployee, navigation } = this.props;
        deleteEmployee({
            params: id,
            navigation,
            onSuccess: () => {
                Toast.show({
                    text: "Employee Deleted Successfully",
                    duration: 2000,
                    type: "danger",
                });
                setTimeout(() => {
                    navigation.goBack();
                }, 1500);
            },
        });
    };

    render() {
        const {
            handleSubmit,
            createEmployeeLoading,
            deleteEmployeeLoading,
            updateEmployeeLoading,
            route,
        } = this.props;

        const empRef = {};
        return (
            <Root>
                <EmployeeDetailsContainer>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView>
                            <FormContainer>
                                <EmployeeName>Employee Name</EmployeeName>
                                <TextInputField>
                                    <Field
                                        refLink={(ref) => (empRef.name = ref)}
                                        name="name"
                                        component={InputField}
                                        placeholder="Name"
                                        autoFocus={true}
                                        onSubmitEditing={() => {
                                            empRef.salary.focus();
                                        }}
                                    />
                                </TextInputField>
                                <EmployeeSalary>Employee Salary</EmployeeSalary>
                                <TextInputField>
                                    <Field
                                        refLink={(ref) => (empRef.salary = ref)}
                                        name="salary"
                                        component={InputField}
                                        placeholder="Salary (in Rupees)"
                                        keyboardType="numeric"
                                        onSubmitEditing={() => {
                                            empRef.age.focus();
                                        }}
                                    />
                                </TextInputField>
                                <EmployeeAge>Employee Age</EmployeeAge>
                                <TextInputField>
                                    <Field
                                        name="age"
                                        refLink={(ref) => (empRef.age = ref)}
                                        component={InputField}
                                        placeholder="Age"
                                        keyboardType="numeric"
                                    />
                                </TextInputField>
                                <ButtonContainer>
                                    {route.params &&
                                    route.params.defaultValues ? (
                                        <DualButtonContainer>
                                            <UpdateButtonContainer>
                                                <FormButton
                                                    text="Update"
                                                    onPress={handleSubmit(
                                                        this.updateEmployee
                                                    )}
                                                    loading={
                                                        updateEmployeeLoading
                                                    }
                                                />
                                            </UpdateButtonContainer>
                                            <DeleteButtonContainer>
                                                <FormButton
                                                    text="Delete"
                                                    onPress={handleSubmit(
                                                        this.deleteEmployee
                                                    )}
                                                    loading={
                                                        deleteEmployeeLoading
                                                    }
                                                    backgroundColor="orangered"
                                                />
                                            </DeleteButtonContainer>
                                        </DualButtonContainer>
                                    ) : (
                                        <FormButton
                                            text="Submit"
                                            onPress={handleSubmit(
                                                this.onSubmit
                                            )}
                                            loading={createEmployeeLoading}
                                        />
                                    )}
                                </ButtonContainer>
                            </FormContainer>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </EmployeeDetailsContainer>
            </Root>
        );
    }
}

export default EmployeeDetails;
