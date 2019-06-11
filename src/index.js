import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// should occur after Thunk import
import App from './App';
import * as serviceWorker from './serviceWorker';

// import reducers
import filmText from './store/reducers/filmText'; // could use {filmText, search} from './store/reducers' instead
import search from './store/reducers/search';

// eslint-disable-next-line max-len
const rootReducer = combineReducers({ filmText, search }); // shorthand for {filmText: filmText, search: search}
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
