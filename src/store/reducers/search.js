/* eslint-disable max-len */
import { CHANGE_SEARCH_FIELD } from '../constants';

const initialStateSearch = {
  searchField: '',
};

const search = (state = initialStateSearch, action = {}) => { // ES6 default parameters used
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload }); // firstly assigns (entire) state to object and then updates searchField
    default:
      return state; // pure functions always return something
  }
};

export default search;
