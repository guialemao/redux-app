import { ADD_PURCHASE } from '../contants/action-types';

const addPurchase = purchase => ({
  type: ADD_PURCHASE,
  payload: purchase,
});

export default addPurchase;
