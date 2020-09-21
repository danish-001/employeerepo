import * as types from '../constants'
import { SAVE_EMPLOYEE } from '../../EmployeeDetails/constants'

const initialState = {
  employees: [],
}

const homeReducer = (state = { initialState }, action) => {
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
        // id: oldDetail.id,
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
    default: {
      return state
    }
  }
}

export default homeReducer
