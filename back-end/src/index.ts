import express from 'express';
import bodyParser from 'body-parser';

import FeedbackRoutes from './routes/FeedbackRoutes';
import CorsMiddleware from './middleware/CorsMiddleware';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

CorsMiddleware.register(app);

// Routes
FeedbackRoutes.register(app);


// Socket.io
import http from 'http'; // .Server(app);
// set up socket.io and bind it to our
// http server.
import io from 'socket.io'; // (http);

// Start server listening
const server = app.listen(5481, () => {
    console.log('App is listening on port 5481! ');
});

const socket = io.listen(server);

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
socket.on('connection', (socket: any) => {
    console.log('a user connected');

    // whenever we receive a 'message' we log it out
    socket.on('message', (message: any) => {
        console.log(message);
    });
});