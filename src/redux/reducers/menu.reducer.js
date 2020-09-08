const menuReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MENUS':
        return action.payload;
      default:
        return state;
    }
  };

  export default menuReducer;