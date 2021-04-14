import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute } from '../util/route_util'
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './spots/search_container';
import SpotShowContainer from './spot_show/spot_show_container';

const App = () => (
    <div>
        <header>
            <span>Recreate responsibly during COVID-19</span>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SearchContainer} />
            <Route path="/spots/:spotId" component={SpotShowContainer} />
        </Switch>
    </div>
)

export default App;