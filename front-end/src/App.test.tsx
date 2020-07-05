import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';
import { find } from './tests/utils/FindHelpers';

describe('<App />', () => {
    let wrapper: ShallowWrapper<AnalyserNode, any, any>;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('has app title', () => {
        const title = find(wrapper, 'title');
        expect(title.text()).toEqual('COSMIC-RETRO');
    });

    it('has feedbacks', () => {
        expect(find(wrapper, 'feedbacks').exists()).toBeTruthy();
    });
});
