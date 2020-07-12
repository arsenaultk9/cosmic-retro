import HttpHelpers from '../helpers/HttpHelpers';
import FeedbackModel from '../models/FeedbackModel';

function getFeedbacks() {
    return HttpHelpers.get('feedback');
}

function addFeedback(feedback: FeedbackModel) {
    return HttpHelpers.post('feedback', feedback);
}

export default {
    getFeedbacks,
    addFeedback
};