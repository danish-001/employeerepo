import { all } from 'redux-saga/effects'

import { homeSaga } from '../features/home/saga/index'
import { employeeSaga } from '../features/EmployeeDetails/saga/index'

export function* rootSaga() {
  yield all([homeSaga(), employeeSaga()])
}
