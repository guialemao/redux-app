import ADD_TO_CART from '../constants/action-types';

const initialState = {
  purchase: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { 
        ...state,
        purchase: [...state.purchase, action.payload],
      };
    default: 
      return state;
  }
};

export default reducer;
