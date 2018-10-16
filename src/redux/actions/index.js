import { ADD_TO_CART } from '../contants/action-types';

const addToCart = purchase => ({
  type: ADD_TO_CART,
  payload: purchase,
});

export default addToCart;
