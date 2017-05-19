import React from 'react';
import { connect } from 'react-redux';
import ServiceList from './ServiceList';
import AnimateHOC from './AnimateHOC';

const About = ({ regions }) => (
  <section className="page row">
    <div className="left cell" dangerouslySetInnerHTML={{ __html: regions.main }} />
    <div className="right cell">
      <ServiceList />
    </div>
  </section>
);

export default AnimateHOC(connect((state) => ({ regions: state.regions }))(About));
