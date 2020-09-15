import { combineReducers } from 'redux'
import employeeReducer from './globalReducers'

const reducer = combineReducers({
  employeeReducer,
})

export default reducer
