import React from 'react';
import { icons } from '../../util/icon_hash'



const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ spotType, updateFilter }) => (
    <div>
        <nav className='filter-nav'>
            <button value='RVs' onClick={handleChange('spotType', updateFilter)}><i className={icons['rv']}></i> RVs</button>
            <button value='Campsite' onClick={handleChange('spotType', updateFilter)}><i className={icons['tent']}></i> Campsites</button>
            <button value='Lodging' onClick={handleChange('spotType', updateFilter)}><i className={icons['lodging']}></i> Lodging</button>
            <button value='All' onClick={handleChange('spotType', updateFilter)}>All listings</button>
            
        </nav>
    </div>
)

export default FilterForm