import React from 'react';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    };

    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-fomr-box'>
                    <h2 className='login-text'>Welcome back!
                    <br/>
                    <small>Lets get you outside.</small>
                    </h2>
                    <br/>
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
                        <button className='session-submit' type='submit'>{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginSessionForm;

