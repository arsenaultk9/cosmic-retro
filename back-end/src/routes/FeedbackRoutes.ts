import { Application } from 'express';
import FeedbackController from '../controllers/FeedbackController';

function register(app: Application) {
    app.get('/feedback', FeedbackController.getAll);
    app.post('/feedback', FeedbackController.save);
}

export default { register };