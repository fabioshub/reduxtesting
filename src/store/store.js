import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import { mainreducer } from '../reducers/reducer.js';

import history from '../constants/history';

export const store = createStore(
    combineReducers({
        main: mainreducer,
        router: connectRouter(history),
    }),
    compose(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
);
