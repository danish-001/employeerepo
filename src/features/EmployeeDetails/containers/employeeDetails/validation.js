export const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Employee name required'
  }

  if (!values.salary) {
    errors.salary = 'Please enter a salary'
  } else if (isNaN(Number(values.salary))) {
    errors.salary = 'Salary must be a number'
  }

  if (!values.age) {
    errors.age = 'Please enter Employee age'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Age must be a number'
  } else if (Number(values.age) <= 13) {
    errors.age = 'You are too young for this job'
  } else if (Number(values.age) >= 65) {
    errors.age = 'You are too old for this job'
  }

  return errors
}
