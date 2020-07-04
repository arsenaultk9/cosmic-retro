import FeedbackState from '../../../reducers/feedback/FeedbackState';
import FeedbackModel from '../../../models/FeedbackModel';

export default interface FeedbacksProps {
    feedbacks: FeedbackState;
    addFeedback: (feedback: FeedbackModel) => void;
}