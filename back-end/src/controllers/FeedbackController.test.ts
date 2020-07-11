import FeedbackModelObjectMother from '../tests/objectmothers/models/FeedbackModelObjectMother';
import FeedbackController from './FeedbackController';
import FeedbackServices from '../services/FeedbackServices';
import ResponseMock from '../tests/mocks/http/ResponseMock';
import RequestMock from '../tests/mocks/http/RequestMock';

describe('Feedback Controller tests', () => {
    const FEEDBACK_A = FeedbackModelObjectMother.get('feedbackA');
    const FEEDBACK_B = FeedbackModelObjectMother.get('feedbackB');

    describe('getAll', () => {
        it('returns feedbacks', () => {
            // ARRANGE
            const request = RequestMock.get();
            const response = ResponseMock.get();

            FeedbackServices.getAll = () => [FEEDBACK_A, FEEDBACK_B];

            // ACT
            FeedbackController.getAll(request, response);

            // ASSERT
            expect(response.send).toHaveBeenCalled();
            expect(response.send).toHaveBeenCalledWith([FEEDBACK_A, FEEDBACK_B]);
            expect(response.status).toHaveBeenCalledWith(200);
        });
    });

    describe('save', () => {
        it('saves feedback', () => {
            // ARRANGE
            const request = RequestMock.get(FEEDBACK_B);
            const response = ResponseMock.get();

            FeedbackServices.save = jest.fn();

            // ACT
            FeedbackController.save(request, response);

            // ASSERT
            expect(FeedbackServices.save).toHaveBeenCalled();
            expect(FeedbackServices.save).toHaveBeenCalledWith(FEEDBACK_B);
            expect(response.status).toHaveBeenCalledWith(200);
        });
    });
});