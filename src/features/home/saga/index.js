import { call, put } from 'redux-saga/effects'
import Request from '../../../api/request'
import { EMPLOYEES_DATA_FETCHED } from '../constants'

export function* homeSaga() {
  try {
    const options = {
      path: 'employees',
    }

    const data = yield call([Request, 'post'], options)
    yield put({ type: EMPLOYEES_DATA_FETCHED, data })
  } catch (error) {
    console.log('error', error)
  }
}
