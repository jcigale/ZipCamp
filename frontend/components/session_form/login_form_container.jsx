import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = ({ errors }) => {
    // debugger
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">create new account</Link>,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: errors => dispatch(clearErrors(errors)),
    }
};

export default connect(mapStateToProps,
    mapDispatchToProps
    )(LoginSessionForm);
