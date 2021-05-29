import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from './spot_map';
import FilterForm from './filter_form';
import { render } from 'react-dom';
class Search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mapLocation: "",
            lat: 37.8651,
            lng: 119.5383
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let input = document.getElementById('nav-search');
        this.autocomplete = new google.maps.places.Autocomplete(input);
    }

 
    handleSubmit(e) {
        debugger
        e.preventDefault();
        let address = this.autocomplete.getPlace().formatted_address;
        let place = this.autocomplete.getPlace();

        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();
        let mapLocation = address ? address : this.autocomplete.getPlace().name;
        this.state = {
            mapLocation: this.autocomplete.getPlace().name,
            lat: lat,
            lng: lng
        };
       
    }

    render() {
        return (
            <div>
                <FilterForm spotType={this.props.spotType} updateFilter={this.props.updateFilter} handleSubmit={this.handleSubmit}/>
                <div className='map-spots'>
                    <SpotIndex spots={this.props.spots} spotType={this.props.spotType} />
                    <SpotMap spots={this.props.spots} updateFilter={this.props.updateFilter} state={this.state} />
                </div>
            </div>
        )
    }
}

export default Search;

