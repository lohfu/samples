export default (state = null, action) => {
  switch (action.type) {
    case 'SET_SERVICES':
      return action.payload || [];
    case 'UNSET_SERVICES':
      return null;
    default:
      return state;
  }
};

