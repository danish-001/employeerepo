import { call, put, takeLatest, delay } from 'redux-saga/effects'
import Request from '../../../api/request'
import { SAVE_EMPLOYEES, GET_EMPLOYEES } from '../constants'
import { saveEmployees } from '../actions'

function* getEmployees(payloadData) {
  try {
    const options = {
      path: 'employees',
    }
    const response = yield call([Request, 'get'], options)
    yield delay(1000)

    if (response.data) {
      yield put(saveEmployees({ employees: response.data }))
    }
  } catch (error) {
    console.log('error', error)
  }
}

export function* homeSaga() {
  yield takeLatest(GET_EMPLOYEES, getEmployees)
}
