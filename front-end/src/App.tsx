import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export default function App() {
    return (
        <Container maxWidth='sm'>
            <Typography variant='h2' data-test-id='title'>
                COSMIC-RETRO
            </Typography>
        </Container>
    );
}