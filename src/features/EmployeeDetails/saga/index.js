import { call, put, takeLatest } from 'redux-saga/effects'
import {
  CREATE_EMPLOYEE,
  EMPLOYEE_DATA_UPDATE,
  EMPLOYEE_DATA_FETCHED,
} from '../constants'

import Request from '../../../api/request'
import { spinner } from '../actions'

export function* createEmployee(payloadData) {
  try {
    yield put(spinner({ createEmployeeLoading: true }))

    const options = {
      path: 'create',
      body: payloadData.payload.params,
    }

    const response = yield call([Request, 'post'], options)

    if (response.status === 'success') {
      payloadData.payload.navigation.goBack()
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    yield put(spinner({ createEmployeeLoading: false }))
  }
}

export function* employeeSaga() {
  yield takeLatest(CREATE_EMPLOYEE, createEmployee)
}
