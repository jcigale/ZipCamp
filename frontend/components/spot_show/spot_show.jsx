import React from 'react';
import SpotDetail from './spot_detail';

const SpotShow = ({ spot, reviews }) => {
    console.log(spot)
    return (
        <div className='spot-show'>
            <img src={spot.photo_url} />
            <SpotDetail spot={spot} reviews={reviews}/>
        </div>
    )
}

export default SpotShow;