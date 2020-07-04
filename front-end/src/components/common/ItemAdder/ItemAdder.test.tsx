import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import ItemAdder from './ItemAdder';
import { find } from '../../../tests/utils/FindHelpers';


describe('<ItemAdder />', () => {
    let wrapper: ShallowWrapper<any, any, ItemAdder>;

    let onInsertItem: jest.Mock<any, any>;

    beforeEach(() => {
        onInsertItem = jest.fn();
        wrapper = shallow(<ItemAdder insertItem={onInsertItem} />);
    });

    it('has no text typed in initialy', () => {
        expect(wrapper.state().message).toEqual('');
    });

    it('when click on add, send insert item', () => {
        const typedText = 'Inserted item';
        wrapper.setState({ message: typedText });

        const textAdd = find(wrapper, 'text-add');
        textAdd.simulate('click');

        expect(onInsertItem.mock.calls.length).toEqual(1);
        expect(onInsertItem.mock.calls[0][0]).toEqual(typedText);
    });

    it('when press on enter, send insert item', () => {
        const typedText = 'Inserted item';
        wrapper.setState({ message: typedText });

        const textInsert = find(wrapper, 'text-insert');
        textInsert.simulate('keydown', { key: 'Enter' });

        expect(onInsertItem.mock.calls.length).toEqual(1);
        expect(onInsertItem.mock.calls[0][0]).toEqual(typedText);
    });

    it('when insert item, text is cleared', () => {
        const typedText = 'Inserted item';
        wrapper.setState({ message: typedText });

        const textInsert = find(wrapper, 'text-add');
        textInsert.simulate('click');

        expect(wrapper.state().message).toEqual('');
    });
});