import FeedbackModel from '../../../models/FeedbackModel';

function get(content: string = 'content'): FeedbackModel {
    return {
        content
    };
}

export default {
    get
};
