export const validate = (values) => {
  const errors = {}

  if (!values.employeeName) {
    errors.employeeName = 'Employee name required'
  }

  if (!values.employeeSalary) {
    errors.employeeSalary = 'Please enter a salary'
  } else if (isNaN(Number(values.employeeSalary))) {
    errors.employeeSalary = 'Salary must be a number'
  }

  if (!values.employeeAge) {
    errors.employeeAge = 'Please enter Employee age'
  } else if (isNaN(Number(values.employeeAge))) {
    errors.employeeAge = 'Age must be a number'
  } else if (Number(values.employeeAge) <= 13) {
    errors.employeeAge = 'You are too young for this job'
  } else if (Number(values.employeeAge) >= 65) {
    errors.employeeAge = 'You are too old for this job'
  }

  return errors
}
