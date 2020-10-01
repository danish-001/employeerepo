import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";

import { SearchBar } from "react-native-elements";
import {
    ErrorTextContainer,
    ErrorText,
    SearchBarContainer,
    FlatListContainer,
    EmployeeDataContainer,
    AliasNameView,
    AliasText,
    EmployeeDataView,
    EmployeeName,
    EmployeeSalary,
    PartitionView,
    AliasInternalView,
} from "./styles";

export function ListItem({ item, onPress, getEmployees, searchFields }) {
    const [searchText, setSearchText] = useState(null);
    const [employeeList, setEmployeeList] = useState([]);
    const [found, setFound] = useState(true);
    const [loading, toggleLoading] = useState(false);

    const employeeSearchBar = () => {
        return (
            <SearchBar
                placeholder="Search Employee"
                lightTheme
                round
                editable={true}
                value={searchText}
                onChangeText={(text) => searchEmployee(text)}
                keyboardType="default"
                showLoading={loading}
            />
        );
    };

    const searchEmployee = (searchTxt) => {
        toggleLoading(true);
        if (searchTxt) {
            const textData = searchTxt.toLowerCase();

            const newData = item.filter((items) => {
                let isFind = false;

                searchFields.filter((searchItem) => {
                    const itemData = items[searchItem]
                        ? items[searchItem].toLowerCase()
                        : "".toLowerCase();

                    if (itemData.indexOf(textData) > -1) {
                        isFind = true;
                    }
                });

                return isFind;
            });

            setEmployeeList(newData);
            setSearchText(searchTxt);
            setFound(newData.length !== 0);
        } else {
            setEmployeeList([]);
            setSearchText(searchTxt);
            setFound(true);
        }

        setTimeout(() => {
            toggleLoading(false);
        }, 500);
    };

    const noEmployeeFound = () => {
        return (
            <ErrorTextContainer>
                <ErrorText>{`No results for "${searchText}"`}</ErrorText>
            </ErrorTextContainer>
        );
    };

    return (
        <>
            <SearchBarContainer>{employeeSearchBar()}</SearchBarContainer>
            <FlatListContainer>
                <FlatList
                    data={
                        employeeList.length !== 0
                            ? employeeList
                            : found
                            ? item
                            : []
                    }
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={noEmployeeFound}
                    renderItem={({ item }) => (
                        <>
                            <EmployeeDataContainer
                                onPress={() => onPress(item)}
                            >
                                <AliasNameView>
                                    <AliasInternalView
                                        backgroundColor={item.color}
                                    >
                                        <AliasText>
                                            {item.employee_name.charAt(0)}
                                        </AliasText>
                                    </AliasInternalView>
                                </AliasNameView>
                                <EmployeeDataView>
                                    <EmployeeName>
                                        {item.employee_name}
                                    </EmployeeName>
                                    <EmployeeSalary>
                                        ₹ {item.employee_salary}
                                    </EmployeeSalary>
                                </EmployeeDataView>
                            </EmployeeDataContainer>
                            <PartitionView></PartitionView>
                        </>
                    )}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() => {
                                getEmployees();
                            }}
                        />
                    }
                />
            </FlatListContainer>
        </>
    );
}
