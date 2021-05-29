import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import MarkerManager from '../../util/marker_manager'


export let mapOptions = {
    center: { lat: 43.9523451, lng: -74.5153014 },
    zoom: 10
};



class SpotMap extends React.Component {
   
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        if (this.props.singleSpot) {
            this.props.fetchSpot(this.props.spotId);
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.spots);
        }
    }
    
    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
  
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    handleMarkerClick(spot) {
        this.props.history.push(`spots/${spot.id}`);
    }

    
    render() {
        return (
            <div className='map' ref='map'>
                Map
            </div>
        )
    }


}

export default withRouter(SpotMap);