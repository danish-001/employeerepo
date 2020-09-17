import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import home from '../features/home/reducers'

const reducer = combineReducers({
  form,
  home,
})

export default reducer
