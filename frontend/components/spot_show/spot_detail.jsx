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
            <h2>{spot.title}</h2>
            <span>{spot.description}</span>
            {reviewList(reviews)}
        </div>
    )
}

export default SpotDetail;