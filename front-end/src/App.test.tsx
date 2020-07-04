import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';
import { find } from './tests/utils/FindHelpers';

describe('<App />', () => {
    it('has app title', () => {
        const wrapper = shallow(<App />);
        const title = find(wrapper, 'title');
        expect(title.text()).toEqual('COSMIC-RETRO');
    });
});
