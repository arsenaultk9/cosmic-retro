import FeedbackModel from '../../../models/FeedbackModel';
import { List } from 'immutable';

function get(feedbacks: FeedbackModel[]) {
    return List<FeedbackModel>(feedbacks);
}

export default { get };