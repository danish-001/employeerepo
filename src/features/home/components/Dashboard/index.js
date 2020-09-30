import React, { Component } from 'react'
import ListItem from '../../../../components/ListItem'
import { SmartLoader } from '../../../../components/Loader/index'
import { Body, AddButton, PlusIcon } from './styles'

export default class Dashboard extends Component {
  componentDidMount() {
    const { getEmployees } = this.props
    getEmployees()
  }

  pullToRefresh = () => {
    getEmployees()
  }

  render() {
    const { employees, navigation, getEmployees } = this.props

    return (
      <Body>
        {!employees ? (
          <SmartLoader />
        ) : (
          <ListItem
            item={employees ? employees : []}
            getEmployees={getEmployees}
            onPress={(defaultValues) =>
              navigation.navigate('Employee-Details', { defaultValues })
            }
            searchFields={['employee_name', 'employee_salary', 'employee_age']}
          />
        )}
        <AddButton
          onPress={() => navigation.navigate('Employee-Details')}
          activeOpacity={0.9}
        >
          <PlusIcon name="add" size={44} />
        </AddButton>
      </Body>
    )
  }
}
