export default (state = null, action) => {
  switch (action.type) {
    case 'SET_REGIONS':
      return action.payload || {};
    case 'UNSET_REGIONS':
      return null;
    default:
      return state;
  }
};

