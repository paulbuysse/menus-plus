const dishes = (state = [], action) => {
    switch (action.type) {
      case 'SET_DISHES':
        return action.payload;
      default:
        return state;
    }
  };

  export default dishes;