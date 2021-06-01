import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots, spotType }) => {
    // ////
    // const filterSpots = (spots, spotType) => {
    //     if (spotType === 'All Listings') return spots; 
    //     return spots.filter(spot => spot.spotType === spotType)
    // }
    return(
    <div className='spots'>
            {spots.map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
        ))}
    </div>)
}

export default SpotIndex;