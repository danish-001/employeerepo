import * as types from '../constants'

initialState = {
  employeeDetails: [],
}

const employeeDetail = (state = initialState, action) => {
  switch (action.type) {
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
