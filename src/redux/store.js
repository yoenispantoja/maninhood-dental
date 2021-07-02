import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import postReducer from './postDucks';
import serviciosReducer from './serviciosDucks';


const rootReducer = combineReducers({
    posts: postReducer,
    servicios: serviciosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) );
    return store;
}