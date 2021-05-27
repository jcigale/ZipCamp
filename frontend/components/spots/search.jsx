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
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            mapLocation: e.target.value
        });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.receiveLocation(this.state);
        this.props.history.push({
            pathname: `/spots/${this.state.lat},${this.state.lng}`,
            state: this.state
        });
    }

    componentDidMount() {
        let input = document.getElementById('nav-search');
        let autocomplete = new google.maps.places.Autocomplete(input);
        let that = this;
        autocomplete.addListener('place_changed', () => {
            let address = autocomplete.getPlace().formatted_address;
            let place = autocomplete.getPlace();

            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();
            let mapLocation = address ? address : autocomplete.getPlace().name;
            that.setState({
                mapLocation: autocomplete.getPlace().name,
                lat: lat,
                lng: lng
            });
        });
    }


    render() {
        return (
            <div>
                <FilterForm spotType={this.props.spotType} updateFilter={this.props.updateFilter} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
                <div className='map-spots'>
                    <SpotIndex spots={this.props.spots} spotType={this.props.spotType} />
                    <SpotMap spots={this.props.spots} updateFilter={this.props.updateFilter} />
                </div>
            </div>
        )
    }
}

export default Search;

