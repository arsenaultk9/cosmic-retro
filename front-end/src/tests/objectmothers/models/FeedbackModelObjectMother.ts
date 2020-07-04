import FeedbackModel from '../../../models/FeedbackModel';

function get(content: string): FeedbackModel {
    return {
        content
    };
}

export default {
    get
};
