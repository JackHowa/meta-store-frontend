import { combineReducers } from 'redux';

import sites from './siteReducer';
import categories from './categoryReducer';

export default combineReducers({
  sites,
  categories,
});
