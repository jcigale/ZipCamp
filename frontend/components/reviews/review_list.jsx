import React from 'react';
import ReviewListItem from './review_list_item';

class ReviewList extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const reviews = this.props.reviews.map(review => <ReviewListItem key={review.id} deleteReview={this.props.deleteReview} session={this.props.session} review={review} />)
        const count = this.props.reviews.length ? <h3>{this.props.reviews.length} Written review(s)</h3> : <h3>No reviews yet</h3>
        return (
            <div className="review">
                {count}
                <div className="reviews">
                    {reviews}
                </div>
            </div>
        );
    }

}

export default ReviewList;