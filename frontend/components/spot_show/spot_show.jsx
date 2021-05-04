import React from 'react';
import SpotDetail from './spot_detail';
import BookingForm from './booking_form';


const SpotShow = ({ spot, reviews, spotId }) => {


    return (
        <div className='spot-show'>
            <SpotDetail  spot={spot} reviews={reviews}/>
            <BookingForm spot={spot} />
        </div>
    )
}

export default SpotShow;