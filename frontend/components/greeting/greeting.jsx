import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='nav-bar'>
            <div className='left-nav'>
                <Link to='/'><img src={logo} alt="logo" /></Link>  
            </div>
            <div className='right-nav'>
                <div><Link to='/login' style={{textDecoration: 'none'}}><span>Log In</span></Link></div>
                <div><Link to='/signup' style={{ textDecoration: 'none' }} className='js-modal-open'><span>Sign Up</span></Link></div>
            </div>
        </nav>
    );
    const personalGreeting = () => (
        <nav className='nav-bar'>
            <div className='left-nav'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                
            </div>
            <div className='right-nav'>
                <button className="header-button" onClick={logout}><span>Log Out</span></button>
            </div>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;