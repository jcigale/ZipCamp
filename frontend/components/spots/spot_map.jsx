import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import MarkerManager from '../../util/marker_manager'


const mapOptions = {
    center: { lat: 43.9523451, lng: -74.5153014 },
    zoom: 10
};



class SpotMap extends React.Component {

    // initAutocomplete() {
    //     const map = this.refs.map;
    //     const input = document.getElementById("pac-input");
    //     const searchBox = new google.maps.places.SearchBox(input);
    //     //debugger
    //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    //     // Bias the SearchBox results towards current map's viewport.
    //     map.addListener("bounds_changed", () => {
    //         searchBox.setBounds(map.getBounds());
    //     });
        //let markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        // searchBox.addListener("places_changed", () => {
        //     const places = searchBox.getPlaces();

        //     if (places.length == 0) {
        //         return;
        //     }
        //     // Clear out the old markers.
        //     markers.forEach((marker) => {
        //         marker.setMap(null);
        //     });
        //     markers = [];
        //     // For each place, get the icon, name and location.
        //     const bounds = new google.maps.LatLngBounds();
        //     places.forEach((place) => {
        //         if (!place.geometry || !place.geometry.location) {
        //             console.log("Returned place contains no geometry");
        //             return;
        //         }
        //         const icon = {
        //             url: place.icon,
        //             size: new google.maps.Size(71, 71),
        //             origin: new google.maps.Point(0, 0),
        //             anchor: new google.maps.Point(17, 34),
        //             scaledSize: new google.maps.Size(25, 25),
        //         };
        //         // Create a marker for each place.
        //         markers.push(
        //             new google.maps.Marker({
        //                 map,
        //                 icon,
        //                 title: place.name,
        //                 position: place.geometry.location,
        //             })
        //         );

        //         if (place.geometry.viewport) {
        //             // Only geocodes have viewport.
        //             bounds.union(place.geometry.viewport);
        //         } else {
        //             bounds.extend(place.geometry.location);
        //         }
        //     });
        //     map.fitBounds(bounds);
        // });
    // }
   
    componentDidMount() {
        const map = this.refs.map;
        // this.initAutocomplete()
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
        if (this.props.singleSpot) {
            const targetSpotKey = Object.keys(this.props.spots)[0];
            const targetSpot = this.props.spots[targetSpotKey];
            this.MarkerManager.updateMarkers([targetSpot]); //grabs only that one bench
        } else {
            this.MarkerManager.updateMarkers(this.props.spots);
        }
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