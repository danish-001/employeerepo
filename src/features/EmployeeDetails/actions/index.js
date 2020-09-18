import { SHOW_EMPLOYEE_DETAILS, CREATE_EMPLOYEE, SPINNER } from '../constants'

export const employeeDetails = (payload = {}) => ({
  type: SHOW_EMPLOYEE_DETAILS,
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
