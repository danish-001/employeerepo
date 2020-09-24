import {
  SHOW_EMPLOYEE,
  CREATE_EMPLOYEE,
  SPINNER,
  SAVE_EMPLOYEE,
  DELETE_EMPLOYEE,
  DELETE_SPINNER,
  UPDATE_EMPLOYEE,
  SET_REMOVED_EMPLOYEE,
  UPDATE_SPINNER,
  SET_UPDATE_EMPLOYEE,
} from '../constants'

export const employeeDetails = (payload = {}) => ({
  type: SHOW_EMPLOYEE,
  payload,
})

export const createEmployee = (payload = {}) => ({
  type: CREATE_EMPLOYEE,
  payload,
})

export const spinner = (payload = {}) => ({
  type: SPINNER,
  payload,
})

export const saveEmployee = (payload = {}) => ({
  type: SAVE_EMPLOYEE,
  payload,
})

export const deleteEmployee = (payload = {}) => ({
  type: DELETE_EMPLOYEE,
  payload,
})

export const updateEmployee = (payload = {}) => ({
  type: UPDATE_EMPLOYEE,
  payload,
})

export const setUpdateEmployee = (payload = {}) => ({
  type: SET_UPDATE_EMPLOYEE,
  payload,
})

export const setRemovedEmployee = (payload = {}) => ({
  type: SET_REMOVED_EMPLOYEE,
  payload,
})
