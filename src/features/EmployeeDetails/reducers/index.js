import * as types from '../constants'

const initialState = {
  createEmployeeLoading: false,
  deleteEmployeeLoading: false,
  updateEmployeeLoading: false,
  employees: [],
}

const employeeDetail = (state = initialState, action) => {
  switch (action.type) {
    case types.SPINNER: {
      return {
        ...state,
        createEmployeeLoading: action.payload.createEmployeeLoading,
      }
    }

    case types.DELETE_SPINNER: {
      return {
        ...state,
        deleteEmployeeLoading: action.payload.deleteEmployeeLoading,
      }
    }

    case types.UPDATE_SPINNER: {
      return {
        ...state,
        updateEmployeeLoading: action.payload.updateEmployeeLoading,
      }
    }

    case types.SHOW_EMPLOYEE: {
      return {
        ...state,
      }
    }

    case types.SET_UPDATE_EMPLOYEE: {
      const id = action.payload.id
      const filterEmployee = state.employees.filter(
        (employee) => employee.id !== id
      )

      return {
        ...state,
        employees: filterEmployee,
      }
    }

    case types.SET_UPDATE_EMPLOYEE: {
      const data = action.payload.employee

      console.log('reducer SET_UPDATE_EMPLOYEE', data)
      const employeesList = []

      if (state.employees) {
        state.employees.map((employee) => {
          const { id } = employee
          let value = employee

          if (id === data.id) {
            value = data
          }
          employeesList.push(value)
        })
      }

      return {
        ...state,
        employees: employeesList,
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default employeeDetail
