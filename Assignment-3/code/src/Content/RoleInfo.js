import React from 'react'

export const RoleInfo = ({employee}) => {
  return (
    <div className='RoleInfo'>
      <div className='RoleInfoBox-wrapper'>
      <div className="RoleInfoBox"></div></div>
      <div className="EmployeeImg">
      <img src={employee.image} alt="avatar"/></div>

    <div className="RoleDetail">
      <div className="EmployeeRole">{employee.desig}</div>
      <div className="EmployeeSummary">{employee.summary}</div>

    </div>
    </div>
  )
}
