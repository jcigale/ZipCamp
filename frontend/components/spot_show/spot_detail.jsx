import React from 'react';
import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => (
    reviews.map(review => (
        <ReviewListItemContainer review={review} key={review.id} />
    ))
)

const SpotDetail = ({ spot, reviews }) => {
    return (
        <div>
            <span className='location'>United States &gt; New York &gt; {spot.title}</span>
            <h2>{spot.title}</h2>
            <div>hosted by: Demo User</div>
            <span>{spot.description}</span>
            <div className='details'>
                <h2>Campsite Area</h2>
                <h2>Essentials</h2>
                <h2>Ammentities</h2>
            </div>
            

            <div className='checkin'>
                <h4>details</h4>
                <div>
                    <span><b>Check in:</b> After 2PM</span>
                    <span><b>Check out:</b> Before 12PM</span>
                    <span><b>Cancelation policy:</b> Moderate</span>
                </div>
                <div>
                    <span><b>On arrival:</b> Go straight to camp</span>
                    <span><b>Minimum nights:</b> 1</span>
                    <span><b>Accapts bookings:</b> 6 months out</span>
                </div>
            </div>

            <div className='activities'>
                <h2>Activities</h2>
            </div>

            {reviewList(reviews)}
        </div>


    )
}

export default SpotDetail;