import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended: true,
            title: '',
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
                        <input type="radio" value='Yes' onChange={this.update('recommended')} checked/>
                        <input type="radio" value='No' onChange={this.update('recommended')} checked/>
                    </label>
                    <label>Title
                        <text value={this.state.title} onChange={this.update('title')}/>
                    </label>
                    <label>Review
                        <textarea value={this.state.body} onChange={this.update('body')}/>
                    </label>
                    <button type='submit'>Leave Review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);
