import { ShallowWrapper, shallow } from 'enzyme';
import FeedbackModelObjectMother from '../../../tests/objectmothers/models/FeedbackModelObjectMother';
import Feedback from './Feedback';
import React from 'react';
import FeedbackProps from './FeedbackProps';

describe('<Feedback />', () => {
    const FEEDBACK = FeedbackModelObjectMother.get('Content');

    let wrapper: ShallowWrapper<FeedbackProps>;

    beforeEach(() => {
        wrapper = shallow(<Feedback feedback={FEEDBACK} />);
    });

    it('renders content', () => {
        expect(wrapper.text()).toMatch(FEEDBACK.content);
    });
});