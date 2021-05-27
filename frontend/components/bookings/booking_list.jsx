import React from 'react';
import BookingListItem from './booking_list_item';


class BookingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showing: 'Trips' }
        this.handleReviewClick = this.handleReviewClick.bind(this);
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
        const trips = this.props.user.bookings.map(trip => <BookingListItem key={trip.id} trip={trip} delete={this.props.deleteBooking} update={this.props.updateBooking} history={this.props.history} fetchSpot={this.props.fetchSpot} />)
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
                   <span className='num-trips'>{this.props.user.bookings.length} Trip(s):</span>
                   {trips}
               </div>

           </div>
        )
    }

}

export default BookingList;