import React from 'react';

class ReviewListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { helpful: 0 }
        this.handleClick = this.handleClick.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ helpful: this.state.helpful + 1 });
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id);
    }

    dateFormat(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const splitted = date.split("-")

        const date_num = parseInt(splitted[2].slice(0, 2));
        const month = months[parseInt(splitted[1])];
        const year = parseInt(splitted[0]);

        const day_of_week = days[new Date(year, parseInt(splitted[1]) - 1, date_num).getDay()];
        return `${month} ${date_num}th, ${year}`;
    }

    render() {

        const delete_button = (this.props.session === this.props.review.user_id ? <button onClick={this.handleDelete} className="review-delete-button">Delete Review</button> : null)
        // const delete_button = (this.props.session ? <button onClick={this.handleDelete} className="review-delete-button">Delete Review</button> : null )

        return (
            <div>
                <span>    
                    {this.props.review.body}
                </span>
            </div>
        );
    }

}

export default ReviewListItem;
