import { Action, applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import Thunk from 'redux-thunk';

import State from './State';
import feedbackReducer from './reducers/feedback/FeedbackReducer';
import ActionTypes from './actions/types/ActionTypes';

const songApp = combineReducers<State>({
    feedbacks: feedbackReducer,
});

const rootReducer = (state: State | undefined, action: Action): State => {
    if (action?.type === ActionTypes.RESET) {
        state = undefined;
    }

    return songApp(state, action);
};

const composeEnhancers =
    typeof window === 'object' &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(Thunk, Logger),
    applyMiddleware(Thunk),
);

const store: Store<State> = createStore<State, any, any, any>(rootReducer, enhancer);

export default store;
