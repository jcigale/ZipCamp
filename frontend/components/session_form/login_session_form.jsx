import React from 'react';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    componentWillUnmount() {
        this.props.clearErrors(this.props.errors)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { first_name: 'Demo', last_name: 'User', email: 'demo@gmail.com', zipcode: 12345, password: '12345678' }
        this.props.processForm(demoUser);
    }


    renderErrors() {
        if (this.props.errors.length > 0) return(
            <div className='errors'>
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={i}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        )
    };

    render() {
        return (
            <div className='login-form-container'>
                <h2 className='login-text'>Welcome back!
                    <br />
                    <small>Lets get you outside.</small>
                </h2>
                <br />
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    {this.renderErrors()}
                    <div className='login-form'>
                        <br/>
                        <label>
                            <input type='text' 
                                placeholder='Email address...'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className='login-input' />
                        </label>
                        <br/>
                        <label>
                            <input type='text'
                                placeholder='Password...'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='login-input' />
                        </label>
                        <br/>
                        <button className='session-submit' type='submit'>Log in</button>
                        <br/>
                        <button className='demo-login' onClick={this.handleDemo}>Demo Log in</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginSessionForm;

