import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../../components/Dashboard'
import * as action from '../../actions'

const mapStateToProps = ({ home }) => ({
  employees: home.employees,
})

const mapDispatchToProps = {
  getEmployees: action.getEmployees,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
