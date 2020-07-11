import express, { Request, Response } from 'express';
import FeedbackRoutes from './routes/FeedbackRoutes';

// Create a new express app instance
const app: express.Application = express();

FeedbackRoutes.register(app);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(5481, () => {
    console.log('App is listening on port 5481! ');
});