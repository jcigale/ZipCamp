import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import queryString from 'query-string';


// export let mapOptions = {
//     center: { lat: 43.9523451, lng: -74.5153014 },
//     zoom: 10
// };



class SpotMap extends React.Component {

    constructor(props) {
        super(props)
    }
   
    componentDidMount() {
        debugger
        let { lat, lng } = queryString.parse(this.props.location.search);
        let latitude = parseFloat(lat);
        let longitude = parseFloat(lng);

        latitude ||= 43.9523451;
        longitude ||= -74.5153014;

        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 10
        };

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
            this.props.updateBounds(bounds);
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

export const spotMap = SpotMap.map

export default withRouter(SpotMap);