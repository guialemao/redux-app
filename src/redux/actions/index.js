import { ADD_ARTICLE } from '../contants/action-types';

const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article,
});

export default addArticle;
