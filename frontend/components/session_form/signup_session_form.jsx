import React from 'react';


class SignupSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zipcode: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    renderErrors() {
        if (this.props.errors.length > 0) return (
            <div className='signup-errors'>
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
            <div className='signup-form-container is-open'>
                <div className='screen js-modal-close'></div>
                <div className='signup-module'>
                    <h2>Join Zipcamp
                    <br/>
                    <small>Discover the best camping near me</small>
                    </h2>
                    <form onSubmit={this.handleSubmit} className='signup-form-box'>
                        {this.renderErrors()}
                        <div className='signup-form'>
                            <br />
                            <div className='names'>
                            <label>
                                <input type='text'
                                    placeholder='First name'
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className='signup-name' />
                            </label>
                            <br/>
                            <label>
                                <input type='text'
                                    placeholder='Last name'
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    className='signup-name' />
                            </label>
                            </div>
                            <br />
                            <label>
                                <input type='text'
                                    placeholder='Email address'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className='signup-input' />
                            </label>
                            <br />
                            <label>
                                <input type='text'
                                    placeholder='Creat a password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className='signup-input' />
                            </label>
                            <br />
                            <label>
                                <input type='text'
                                    placeholder='Zip code'
                                    value={this.state.zipcode}
                                    onChange={this.update('zipcode')}
                                    className='signup-input' />
                            </label>
                            <br/>
                            <button className='session-submit' type='submit'>Join Zipcamp</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupSessionForm;

