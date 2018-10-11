import ADD_PURCHASE from '../constants/action-types';

const initialState = {
  purchase: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PURCHASE:
      return { 
        ...state,
        purchase: [...state.purchase, action.payload],
      };
    default: 
      return state;
  }
};

export default rootReducer;
