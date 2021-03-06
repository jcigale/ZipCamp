import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions'

const mapStateToProps = state => ({
    session: state.session.id
})

const mapDispatchToProps = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingForm)