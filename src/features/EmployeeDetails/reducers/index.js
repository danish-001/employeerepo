import * as types from '../constants'

initialState = {
  createEmployeeLoading: false,
}

const employeeDetail = (state = initialState, action) => {
  switch (action.type) {
    case types.SPINNER: {
      return {
        ...state,
        createEmployeeLoading: action.payload.createEmployeeLoading,
      }
    }

    case types.SHOW_EMPLOYEE_DETAILS: {
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
