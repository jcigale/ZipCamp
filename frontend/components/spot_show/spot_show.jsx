import React from 'react';
import SpotDetail from './spot_detail';
import ReviewFormContainer from './review_form_container';

const SpotShow = ({ spot, reviews }) => {
    return (
        <div className='spot-show'>
            <SpotDetail spot={spot} reviews={reviews}/>
        </div>
    )
}

export default SpotShow;