import React from 'react';
import { icons } from '../../util/icon_hash';
import {withRouter} from 'react-router-dom';




const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);


class FilterForm extends React.Component {

    constructor(props) {
        super(props)
    }


 

    render() {
        return (
            <div>
                <nav className='filter-nav'>
                    <button value='RVs' onClick={handleChange('spotType', this.props.updateFilter)}><i className={icons['rv']}></i> RVs</button>
                    <button value='Campsite' onClick={handleChange('spotType', this.props.updateFilter)}><i className={icons['tent']}></i> Campsites</button>
                    <button value='Lodging' onClick={handleChange('spotType', this.props.updateFilter)}><i className={icons['lodging']}></i> Lodging</button>
                    <button value='All' onClick={handleChange('spotType', this.props.updateFilter)}>All listings</button>
                    <form onSubmit={this.props.handleSubmit}>
                    <input
                        id="nav-search"
                        className="search"
                        type="text"
                        placeholder="Search location"
                    />
                    </form>
                </nav>
            </div>
    )}
}


export default withRouter(FilterForm);