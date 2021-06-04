import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Splash extends React.Component {
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
        let nav = document.getElementsByClassName('nav-bar');
        nav[0].classList.add('splash');

        let covid = document.getElementsByClassName('covid-header');
        covid[0].classList.add('splash'); 

        let splashInput = document.getElementById('splash-search');
        this.autocomplete = new google.maps.places.Autocomplete(splashInput);
    }

    componentWillUnmount() {
        let nav = document.getElementsByClassName('nav-bar splash');
        nav[0].classList.remove('splash');

        let covid = document.getElementsByClassName('covid-header splash');
        covid[0].classList.remove('splash')
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let place = this.autocomplete.getPlace();
        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();

        this.state = {
            mapLocation: this.autocomplete.getPlace().name,
            lat: lat,
            lng: lng
        };

  
        this.props.history.push({
            pathname: '/spots',
            search: `lat=${lat}&lng=${lng}`
        });

        this.setState({ state: this.state });

    }

    render() {
        return (
        <div className='splash'>
            <div className='back'></div>
            
            <div className='heading'>
                <h1>Find yourself outside.</h1>
                <h2>Discover and book tent camping, RV</h2>
                <h2>parks, cabins, treehouses, and glamping.</h2>  
            </div>

            <div className='splash-search'>  
                <form onSubmit={this.handleSubmit}>
                <div className='where'>
                    <label>WHERE TO?</label>
                    <input id='splash-search' className='search' type="text" placeholder="Try Long Lake, Yellowstone, Massachussetts..."></input>
                </div> 
                    <button type='submit' className='search-button'><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <img src={toilet} className='toilet'/>
        </div>
    )}
}

export default withRouter(Splash);