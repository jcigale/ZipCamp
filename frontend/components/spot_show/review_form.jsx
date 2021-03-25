import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended: true,
            body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const spotId = parseInt(this.props.match.params.spotId);
        const review = Object.assign({}, this.state, { spot_id: spotId });
        this.props.createReview(review);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div className='review-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>Do you recommend this location?
                        <input type="radio" value={this.state.recommended = true} onChange={this.update('recommended')} checked>Yes</input>
                        <input type="radio" value={this.state.recommended = false} onChange={this.update('recommended')} checked>No</input>
                    </label>
                    <label>Review
                        <textarea value={this.state.body} onChange={this.update('body')}/>
                    </label>
                    <button tyo='submit'>Leave Review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);
