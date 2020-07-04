import FeedbackState from './FeedbackState';
import FeedbackAction from './FeedbackAction';
import FeedbackActionTypes from '../../actions/types/FeedbackActionTypes';
import { List } from 'immutable';
import FeedbackModel from '../../models/FeedbackModel';

const feedbackReducer = (state: FeedbackState = List<FeedbackModel>(), action: FeedbackAction): FeedbackState => {
    switch (action.type) {
        case FeedbackActionTypes.ADD_FEEDBACK:
            if (!action.feedback) return state;

            return state.push(action.feedback);
        default:
            return state;
    }
};

export default feedbackReducer;
