import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='nav-bar'>
            <div className='left-nav'>
                <h3>Zipcamp</h3>
            </div>
            <div className='right-nav'>
                <div><Link to='/login' style={{textDecoration: 'none'}}><span>Log In</span></Link></div>
                <div><Link to='/signup' style={{textDecoration: 'none'}}><span>Sign Up</span></Link></div>
            </div>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header">
            <h2 className="header-name">Welcome {currentUser.first_name}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;