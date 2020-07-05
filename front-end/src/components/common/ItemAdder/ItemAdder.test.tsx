import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import ItemAdder from './ItemAdder';
import { find } from '../../../tests/utils/FindHelpers';
import ItemAdderState from './ItemAdderState';
import ItemAdderProps from './ItemAdderProps';


describe('<ItemAdder />', () => {
    let wrapper: ShallowWrapper<ItemAdderProps, ItemAdderState, ItemAdder>;

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

    it('when click on add, no text, does not send insert item', () => {
        const textAdd = find(wrapper, 'text-add');
        textAdd.simulate('click');

        expect(onInsertItem.mock.calls.length).toEqual(0);
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

        let textInsert = find(wrapper, 'text-add');
        textInsert.simulate('click');

        expect(wrapper.state().message).toEqual('');

        textInsert = find(wrapper, 'text-insert');
        expect((textInsert.props() as any).value).toEqual('');
    });

    it('when enter text, updates content state', () => {
        let textInsert = find(wrapper, 'text-insert');
        textInsert.simulate('change', { target: { value: 'text' } });
        textInsert = find(wrapper, 'text-insert');

        expect(wrapper.state().message).toEqual('text');
        expect((textInsert.props() as any).value).toEqual('text');
    });
});