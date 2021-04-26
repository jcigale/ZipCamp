import React from 'react';
import { connect } from 'react-redux';


const Review = ({ review, author }) => {
    const { recommended, body } = review;
   
    const handleRecommended = () => {
        if (recommended) {
            return (<span>{author.first_name} recommends this listing</span>)
        } else {
            return (<span>{author.first_name} does not recommends this listing</span>)
        }
    }

    return (
        <div>
            {this.handleRecommended()}
            <p>{body}</p>
        </div>
    )
};

const mapStateToProps = ({entities: { users }}, { review }) => {
    return {
      author: users[review.author_id]  
    }
};

export default connect(mapStateToProps)(Review);