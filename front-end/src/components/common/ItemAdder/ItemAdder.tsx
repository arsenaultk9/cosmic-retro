import React, { ChangeEvent } from 'react';
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

    handleEnterInsert(event: React.KeyboardEvent) {
        if (event.key !== 'Enter') {
            return;
        }

        this.insertItem();
    }

    handleKeyPress(event: any) {
        this.setState({ message: event.target.value });
    }

    insertItem() {
        if (!this.state.message) return;

        this.props.insertItem(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <>
                <TextField
                    data-test-id='text-insert'
                    onKeyDown={(event: React.KeyboardEvent) => this.handleEnterInsert(event)}
                    onChange={(event: ChangeEvent) => this.handleKeyPress(event)}
                    value={this.state.message}
                />
                <IconButton aria-label='add' data-test-id='text-add' onClick={() => this.insertItem()}>
                    <AddBoxIcon />
                </IconButton>
            </>
        );
    }
}