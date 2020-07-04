import FeedbackModelObjectMother from '../../tests/objectmothers/models/FeedbackModelObjectMother';
import FeedbackActions from './FeedbackActions';
import FeedbackActionTypes from '../types/FeedbackActionTypes';
import FeedbackAction from '../../reducers/feedback/FeedbackAction';

describe('FeedbackActions tests', () => {
    it('Adds feeback', () => {
        // ARRANGE
        const feedback = FeedbackModelObjectMother.get();

        // ACT
        const action = FeedbackActions.addFeedback(feedback);

        // ASSERT
        const expectedAction: FeedbackAction = {
            type: FeedbackActionTypes.ADD_FEEDBACK,
            feedback
        };

        expect(action).toEqual(expectedAction);
    });
});