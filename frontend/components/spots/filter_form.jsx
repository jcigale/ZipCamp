import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ spotType, updateFilter }) => (
    <div>
        <nav className='filter-nav'>
            <input type="button" value='RVs' onClick={handleChange('spotType', updateFilter)}/>
            <input type="button" value='Campsites' onClick={handleChange('spotType', updateFilter)} />
            <input type="button" value='Lodging' onClick={handleChange('spotType', updateFilter)} />
            <input type="button" value='All listings' onClick={handleChange('spotType', updateFilter)} />
            <input
                id="pac-input"
                class="controls"
                type="text"
                placeholder="Search Box"
            />
        </nav>
    </div>
)

export default FilterForm