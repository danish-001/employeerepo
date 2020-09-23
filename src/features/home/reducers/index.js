import * as types from '../constants'
import {
  SAVE_EMPLOYEE,
  SET_UPDATE_EMPLOYEE,
  SET_REMOVED_EMPLOYEE,
} from '../../EmployeeDetails/constants'

const initialState = {
  employees: [],
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_EMPLOYEES: {
      return {
        ...state,
        employees: action.payload.employees,
      }
    }

    case SAVE_EMPLOYEE: {
      const oldDetail = action.payload.employee

      const newDetail = {
        id: Math.random(),
        employee_name: oldDetail.name,
        employee_salary: oldDetail.salary,
        employee_age: oldDetail.age,
      }
      return {
        ...state,
        employees: [...[newDetail], ...state.employees],
      }
    }

    case SET_REMOVED_EMPLOYEE: {
      console.log('inside reducer')
      const id = action.payload
      const filterEmployee = state.employees.filter(
        (employee) => employee !== id
      )
      console.log(filterEmployee)
      return {
        ...state,
        employees: filterEmployee,
      }
    }

    case SET_UPDATE_EMPLOYEE: {
      const data = action.payload.employee

      const newData = {
        id: data.id,
        employee_name: data.name,
        employee_salary: data.salary,
        employee_age: data.age,
      }

      const employeesList = []

      if (state.employees) {
        state.employees.map((employee) => {
          console.log(employee)
          const { id } = employee
          let value = employee

          if (id === newData.id) {
            value = newData
          }
          employeesList.push(value)
        })
      }

      return {
        ...state,
        employees: employeesList,
      }
    }
    default: {
      return state
    }
  }
}

export default homeReducer
