/* eslint-disable import/prefer-default-export */
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FILM_PENDING,
  REQUEST_FILM_SUCCESS,
  REQUEST_FILM_FAILED,
} from './constants';

export const searchFieldChange = text => ({ // brackets substitute return keyword
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestFilmSearch = query => (dispatch) => { // query has to be in first function
  dispatch({ type: REQUEST_FILM_PENDING });
  // console.log('quert -->', query);
  // `https://swapi.co/api/films/?search=${query}`
  fetch(`https://swapi.co/api/films/?search=${query}`)
    .then(response => response.json())
    // .then(response => console.log('this is the json -->', response.results[0].opening_crawl))
    .then(data => dispatch({ type: REQUEST_FILM_SUCCESS, crawlText: data.results[0].opening_crawl }))
    .then(dispatch({ type: REQUEST_FILM_SUCCESS, crawlText: '' }))
    .catch(error => dispatch({ type: REQUEST_FILM_FAILED, payload: error }));
};
