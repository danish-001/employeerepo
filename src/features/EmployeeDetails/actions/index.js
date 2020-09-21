import {
  SHOW_EMPLOYEE,
  CREATE_EMPLOYEE,
  SPINNER,
  SAVE_EMPLOYEE,
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
