import { SHOW_EMPLOYEE_DETAILS } from '../constants'

export const employeeDetails = (payload = {}) => ({
  type: SHOW_EMPLOYEE_DETAILS,
  payload,
})
