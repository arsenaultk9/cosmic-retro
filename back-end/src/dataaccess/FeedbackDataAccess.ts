import FeedbackModel from '../models/FeedbackModel';


function getAll(): FeedbackModel[] {
    return [
        { content: 'More powa' },
        { content: 'Next item' }
    ];
}

function save(feedback: FeedbackModel) {
    console.log(`saved feedback: ${feedback}`);
    return;
}

export default {
    getAll,
    save
};