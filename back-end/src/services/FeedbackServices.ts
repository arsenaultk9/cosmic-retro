import FeedbackModel from '../models/FeedbackModel';
import FeedbackDataAccess from '../dataaccess/FeedbackDataAccess';

function getAll(): FeedbackModel[] {
    return FeedbackDataAccess.getAll();
}

function save(feedback: FeedbackModel) {
    FeedbackDataAccess.save(feedback);
}

export default {
    getAll,
    save
};