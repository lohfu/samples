import React from 'react';
import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import AnimateHOC from './AnimateHOC';

const Contact = ({ regions }) => (
  <section className="page row">
    <div className="left cell" dangerouslySetInnerHTML={{ __html: regions.main }} />
    <div className="right cell">
      <EmployeeList />
    </div>
  </section>
);

export default AnimateHOC(connect((state) => ({ regions: state.regions }))(Contact));
