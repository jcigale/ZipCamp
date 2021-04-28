import { connect } from 'react-redux';
import { createBooking } from '../../actions/spot_actions';
import BookingForm from './booking_form';

const mapDispatchToProps = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking))
})

export default connect(
    null,
    mapDispatchToProps
)(BookingForm)