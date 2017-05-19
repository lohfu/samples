export default (state = null, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.payload || [];
    case 'UNSET_EMPLOYEES':
      return null;
    default:
      return state;
  }
};

