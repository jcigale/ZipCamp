import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Splash extends React.Component {

    componentDidMount() {
        let nav = document.getElementsByClassName('nav-bar');
        nav[0].classList.add('splash');

        let covid = document.getElementsByClassName('covid-header');
        covid[0].classList.add('splash')  
    }

    componentWillUnmount() {
        let nav = document.getElementsByClassName('nav-bar splash');
        nav[0].classList.remove('splash');

        let covid = document.getElementsByClassName('covid-header splash');
        covid[0].classList.remove('splash')
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
                <div className='where'>
                    <label>WHERE TO?</label>
                    <input id='splash-search' className='search' type="text" placeholder="Try..."></input>
                </div> 
                <div className='date'>
                    <label>DATES</label>
                    <input type="date" placeholder="Enter dates"/>
                </div>
                <div className='accomodations'>
                    <label>ACCOMODATIONS</label>
                    <select className="type" >
                        <option value="All listing"></option>
                        <option value="Campsites"></option>
                        <option value="RVs"></option>
                        <option value="Lodging"></option>
                    </select>
                </div>
                    <Link to='/spots'><button className='search-button'><i className="fas fa-search"></i></button></Link>
                </div>
                <img src={toilet} className='toilet'/>
        </div>
    )}
}

export default withRouter(Splash);