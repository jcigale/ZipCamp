import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: '',
            end_date: '',
            guests: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //debugger
        const spotId = parseInt(this.props.match.params.spotId);
        const booking = Object.assign({}, this.state, { spot_id: spotId });
        this.props.createBooking(booking);
        this.props.history.push(`/users/${this.props.session}/bookings`);
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div className='book-box' >
                <form className='booking-form' onSubmit={this.handleSubmit}>
                <div className='price'>
                    <div className='text'>
                    <span>${this.props.spot.price}</span>
                    <small>per night</small>
                    </div>
                </div>
                <div className='dates'>
                    <div className='in'>
                        <div className='text'>
                        <label>Check in</label>
                        <input type="date" placeholder='Select date'/>
                        </div>
                    </div>
                    <div className='out'>
                        <div className='text'>
                        <label>Check out</label>
                        <input type="date" placeholder='Select date'/>
                        </div>
                    </div>
                </div>
                <div className='guests'>
                    <div className='text'>
                    <label>Guests</label>
                    <select name="" id="">
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                    </select>
                    </div>
                </div>
                <div className='sub'>
                    <button type='submit'>Book for free</button>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(BookingForm);