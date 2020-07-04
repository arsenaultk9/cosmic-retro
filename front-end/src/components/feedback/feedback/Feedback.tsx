import React from 'react';
import FeedbackProps from './FeedbackProps';

export default class Feedback extends React.Component<FeedbackProps> {
    render() {
        return (<div>{this.props.feedback.content}</div>);
    }
}