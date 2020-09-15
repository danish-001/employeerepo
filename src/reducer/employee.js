import * as types from './index'
import { ADD_EMPLOYEE } from '..'

const initialState = {}

const employeeReducer = (state = { initialState }, action) => {
  switch (action.types) {
    case ADD_EMPLOYEE:
      return {
        ...state,
      }
    default:
      return { ...state }
  }
}

export default employeeReducer
