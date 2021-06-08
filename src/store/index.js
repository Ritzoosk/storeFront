import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesReducer from './categories.js'



let reducers = combineReducers({ categories: categoriesReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();