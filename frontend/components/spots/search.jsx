import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from './spot_map';
import FilterForm from './filter_form';

const Search = ({ spots, spotType, updateFilter}) => (
    <div>
        <FilterForm spotType={spotType} updateFilter={updateFilter}/> 
        <SpotMap spots={spots} updateFilter={updateFilter} singleSpot={false} />
        <SpotIndex spots={spots} />
    </div>
)

export default Search;

