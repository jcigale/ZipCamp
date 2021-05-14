import React from 'react';
import SpotDetail from './spot_detail';
import BookingForm from './booking_form';
import SpotMap from '../spots/spot_map';
import {createBooking} from '../../actions/booking_actions';


const SpotShow = ({ spot, spotId, state, fetchSpot }) => {
    const spots = {
        [spotId]: spot
    };
    debugger

    return (
        <div className='spot-show'>
            <SpotDetail  spot={spot}  state={state} reviews={spot.reviews}/>
            <BookingForm spot={spot} createBooking={createBooking} session={state.session}/>
            <SpotMap spots={spots} spotId= {spotId} singleSpot={true} fetchSpot={fetchSpot}/>
        </div>
    )
}

export default SpotShow;