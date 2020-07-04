import { Action } from 'redux';
import FeedbackModel from '../../models/FeedbackModel';

export default interface FeedbackAction extends Action {
    feedback?: FeedbackModel;
}