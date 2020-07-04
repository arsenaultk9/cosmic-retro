
import Feedbacks from './Feedbacks';
import FeedbackModel from '../../../models/FeedbackModel';
import FeedbackModelObjectMother from '../../../tests/objectmothers/models/FeedbackModelObjectMother';
import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';
import { find, findAllForGroup } from '../../../tests/utils/FindHelpers';
import FeedbacksProps from './Feedbacks.props';
import FeedbackStateObjectMother from '../../../tests/objectmothers/reducers/FeedbackStateObjectMother';

describe('<Feedbacks />', () => {
    const FEEDBACKS_TITLE = 'Rétroactions';

    const FEEDBACK_A: FeedbackModel = FeedbackModelObjectMother.get('feedbackA');
    const FEEDBACK_B: FeedbackModel = FeedbackModelObjectMother.get('feedbackB');

    const FEEDBACKS = FeedbackStateObjectMother.get([FEEDBACK_A, FEEDBACK_B]);

    let wrapper: ShallowWrapper<FeedbacksProps, {}, Feedbacks>;
    const onAddFeedback = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Feedbacks feedbacks={FEEDBACKS} addFeedback={onAddFeedback} />);
    });

    it('renders title', () => {
        expect(find(wrapper, 'feedbacks-title').text()).toEqual(FEEDBACKS_TITLE);
    });

    it('renders feedbacks', () => {
        expect(findAllForGroup(wrapper, 'feedback').length).toEqual(2);

        expectFeedbackToBe('feedback-feedbackA', FEEDBACK_A);
        expectFeedbackToBe('feedback-feedbackB', FEEDBACK_B);
    });

    it('can add feedback', () => {
        wrapper.instance().addFeedback('newFeedback');

        expect(onAddFeedback.mock.calls.length).toEqual(1);
        expect(onAddFeedback.mock.calls[0][0].content).toEqual('newFeedback');
    });

    function expectFeedbackToBe(testId: string, feedback: FeedbackModel) {
        expect((find(wrapper, testId).props() as any).feedback).toEqual(feedback);
    }
});
