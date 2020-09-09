const currentMenuReducer = (state = [], action) => {
    switch (action.type) {
      case 'APPLY_CURRENT_MENU':
        return action.payload;
      default:
        return state;
    }
  };

  export default currentMenuReducer;