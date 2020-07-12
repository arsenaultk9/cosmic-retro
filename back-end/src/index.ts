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

app.listen(5481, () => {
    console.log('App is listening on port 5481! ');
});