import React from 'react';
import SpotDetail from './spot_detail';
import BookingForm from './booking_form_container';
import SpotMap from '../spots/spot_map';
import {createBooking} from '../../actions/booking_actions';



class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        let spotId = parseInt(this.props.match.params.spotId);
        this.props.fetchSpot(spotId);
        // this.props.fetchAllReview(spotId);
    }

    render() {
        const spots = {
            [this.props.spotId]: this.props.spot
        };

        if (!this.props.spot) {
            return null;
        }

        return (
            <div className='spot-show'>
                <SpotDetail spot={this.props.spot} state={this.props.state} reviews={this.props.spot.reviews} deleteReview={this.props.deleteReview} />
                <BookingForm spot={this.props.spot} session={this.props.state.session} />
                <SpotMap spots={spots} spotId={this.props.spotId} singleSpot={true} fetchSpot={this.props.fetchSpot} />
            </div>
        )
    }

}

export default SpotShow;