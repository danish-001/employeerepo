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
      }
    }

    case types.DELETE_SPINNER: {
      return {
        ...state,
        deleteEmployeeLoading: action.payload.deleteEmployeeLoading,
      }
    }

    case types.UPDATE_SPINNER: {
      return {
        ...state,
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
