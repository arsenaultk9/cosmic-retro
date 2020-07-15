import { Request, Response } from 'express';
import FeedbackServices from '../services/FeedbackServices';

async function getAll(request: Request, response: Response) {
    try {
        const feedbacks = await FeedbackServices.getAll();
        return response.status(200).send(feedbacks);
    } catch (err) {
        response.status(500).send(err);
    }
}

async function save(request: Request, response: Response) {
    try {
        FeedbackServices.save(request.body);
        return response.status(200).json();
    } catch (err) {
        response.status(500).send(err);
    }
}

export default {
    getAll,
    save
};