import FeedbackModel from '../models/FeedbackModel';
import TableDataAccessProxy from './TableDataAccessProxy';

const feedbackDataAccessProxy = TableDataAccessProxy.tableDataAccessProxy('feedbacks');

function getAll(): FeedbackModel[] {
    return feedbackDataAccessProxy.getAll();
}

function save(feedback: FeedbackModel) {
    feedbackDataAccessProxy.insert(feedback);
}

export default {
    getAll,
    save
};