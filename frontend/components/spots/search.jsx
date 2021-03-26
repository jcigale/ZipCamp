import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from './spot_map';
import FilterForm from './filter_form';

const Search = ({ spots, spotType, updateFilter}) => (
    <div>
        <FilterForm spotType={spotType} updateFilter={updateFilter}/> 
        <div className='map-spots'>
        <SpotIndex spots={spots} spotType={spotType} />
        <SpotMap spots={spots} updateFilter={updateFilter} />
        </div>
    </div>
)

export default Search;

