import FeedbackModelObjectMother from '../../tests/objectmothers/models/FeedbackModelObjectMother';
import FeedbackActions from './FeedbackActions';
import FeedbackActionTypes from '../types/FeedbackActionTypes';
import FeedbackAction from '../../reducers/feedback/FeedbackAction';
import FeedbackApi from '../../api/FeedbackApi';

describe('FeedbackActions tests', () => {
    const FEEDBACK_A = FeedbackModelObjectMother.get('feedbackA');
    const FEEDBACK_B = FeedbackModelObjectMother.get('feedbackB');

    it('Adds feeback', async () => {
        // ARRANGE
        FeedbackApi.addFeedback = jest.fn();
        const dispatch = jest.fn();

        // ACT
        await FeedbackActions.addFeedback(FEEDBACK_A)(dispatch);

        // ASSERT
        const expectedAction: FeedbackAction = {
            type: FeedbackActionTypes.ADD_FEEDBACK,
            feedback: FEEDBACK_A
        };

        expect(dispatch).toHaveBeenCalledWith(expectedAction);
        expect(FeedbackApi.addFeedback).toHaveBeenCalledWith(FEEDBACK_A);
    });

    it('Sets feedbacks', () => {
        const action = FeedbackActions.setFeedbacks([FEEDBACK_A, FEEDBACK_B]);

        const expectedAction: FeedbackAction = {
            type: FeedbackActionTypes.SET_FEEDBACKS,
            feedbacks: [FEEDBACK_A, FEEDBACK_B]
        };

        expect(action).toEqual(expectedAction);
    });

    it('Gets feedbacks', async () => {
        // ARRANGE
        FeedbackApi.getFeedbacks = jest.fn().mockReturnValue({ data: [FEEDBACK_A, FEEDBACK_B] });
        const dispatch = jest.fn();

        // ACT
        await FeedbackActions.getFeedbacks()(dispatch);

        // ASSERT
        const expectedAction: FeedbackAction = {
            type: FeedbackActionTypes.SET_FEEDBACKS,
            feedbacks: [FEEDBACK_A, FEEDBACK_B]
        };

        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});