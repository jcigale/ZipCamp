import React from 'react';
import SpotDetail from './spot_detail';
import ReviewFormContainer from './review_form_container';

const SpotShow = ({ spot, reviews }) => {
    return (
        <div className='spot-show'>
            <img src={spot.photo_url} />
            <SpotDetail spot={spot} reviews={reviews}/>
        </div>
    )
}

export default SpotShow;