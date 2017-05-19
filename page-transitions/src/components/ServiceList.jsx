import React from 'react';
import { connect } from 'react-redux';

const ServiceList = ({ services }) => (
  <section className="services list collection container">
    <h1>Services</h1>
    {services && services.map((service) => (
      <section key={service.id}>
        <h1>{service.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: service.description }} />
      </section>
    ))}
  </section>
);

export default connect((state) => ({ services: state.services }))(ServiceList);
