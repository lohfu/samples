import React from 'react';
import { connect } from 'react-redux';

import changePage from '../store/action';

const Navigation = ({ changePage }) => (
  <nav>
    <ul>
      <li><a onClick={() => changePage('/')}>Index</a></li>
      <li><a onClick={() => changePage('/about')}>About</a></li>
      <li><a onClick={() => changePage('/contact')}>Contact</a></li>
    </ul>
  </nav>
);

export default connect(null, (dispatch) => ({
  changePage: (path) => dispatch(changePage(path)),
}))(Navigation);
