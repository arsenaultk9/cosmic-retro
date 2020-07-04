import React from 'react';
import FeedbacksProps from './Feedbacks.props';
import { List, Typography, ListItem } from '@material-ui/core';
import ItemAdder from '../../common/ItemAdder/ItemAdder';
import FeedbackModel from '../../../models/FeedbackModel';
import Feedback from '../feedback/Feedback';

export default class Feedbacks extends React.Component<FeedbacksProps> {
    addFeedback(content: string) {
        const feedback: FeedbackModel = { content };
        this.props.addFeedback(feedback);
    }

    render() {
        const feedbackItems = this.props.feedbacks.map(f => {
            return (<ListItem key={f.content}>
                <Feedback feedback={f} data-test-id={`feedback-${f.content}`} data-test-group='feedback' />
            </ListItem>);
        });
        return (<>
            <Typography data-test-id='feedbacks-title'>
                Rétroactions
            </Typography>
            <List>
                {feedbackItems}
                <ListItem key='item-adder'>
                    <ItemAdder
                        insertItem={(message: string) => this.addFeedback(message)}
                        data-test-id='feedback-adder'
                    />
                </ListItem>
            </List>
        </>);
    }
}