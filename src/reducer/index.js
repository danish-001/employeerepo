import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import home from '../features/home/reducers'
import employee from '../features/EmployeeDetails/reducers'

const reducer = combineReducers({
  form,
  home,
  employee,
})

export default reducer
