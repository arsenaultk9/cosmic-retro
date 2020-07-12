import FeedbackModel from '../../models/FeedbackModel';
import FeedbackAction from '../../reducers/feedback/FeedbackAction';
import FeedbackActionTypes from '../types/FeedbackActionTypes';
import { Dispatch } from 'redux';
import FeedbackApi from '../../api/FeedbackApi';

function addFeedback(feedback: FeedbackModel) {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        await FeedbackApi.addFeedback(feedback);

        dispatch({
            type: FeedbackActionTypes.ADD_FEEDBACK,
            feedback
        });
    };
}

function getFeedbacks() {
    return async (dispatch: Dispatch<FeedbackAction>) => {
        const feedbacks = (await FeedbackApi.getFeedbacks()).data;

        return dispatch({
            type: FeedbackActionTypes.SET_FEEDBACKS, feedbacks
        });
    };
}

function setFeedbacks(feedbacks: FeedbackModel[]): FeedbackAction {
    return {
        type: FeedbackActionTypes.SET_FEEDBACKS,
        feedbacks
    };
}

export default {
    addFeedback,
    getFeedbacks,
    setFeedbacks
};