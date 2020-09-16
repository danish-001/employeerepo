import { call, put } from 'redux-saga/effects'
import {
  EMPLOYEE_DATA_CREATED,
  EMPLOYEE_DATA_UPDATE,
  EMPLOYEE_DATA_FETCHED,
} from '../constants'

import Request from '../../../api/request'

export function* employeeSaga() {
  // try {
  //   const options = {
  //     path: 'employees',
  //   }
  //   const data = yield call([Request, 'get'], options)
  //   yield put({ type: EMPLOYEE_DATA_FETCHED }, data)
  // } catch (error) {
  //   console.log('error', error)
  // }
}
