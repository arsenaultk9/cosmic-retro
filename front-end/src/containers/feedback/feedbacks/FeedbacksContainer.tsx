import { connect } from 'react-redux';

import Feedbacks from '../../../components/feedback/feedbacks/Feedbacks';
import State from '../../../State';
import { FeedbacksMapToStateProps, FeedbacksMapToDispatch } from '../../../components/feedback/feedbacks/Feedbacks.props';
import FeedbackAction from '../../../reducers/feedback/FeedbackAction';
import { Dispatch } from 'redux';
import FeedbackModel from '../../../models/FeedbackModel';
import FeedbackActions from '../../../actions/feedback/FeedbackActions';

const mapStateToProps = (storeState: State): FeedbacksMapToStateProps => {
    return {
        feedbacks: storeState.feedbacks
    };
};

const mapDispatchToProps = (dispatch: Dispatch<FeedbackAction>): FeedbacksMapToDispatch => {
    return {
        addFeedback: (feedback: FeedbackModel) => {
            FeedbackActions.addFeedback(feedback)(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);