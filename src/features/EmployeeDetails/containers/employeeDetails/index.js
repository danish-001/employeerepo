import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './validation'
import EmployeeDetails from '../../components/EmployeeDetails'
import { employeeDetails } from '../../actions/index'
import employeeDetail from '../../reducers'

const mapStateToProps = (state) => {
  return {
    employee: state.employeeDetail,
  }
}

const mapDispatchToProps = {
  employeeDetails,
}

const employeeForm = reduxForm({
  form: 'employeeForm',
  validate,
})(EmployeeDetails)

export default connect(mapStateToProps, mapDispatchToProps)(employeeForm)
