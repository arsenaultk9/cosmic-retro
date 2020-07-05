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

        case FeedbackActionTypes.SET_FEEDBACKS:
            if (!action.feedbacks) return state;

            action.feedbacks.forEach(f => state = state.push(f));
            return state;

        default:
            return state;
    }
};

export default feedbackReducer;
