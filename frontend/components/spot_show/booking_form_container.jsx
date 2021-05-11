import { connect } from 'react-redux';
import BookingForm from './booking_form';

const mapStateToProps = state => ({
    session: state.session.id
})

export default connect(
    mapStateToProps,
    null
)(BookingForm)