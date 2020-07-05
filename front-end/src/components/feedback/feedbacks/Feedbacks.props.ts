import FeedbackState from '../../../reducers/feedback/FeedbackState';
import FeedbackModel from '../../../models/FeedbackModel';

export interface FeedbacksMapToStateProps {
    feedbacks: FeedbackState;
}

export interface FeedbacksMapToDispatch {
    addFeedback: (feedback: FeedbackModel) => void;
}

export type FeedbacksProps = FeedbacksMapToStateProps & FeedbacksMapToDispatch;