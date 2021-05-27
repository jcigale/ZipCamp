import React from 'react';
import ReviewEditForm from '../reviews/review_edit_form_container';

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
        location.reload();
    }

    handleUpdate(e) {
        e.preventDefault
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
        debugger
        const delete_button = (this.props.session === this.props.review.author_id ? <button onClick={this.handleDelete} className="review-delete-button">Delete Review</button> : null)
        const edit_button = (this.props.session === this.props.review.author_id ? <button onClick={this.handleUpdate} className="review-edit-button">Edit Review</button> : null)

        return (
            <div className='review-item'>
                <div className='review-title'><img src={tent} /> <span className='text'>{this.props.review.title}</span></div>
                <span className='body'>    
                    {this.props.review.body}
                </span>
                <div className='buttons'>
                    <button className='helpful'><i className="far fa-thumbs-up"></i> Helpful</button>
                    {edit_button}
                    {delete_button}
                </div>
                <div className="border"></div>
                <ReviewEditForm review={this.props.review}/>
            </div>
        );
    }

}

export default ReviewListItem;
