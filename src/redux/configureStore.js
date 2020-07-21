import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Slides} from './slides'

import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            slides: Slides
        }),
        applyMiddleware(thunk, logger)
    );
    return store
}