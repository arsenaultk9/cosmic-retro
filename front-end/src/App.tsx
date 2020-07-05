import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import FeedbacksContainer from './containers/feedback/feedbacks/FeedbacksContainer';

export default function App() {
    return (
        <Container maxWidth='sm'>
            <Typography variant='h2' data-test-id='title'>
                COSMIC-RETRO
            </Typography>
            <FeedbacksContainer data-test-id='feedbacks' />
        </Container>
    );
}