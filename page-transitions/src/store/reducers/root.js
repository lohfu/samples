import { combineReducers } from 'redux';

import employees from './employees';
import location from './location';
import regions from './regions';
import services from './services';

export default combineReducers({
  employees,
  location,
  regions,
  services,
});
