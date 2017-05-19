import React from 'react';
import { connect } from 'react-redux';

const EmployeeList = ({ employees }) => (
  <section className="employees list collection container">
    <h1>Employees</h1>
    {employees && employees.map((employee) => (
      <section key={employee.id}>
        <h1>{employee.name}</h1>
        <a href={`mailto:${employee.email}`}>{employee.email}</a>
        <div dangerouslySetInnerHTML={{ __html: employee.description }} />
      </section>
    ))}
  </section>
);

export default connect((state) => ({ employees: state.employees }))(EmployeeList);
