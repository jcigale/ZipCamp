import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots }) => (
    <div className='spots'>
        {spots.map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
        ))}
    </div>
)

export default SpotIndex;