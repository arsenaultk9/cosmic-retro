import FeedbackReducer from './FeedbackReducer';
import FeedbackModelObjectMother from '../../tests/objectmothers/models/FeedbackModelObjectMother';
import feedbackReducer from './FeedbackReducer';
import FeedbackActionTypes from '../../actions/types/FeedbackActionTypes';
import { List } from 'immutable';
import FeedbackModel from '../../models/FeedbackModel';

describe('FeedbackReducer tests', () => {
    it('Can add feedback', () => {
        // ARRANGE
        const feedbackModel = FeedbackModelObjectMother.get('Content');

        // ACT
        const reducer = feedbackReducer(undefined, { type: FeedbackActionTypes.ADD_FEEDBACK, feedback: feedbackModel });

        // ASSERT
        expect(reducer.size).toEqual(1);
        expect(reducer.get(0)).toBe(feedbackModel);
    });

    it('Add empty feedback returns same state', () => {
        // ARRANGE
        const feedbackModel = FeedbackModelObjectMother.get('Content');
        const state = List<FeedbackModel>();

        // ACT
        const reducer = feedbackReducer(state, { type: FeedbackActionTypes.ADD_FEEDBACK, feedback: undefined });

        // ASSERT
        expect(reducer).toBe(state);
    });
});