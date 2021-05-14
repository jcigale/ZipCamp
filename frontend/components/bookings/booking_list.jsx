import React from 'react';
import BookingListItem from './booking_list_item';
import ReviewListItem from '../reviews/review_list_item';

class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showing: 'Trips' }
        this.handleReviewClick = this.handleReviewClick.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchBookings(this.props.user.id)
    }

    handleReviewClick(id) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/spots/${id}`);
        }
    }

    render() {
        debugger 

        if (!(this.props.session === this.props.user.id)) {
            this.props.history.push("/");
        }
        const trips = this.props.user.bookings.reverse().map(trip => <BookingListItem key={trip.id} trip={trip} delete={this.props.deleteBooking} update={this.props.updateBooking} history={this.props.history} />)

        return (
           <div className='booking'>
               <div className='bio'>
                   <div className='user'>
                        <img src={tent} />
                        <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
                   </div>
                    <span><i className="fas fa-heart"></i> Zipcamper since May 2021</span>
               </div>
               <div className='trips'>
                   <span>{this.props.bookings.length} Trips</span>
                   {trips}
               </div>

           </div>
        )
    }

}

export default BookingIndex;