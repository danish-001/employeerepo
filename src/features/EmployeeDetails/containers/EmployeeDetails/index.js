import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './validation'
import EmployeeDetails from '../../components/EmployeeDetails'
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from '../../actions/index'

const mapStateToProps = ({ employee }) => {
  return {
    createEmployeeLoading: employee.createEmployeeLoading,
    deleteEmployeeLoading: employee.deleteEmployeeLoading,
    updateEmployeeLoading: employee.updateEmployeeLoading,
  }
}

const mapDispatchToProps = {
  createEmployee,
  deleteEmployee,
  updateEmployee,
}

const employeeForm = reduxForm({
  form: 'employeeForm',
  validate,
})(EmployeeDetails)

export default connect(mapStateToProps, mapDispatchToProps)(employeeForm)
