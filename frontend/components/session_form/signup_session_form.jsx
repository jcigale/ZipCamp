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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        return (
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
            <div className='signup-form-container'>
                <form onSubmit={this.handleSubmit} className='signup-fomr-box'>
                    <h2>ZipCamp</h2>
                    <h3>Search, discover and book</h3>
                    <h3>Everywhere you want to camp.</h3>
                    <br />
                    {this.renderErrors()}
                    <div className='signup-form'>
                        <br />
                        <label>
                            <input type='text'
                                placeholder='First name'
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className='signup-input' />
                        </label>
                        <br/>
                        <label>
                            <input type='text'
                                placeholder='Last name'
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className='signup-input' />
                        </label>
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
        )
    }
}

export default SignupSessionForm;
