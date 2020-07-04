import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ItemAdderState from './ItemAdderState';
import ItemAdderProps from './ItemAdderProps';

export default class ItemAdder extends React.Component<ItemAdderProps, ItemAdderState> {
    constructor(props: ItemAdderProps) {
        super(props);

        this.state = {
            message: ''
        };
    }

    insertItem() {
        this.props.insertItem(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <>
                <TextField data-test-id='text-insert' />
                <IconButton aria-label='add' data-test-id='text-add' onClick={() => this.insertItem()}>
                    <AddBoxIcon />
                </IconButton>
            </>
        );
    }
}