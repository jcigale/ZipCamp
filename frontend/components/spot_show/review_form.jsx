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
        debugger
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
            <div>
            <div className='review-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input type='text' value={this.state.title} onChange={this.update('title')}/>
                    </label>
                    <label>Review
                        <textarea value={this.state.body} onChange={this.update('body')}/>
                    </label>
                    <label>Do you recommend this location?
                        <span>Yes</span>
                        <input type="radio" value={true} onChange={this.update('recommended')} />
                        <span>No</span>
                        <input type="radio" value={false} onChange={this.update('recommended')} />
                    </label>
                    <button className='submit-review' type='submit' onClick={this.handleSubmit} >Leave Review</button>
                </form>
            </div>

            </div>
        )
    }
}

export default withRouter(ReviewForm);
