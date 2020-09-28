import * as types from '../constants'
import {
  SAVE_EMPLOYEE,
  SET_UPDATE_EMPLOYEE,
  SET_REMOVED_EMPLOYEE,
} from '../../EmployeeDetails/constants'
import { getRandomColor } from '../../../components/ListItem/styles'

const initialState = {
  employees: [],
}

const formatEmployeeList = (employees) => {
  if (employees) {
    const newData = []
    employees.map((_) => {
      newData.push({
        ..._,
        color: getRandomColor(),
      })
    })
    return newData
  }

  return employees
}

const homeReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case types.SAVE_EMPLOYEES: {
      return {
        ...state,
        employees: formatEmployeeList(action.payload.employees),
      }
    }

    case SAVE_EMPLOYEE: {
      const oldDetail = action.payload.employee

      const newDetail = {
        id: Math.random(),
        employee_name: oldDetail.name,
        employee_salary: oldDetail.salary,
        employee_age: oldDetail.age,
        color: getRandomColor(),
      }
      return {
        ...state,
        employees: [...[newDetail], ...state.employees],
      }
    }

    case SET_REMOVED_EMPLOYEE: {
      const data = action.payload.employee.params.id
      const filterEmployee = state.employees.filter(
        (employee) => employee.id !== data
      )

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
          const { id } = employee
          let value = employee

          if (id === newData.id) {
            value = {
              ...newData,
              color: employee.color,
            }
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
