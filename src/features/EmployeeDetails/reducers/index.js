import * as types from '../constants'

const initialState = {
  createEmployeeLoading: false,
  deleteEmployeeLoading: false,
  updateEmployeeLoading: false,
  employees: [],
}

const employeeDetail = (state = initialState, action) => {
  switch (action.type) {
    case types.SPINNER: {
      return {
        ...state,
        createEmployeeLoading: action.payload.createEmployeeLoading,
        deleteEmployeeLoading: action.payload.deleteEmployeeLoading,
        updateEmployeeLoading: action.payload.updateEmployeeLoading,
      }
    }

    case types.SHOW_EMPLOYEE: {
      return {
        ...state,
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default employeeDetail
