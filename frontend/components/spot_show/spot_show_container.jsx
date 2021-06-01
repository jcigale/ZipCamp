import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchAllReview, deleteReview } from '../../actions/review_actions';
import { createBooking } from '../../actions/booking_actions';
import { selectSpot, selectReviews } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, {match}) => {
    //
    const spotId = parseInt(match.params.spotId);

    return {
        spotId: spotId,
        spot: state.entities.spots[match.params.spotId],
        reviews: state.entities.reviews,
        session: state.session.id,
        state: state
    };
}

const mapDispatchToProps = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchAllReview: spotId=> dispatch(fetchAllReview(spotId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotShow);