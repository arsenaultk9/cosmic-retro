import FeedbackModelObjectMother from '../tests/objectmothers/models/FeedbackModelObjectMother';
import FeedbackDataAccess from '../dataaccess/FeedbackDataAccess';
import FeedbackServices from './FeedbackServices';

describe('FeedbackServices tests', () => {
    const FEEDBACK_A = FeedbackModelObjectMother.get('feedbackA');
    const FEEDBACK_B = FeedbackModelObjectMother.get('feedbackB');

    describe('getAll', () => {
        it('gets feedbacks', () => {
            // ARRANGE
            const dataFeedbacks = [FEEDBACK_A, FEEDBACK_B];
            FeedbackDataAccess.getAll = () => dataFeedbacks;

            // ACT
            const serviceFeedbacks = FeedbackServices.getAll();

            // ASSERT
            expect(serviceFeedbacks).toBe(dataFeedbacks);
        });
    });

    describe('save', () => {
        it('saves feedback', () => {
            // ARRANGE
            const dataAccessSave = jest.fn();
            FeedbackDataAccess.save = dataAccessSave;

            // ACT
            FeedbackServices.save(FEEDBACK_A);

            // ASSERT
            expect(dataAccessSave).toHaveBeenCalled();
            expect(dataAccessSave).toHaveBeenCalledWith(FEEDBACK_A);
        });
    });
});