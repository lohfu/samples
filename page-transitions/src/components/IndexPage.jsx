import React from 'react';
import { connect } from 'react-redux';
import AnimateHOC from './AnimateHOC';

const Index = ({ regions }) => (
  <section className="page">
    <div className="container" dangerouslySetInnerHTML={{ __html: regions.main }} />
  </section>
);

export default AnimateHOC(connect((state) => ({ regions: state.regions }))(Index));
