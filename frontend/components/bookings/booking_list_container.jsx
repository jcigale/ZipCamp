import { connect } from 'react-redux';
import { updateBooking, deleteBooking, fetchBookings } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions';
import BookingList from './booking_list';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        bookings: Object.values(state.entities.bookings),
        session: state.session.id,
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    fetchBookings: userId => dispatch(fetchBookings(userId)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
});

export default connect(mapStateToProps,
     mapDispatchToProps)(BookingList)