import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE,
} from "../constants";
import Request from "@/api/request";
import {
    spinner,
    saveEmployee,
    setRemovedEmployee,
    setUpdateEmployee,
} from "../actions";

export function* createEmployee(payloadData) {
    try {
        yield put(spinner({ createEmployeeLoading: true }));

        const options = {
            path: "create",
            body: payloadData.payload.params,
        };

        const response = yield call([Request, "post"], options);

        if (response.status === "success") {
            yield put(saveEmployee({ employee: payloadData.payload.params }));

            payloadData.payload.onSuccess();
        }
    } catch (error) {
        console.log("error", error);
    } finally {
        yield put(spinner({ createEmployeeLoading: false }));
    }
}

export function* deleteEmployeeAt(payloadData) {
    try {
        yield put(spinner({ deleteEmployeeLoading: true }));

        const options = {
            path: `delete/${payloadData.payload.params.id}`,
        };

        const response = yield call([Request, "delete"], options);

        if ((response.status = "success")) {
            yield put(setRemovedEmployee({ employee: payloadData.payload }));
            payloadData.payload.onSuccess();
        }
    } catch (error) {
        console.log("error", error);
    } finally {
        yield put(spinner({ deleteEmployeeLoading: false }));
    }
}

export function* updateEmployeeAt(payloadData) {
    try {
        yield put(spinner({ updateEmployeeLoading: true }));
        const options = {
            path: `update/${payloadData.payload.params.id}`,
            body: payloadData.payload.params,
        };

        const response = yield call([Request, "put"], options);

        if (response.status === "success") {
            yield put(setUpdateEmployee({ employee: response.data }));
            payloadData.payload.onSuccess();
        }
    } catch (error) {
        console.log("error", error);
    } finally {
        yield put(spinner({ updateEmployeeLoading: false }));
    }
}

export function* employeeSaga() {
    yield takeLatest(CREATE_EMPLOYEE, createEmployee);
    yield takeLatest(DELETE_EMPLOYEE, deleteEmployeeAt);
    yield takeEvery(UPDATE_EMPLOYEE, updateEmployeeAt);
}
