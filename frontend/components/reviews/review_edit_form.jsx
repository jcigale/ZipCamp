import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended: true,
            title: this.props.review.title,
            body: this.props.review.body,
            id: this.props.review.id,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const spotId = parseInt(this.props.match.params.spotId);
        const review = Object.assign({}, this.state, { spot_id: spotId });
        this.props.updateReview(review);
        location.reload()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <div className='review-edit-form'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Title
                        <input type='text' value={this.state.title} onChange={this.update('title')} />
                        </label>
                        <label>Review
                        <textarea value={this.state.body} onChange={this.update('body')} />
                        </label>
                        {/* <label>Do you recommend this location?
                        <span>Yes</span>
                        <input type="radio" value={true} onChange={this.update('recommended')} />
                        <span>No</span>
                        <input type="radio" value={false} onChange={this.update('recommended')} />
                    </label> */}
                        <button className='submit-review' type='submit'>Edit Review</button>
                        <button className='review-exit'>Close</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(ReviewEditForm);