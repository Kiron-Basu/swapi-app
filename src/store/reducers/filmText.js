/* eslint-disable max-len */
import { REQUEST_FILM_PENDING, REQUEST_FILM_SUCCESS, REQUEST_FILM_FAILED } from '../constants';

const initialStateSearch = {
  crawlText: '',
  isPending: false,
  error: '',
};

const requestFilmSearch = (state = initialStateSearch, action = {}) => { // ES6 default parameters used
  switch (action.type) {
    case REQUEST_FILM_PENDING:
      return Object.assign({}, state, { isPending: true }); // firstly assigns (entire) state to object and then updates searchField

    case REQUEST_FILM_SUCCESS:
      return Object.assign({}, state, { crawlText: action.crawlText, isPending: false });

    case REQUEST_FILM_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state; // pure functions always return something
  }
};

export default requestFilmSearch;
