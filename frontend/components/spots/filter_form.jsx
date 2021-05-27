import React from 'react';
import { render } from 'react-dom';
import { icons } from '../../util/icon_hash';
import Autocomplete from 'react-google-autocomplete';
import {withRouter} from 'react-router-dom';



class FilterForm extends React.Component {

    constructor(props) {
        super(props)

        this.handleChange = (filter, updateFilter) => e => (
            updateFilter(filter, e.currentTarget.value)
        );
    }


 

    render() {
        return (
            <div>
                <nav className='filter-nav'>
                    <button value='RVs' onClick={this.handleChange('spotType', this.props.updateFilter)}><i className={icons['rv']}></i> RVs</button>
                    <button value='Campsite' onClick={this.handleChange('spotType', this.props.updateFilter)}><i className={icons['tent']}></i> Campsites</button>
                    <button value='Lodging' onClick={this.handleChange('spotType', this.props.updateFilter)}><i className={icons['lodging']}></i> Lodging</button>
                    <button value='All' onClick={this.handleChange('spotType', this.props.updateFilter)}>All listings</button>
                    <input
                        id="nav-search"
                        className="search"
                        type="text"
                        placeholder="Search location"
                    />
                </nav>
            </div>
    )}
}


export default FilterForm