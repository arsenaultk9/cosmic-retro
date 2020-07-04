import FeedbackModel from '../../models/FeedbackModel';
import FeedbackAction from '../../reducers/feedback/FeedbackAction';
import FeedbackActionTypes from '../types/FeedbackActionTypes';

function addFeedback(feedback: FeedbackModel): FeedbackAction {
    return {
        type: FeedbackActionTypes.ADD_FEEDBACK,
        feedback
    };
}

export default {
    addFeedback
};