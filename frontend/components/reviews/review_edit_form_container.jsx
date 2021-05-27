import React from 'react'
import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import ReviewEditForm from './review_edit_form';

const mapDispatchToProps = dispatch => ({
    updateReview: review => dispatch(updateReview(review))
})

export default connect(
    null,
    mapDispatchToProps
)(ReviewEditForm)