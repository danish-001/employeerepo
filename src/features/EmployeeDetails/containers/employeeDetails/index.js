import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './validation'
import EmployeeDetails from '../../components/EmployeeDetails'
import { createEmployee } from '../../actions/index'
import employeeDetail from '../../reducers'

const mapStateToProps = ({ employee }) => {
  return {
    loading: employee.createEmployeeLoading,
  }
}

const mapDispatchToProps = {
  createEmployee,
}

const employeeForm = reduxForm({
  form: 'employeeForm',
  validate,
})(EmployeeDetails)

export default connect(mapStateToProps, mapDispatchToProps)(employeeForm)
