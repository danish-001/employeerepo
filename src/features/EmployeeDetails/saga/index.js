import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { CREATE_EMPLOYEE } from '../constants'

import Request from '../../../api/request'
import { spinner, saveEmployee } from '../actions'

export function* createEmployee(payloadData) {
  try {
    yield put(spinner({ createEmployeeLoading: true }))

    const options = {
      path: 'create',
      body: payloadData.payload.params,
    }

    // const response = yield call([Request, 'post'], options)
    yield delay(600)
    const response = {
      status: 'success',
    }
    if (response.status === 'success') {
      console.log(response)
      yield put(saveEmployee({ employee: payloadData.payload.params }))

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
