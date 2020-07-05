import FeedbacksContainer from './FeedbacksContainer';
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../Store';
import GlobalActions from '../../../actions/GlobalActions';
import FeedbackModelObjectMother from '../../../tests/objectmothers/models/FeedbackModelObjectMother';
import FeedbackActions from '../../../actions/feedback/FeedbackActions';

describe('<FeedbacksContainer />', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        GlobalActions.resetStore(store.dispatch);
    });

    it('Shows feedbacks', async () => {
        // ARRANGE
        const feedbacks = [FeedbackModelObjectMother.get('a'), FeedbackModelObjectMother.get('b')];
        await store.dispatch(FeedbackActions.setFeedbacks(feedbacks));

        // ACT
        wrapper = mount((<Provider store={store}>
            <FeedbacksContainer />
        </Provider>));

        // ASSERT
        expect(wrapper.find('Feedback').length).toEqual(2);
    });
});