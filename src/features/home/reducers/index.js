import * as types from '../constants'

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
    default: {
      return state
    }
  }
}

export default homeReducer
