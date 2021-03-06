import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='nav-bar'>
            <div className='left-nav'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                
            </div>
            <div className='right-nav'>
                <a href="https://www.linkedin.com/in/john-c-467b21ba/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/jcigale" target="_blank"><i className="fab fa-github"></i></a>
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
                <a href="https://www.linkedin.com/in/john-c-467b21ba/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/jcigale" target="_blank"><i className="fab fa-github"></i></a>
                <Link to={`/users/${currentUser.id}/bookings`} className='triplink'><span className="trips">Trips</span></Link>
                <Link to={'/'} className="logout" onClick={logout}><span>Log Out</span></Link>
            </div>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;