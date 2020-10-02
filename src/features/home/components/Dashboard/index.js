import React, { Component } from "react";
import { ListItem, SmartLoader } from "@/components";
import { Body, AddButton, PlusIcon } from "./styles";

type IProps = {
    getEmployees: Function,
    navigation: any,
    employees: Array<any>
};
export default class Dashboard extends Component <IProps> {
    componentDidMount() {
        const { getEmployees } = this.props;
        getEmployees();
    }

    pullToRefresh = () => {
        getEmployees();
    };

    render() {
        const { employees, navigation, getEmployees } = this.props;

        return (
            <Body>
                {!employees ? (
                    <SmartLoader />
                ) : (
                    <ListItem
                        item={employees ? employees : []}
                        getEmployees={getEmployees}
                        onPress={(defaultValues) =>
                            navigation.navigate("Employee-Details", {
                                defaultValues,
                            })
                        }
                        searchFields={[
                            "employee_name",
                            "employee_salary",
                            "employee_age",
                        ]}
                    />
                )}
                <AddButton
                    onPress={() => navigation.navigate("Employee-Details")}
                    activeOpacity={0.9}
                >
                    <PlusIcon name="add" size={44} />
                </AddButton>
            </Body>
        );
    }
}
