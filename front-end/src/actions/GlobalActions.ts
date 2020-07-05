import { Action, Dispatch } from 'redux';
import ActionTypes from './types/ActionTypes';

function resetStore(dispatch: Dispatch<Action>) {
    dispatch({ type: ActionTypes.RESET });
}

export default {
    resetStore,
};
