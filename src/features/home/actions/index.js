import { GET_EMPLOYEES, SAVE_EMPLOYEES } from '../constants'

export const getEmployees = (payload = {}) => ({
  type: GET_EMPLOYEES,
  payload,
})

export const saveEmployees = (payload = {}) => ({
  type: SAVE_EMPLOYEES,
  payload,
})
